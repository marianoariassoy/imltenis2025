import Title from "@/components/Title";
import Link from "next/link";
import Item from "@/components/ItemSmall";
import { Serie } from "@/types/";
import { Container } from "@/components/Container";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "Orden de juego",
  description: "Orden de juego de la liga de clubes IML Tenis",
};

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/series/upcoming",
  );
  const data = (await response.json()) as Serie[];
  if (!data)
    return (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full fade-in flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-1">🙈</h1>
        <span className="text-primary text-center font-semibold">
          Por ahora no se juega nada.
        </span>
      </div>
    );

  function obtenerProximoFinDeSemana(fecha: Date = new Date()): string {
    const dia = fecha.getDay(); // 0 = domingo, 6 = sábado

    const sabado = new Date(fecha);

    if (dia === 0) {
      // Domingo: mantener el fin de semana actual
      sabado.setDate(fecha.getDate() - 1);
    } else if (dia === 6) {
      // Sábado: mantener el fin de semana actual
      sabado.setDate(fecha.getDate());
    } else {
      // Lunes a viernes: próximo sábado
      sabado.setDate(fecha.getDate() + (6 - dia));
    }

    const domingo = new Date(sabado);
    domingo.setDate(sabado.getDate() + 1);

    const numeroSabado = sabado.getDate();
    const numeroDomingo = domingo.getDate();

    const mes = domingo.toLocaleDateString("es-AR", {
      month: "long",
    });

    return `${numeroSabado} y ${numeroDomingo} de ${mes}`;
  }

  const title = "Orden de juego " + obtenerProximoFinDeSemana();
  const description =
    (data.length + 10) * 3 +
    " partidos en " +
    (data.length + 10) +
    " series, " +
    (data.length + 10) * 2 +
    " equipos, con un total de " +
    (data.length + 10) * 10 +
    " jugadores en la fecha — ";

  return (
    <Container>
      <Title title={title} emoji="🗓️" />
      <div className="w-full -mt-4">
        <Marquee text={description} />
      </div>

      <div className="overflow-x-auto whitespace-nowrap mt-2">
        <table className="table w-full mb-3">
          <thead>
            <tr>
              <th scope="col">Fecha y hora</th>
              <th scope="col">Local</th>
              <th scope="col">Score</th>
              <th scope="col">Visitante</th>
              <th scope="col">Categoría</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="text-secondary font-medium flex gap-x-2">
                    {item.top ? <span className="text-xl">⭐️</span> : null}
                    <span className="text-primary">{item.date}</span>
                    <span>
                      {item.hour ? <span>{item.hour} hs.</span> : "—"}
                    </span>
                  </div>
                </td>
                <td>
                  <Item
                    link={`/equipos/${item.home_slug}`}
                    title={item.home_name}
                    image={item.home_image}
                  />
                </td>
                <td>
                  {item.score ? (
                    <Link
                      className="hover:text-primary"
                      href={`/series/${item.id}`}
                    >
                      {item.score}
                    </Link>
                  ) : (
                    <div>⚡️</div>
                  )}
                </td>

                <td>
                  <Item
                    link={`/equipos/${item.away_slug}`}
                    title={item.away_name}
                    image={item.away_image}
                  />
                </td>
                <td>
                  <Link
                    href={`/torneos/${item.tournament_slug}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {item.tournament_name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default page;
