type RateLimitData = {
  count: number;
  resetAt: number;
};

const requests = new Map<string, RateLimitData>();

const MAX_REQUESTS = 10;
const WINDOW_MS = 30 * 60 * 1000; // 30 minutos

export function checkRateLimit(ip: string) {
  const now = Date.now();

  const current = requests.get(ip);

  // Primera consulta o ventana vencida
  if (!current || current.resetAt < now) {
    requests.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });

    return {
      allowed: true,
      remaining: MAX_REQUESTS - 1,
    };
  }

  // Límite alcanzado
  if (current.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  // Incrementar contador
  current.count++;

  return {
    allowed: true,
    remaining: MAX_REQUESTS - current.count,
  };
}
