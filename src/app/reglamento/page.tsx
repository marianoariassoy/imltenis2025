import Title from "@/components/Title";
import Filter from "./Filter";

export const metadata = {
  title: "Reglamento IML Tenis",
  description: "Reglamento IML Tenis Clausura 2025",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/rankings/campeones",
    title: "Reglamento IML Tenis",
    description: "Reglamento IML Tenis Clausura 2025",
    images: [
      {
        url: "https://imltenis.com.ar/assets/imltenis.jpg",
        width: 500,
        height: 500,
        alt: "IML Tenis",
      },
    ],
  },
};

const page = () => {
  const data = [
    {
      title: "",
      text: `La presente liga de clubes se desarrolla desde el mes de marzo hasta diciembre, en dos torneos (Apertura y Clausura), que se disputan los días sábados y domingos, según corresponda. Está dirigida a jugadores y jugadoras amateurs.
En cada fecha se disputarán tres o dos encuentros entre dos equipos representantes de distintos clubes de tenis.`,
    },
    {
      title: "Modalidad de juego",
      text: `En las categorías Damas, Libres y +35 se jugará 1 single y 2 dobles.
      Todos los partidos se disputarán al mejor de 3 sets con tie break. El tercer set será supertie break a 10 puntos con diferencia de dos.
      Los 3 encuentros deberán disputarse en simultaneo comenzando al mismo tiempo, salvo clubes con 2 canchas (ver el reglamento).

      En las categorías Mixtas se jugará 2 dobles mixtos y simultaneos. Las series podrán quedar empatadas en la primera fase, se sumará 1 punto para cada equipo.
En playoffs, en caso de empate se disputará un tercer punto, con duración de un set, conformado por una tercera pareja, conformada por jugsadores que no hayan disputado los 2 puntos anteriores.
      `,
    },
    {
      title: "Puntuación",
      text: `Cada encuentro ganado sumará un punto, es decir, ganando los 3 encuentros de la serie se sumarán 3 puntos al equipo vencedor, ganando 2 a 1 se sumarán 2 puntos al equipo vencedor y 1 punto al equipo rival, por lo que todos los encuentros ganados suman puntos.
      
      En caso de empate por puntos se desempatará por mayor cantidad de series ganadas, de persistir el empate, se desempatará por doble 1 ganados, siguiendo la diferencia de sets y en el último caso diferencia de games. 
      Todos los resultados podrán ser vistos en este sitio web.`,
    },
    {
      title: "Formación",
      text: `De los cuatro doblistas convocados para la serie, el jugador con mejor ranking deberá ser asignado obligatoriamente al Doble 1.`,
    },
    {
      title: "Pelotas",
      text: `El equipo local es responsable de proveer las pelotas para el encuentro.
Se podrán utilizar pelotas nuevas o con un solo uso previo (máximo).
En caso de que el equipo visitante objete el estado de las pelotas, el local deberá contar con tubos nuevos disponibles.
Si el local no dispone de tubos nuevos, el visitante podrá aportar pelotas nuevas, y el costo será abonado por el equipo local.
En caso de que el equipo local se niegue a utilizar pelotas nuevas o a abonar el costo correspondiente, el encuentro se dará por perdido al equipo local por W.O. general. 
       `,
    },
    {
      title: "Días y Horarios",
      text: `Las categorías de Damas jugarán los días sábados y domingos en un horario a determinar por el equipo local en cada oportunidad, que deberá ser los sábados entre las 12 y las 17 hs. y los domingos entre las 9 y las 17 hs.
      La categoría Mixto Tercera, jugará los días sábados en un horario a determinar por el equipo local en cada oportunidad, que deberá ser entre las 12 y las 17 hs. 
      El resto de las categorías jugarán los días domingos en un horario a determinar por el equipo local en cada oportunidad, que deberá ser entre las 9 y las 17 hs.

      Los horarios deben informarse por el capitán del equipo local en el chat de capitanes de WhatsApp antes de las 17:00 hs. del miércoles de la semana correspondiente, de lo contrario se procederá a la quita de 1 punto de la serie al equipo local, sumándose 1 punto por cada día de atraso.`,
    },
    {
      title: "Planillas",
      text: `La confección de la planilla estará a cargo del capitán del equipo local y deberá ser completada conjuntamente por ambos equipos antes del inicio de la serie.
Como buena práctica, se recomienda doblar la hoja de la planilla a la mitad, de modo que en cada lado quede visible la formación de cada equipo.
Al finalizar los encuentros, deberán registrarse los resultados correspondientes y la planilla deberá ser firmada por ambos capitanes.
La ausencia de la planilla o la falta de algún dato requerido podrá dar lugar a la posible nulidad de los partidos disputados en caso de presentarse un incidente entre los equipos. `,
    },
    {
      title: "Carga de resultados",
      text: `El capitán del equipo ganador será el encargado de cargar el resultado de la serie en capitanes.imltenis.com.ar antes del Martes a las 12:00 hs. de cada semana. Una vez realizada la carga, deberá compartir el enlace generado por el sistema en el grupo de WhatsApp de capitanes, indicando la serie correspondiente.  

Además, será obligatorio conservar la planilla en papel firmada por ambos capitanes, ya que en caso de cualquier reclamo, hasta 48 hs. desde el inicio de la serie, esta será el único documento válido para verificar la información.  

El incumplimiento de la carga por parte del capitán del equipo ganador de la serie resultará en la anulación de los puntos obtenidos por su equipo, mientras que el equipo rival mantendrá los puntos ganados en cancha. No habrá posibilidad de reclamo una vez aplicada la sanción.`,
    },
    {
      title: "Tercer tiempo",
      text: `Si bien no son obligatorios, desde la organización lo alentamos y valoramos profundamente cuando se realizan. Creemos que son una parte fundamental del espíritu del torneo, ya que brindan un espacio para compartir entre jugadores, más allá del resultado deportivo.
Estos momentos ayudan a fortalecer los lazos entre clubes, fomentan el respeto, la camaradería y crean un ambiente mucho más cálido y humano en la competencia.
Por eso, seguimos promoviendo los terceros tiempos como un componente esencial de cada jornada, y alentamos a los equipos locales a organizar algo simple pero significativo para recibir a sus visitantes, compartiendo los gastos. Un pequeño gesto puede dejar una gran impresión, especialmente en fechas donde algunos equipos deben hacer largos viajes.`,
    },
    {
      title: "Formación Incompleta",
      text: `Si el equipo completo o algún jugador no se presentara a jugar la fecha correspondiente (WO) deberá avisar con un mínimo de 24 hs. al capitán rival por escrito al chat de capitanes de WhatsApp, de lo contrario deberá correr con los gastos que correspondan al equipo local, como ser alquiler de canchas. 
      Se podrá presentar WO tanto de single y/o de doble 2, pudiéndose disputar el resto de el o los parciales.`,
    },
    {
      title: "Retiro",
      text: `En caso de que un partido se interrumpa por el retiro de un jugador, el resultado se completará a favor del oponente adjudicándole los games necesarios para alcanzar un marcador válido.
Ejemplo: si al momento de la interrupción el resultado parcial es 6-3, 2-1, el resultado final será 6-3, 6-1.
Este resultado será el que se tome en cuenta para la confección de desempates por porcentajes de sets o games.`,
    },
    {
      title: "Coaching",
      text: `Los capitanes pueden intercambiar pareceres, comentarios y/o efectuar directivas a sus jugadores, sobre el partido o cualquier otro tema que tenga interés. Si el capitán no estuviere dentro de la cancha acompañando a sus jugadores podrá ingresar en el momento de algún cambio de lado. Todos los comentarios deberán ser efectuados en un nivel de tono, forma y contenido que no moleste a ningún jugador rival. Cuando el capitán fuera jugador y se encontrará disputando un partido, podrá delegar esta función de coaching en otra persona. Y responderá en todo por ella.`,
    },
    {
      title: "Capitanía",
      text: `La organización se reserva el derecho a solicitar cambio de capitanía en caso de considerarlo necesario o bien de solicitar la incorporación de un subcapitan al chat de capitanes en reemplazo del capitán, a efectos de facilitar la comunicación y gestionar de manera más diligente las cuestiones administrativas referentes a la organización de cada serie a desarrollarse. Este sub capitán/a deberá ser un jugador/a integrante del plantel.`,
    },
    {
      title: "En caso de lluvia",
      text: `El equipo local deberá avisar como mínimo dos horas antes del horario del partido al chat de capitanes de WhatsApp que sus canchas están en condiciones para jugar. Pasado este límite, el equipo visitante no está en la obligación de aceptar ir a jugar.
      La reprogramación se pasará para el final del torneo, salvo que los equipos involucrados acuerden y
      decidan jugar antes, informando previamente a esta organización.`,
    },
    {
      title: "Reinicio de serie reprogramada",
      text: `Al reprogramarse una serie que no ha comenzado, por razones climáticas, y/o algún otro motivo, esta se considerará como una serie nueva en todos los aspectos. Esto incluye la anulación de cualquier configuración previa, tales como formaciones de equipos, selección de jugadores, y el orden de los partidos.`,
    },
    {
      title: "Suspensión de un partido por falta de tiempo",
      text: `En el caso de que el equipo local tenga que suspender el partido por compromisos de alquiler de canchas o similares, se considerará ese partido como abandono del equipo local. Se computará el resultado hasta ese momento y abandono local.`,
    },
    {
      title: "Suspensión de partidos comenzados",
      text: `Los partidos suspendidos por razones climáticas, y/o algún otro motivo, ya iniciados, serán reprogramados por esta asociación, con los parciales y los jugadores participantes. En caso de no presentase alguno de los jugadores en la fecha reprogramada, el parcial en disputa será considerado perdido por abandono, debiendo continuar los demás que faltasen terminar.`,
    },
    {
      title: "Impuntualidad de jugadores",
      text: `El tiempo máximo de tolerancia será de 15 minutos. Superado este plazo, se considerará abandono del partido. El equipo que abandone deberá notificarlo por escrito en el chat de capitanes de WhatsApp y hacerse cargo de los gastos correspondientes al equipo rival (ej. alquiler de cancha).`,
    },
    {
      title:
        "Impuntualidad en el inicio de algún encuentro por falta de disponibilidad de cancha",
      text: `Se sugiere a los clubes locales establecer al menos dos horas de diferencia entre series. El horario fijado para el inicio debe respetarse, con un máximo de 30 minutos de tolerancia para los jugadores visitantes. Superado ese plazo, el capitán visitante deberá informar la situación en el chat de capitanes. La organización evaluará si la demora responde a una causa justificada (ej. espera de ambulancia, lluvia u otra circunstancia excepcional). En caso contrario, el equipo visitante podrá reclamar los puntos no iniciados en tiempo y forma. La decisión final quedará siempre a cargo de la organización.`,
    },
    {
      title: "Mala formación",
      text: `En caso de incurrir en una mala conformación de las parejas de dobles, la sanción implicará la pérdida exclusiva de los parciales correspondientes a los dobles involucrados (Doble 1 y Doble 2). El partido de singles no se verá afectado, por lo que se conservará el resultado obtenido en cancha.`,
    },
    {
      title: "Dobles invertidos",
      text: `En caso de disputarse una serie con los dobles invertidos (Doble 1 vs. Doble 2 de ambos equipos), prevalecerá la designación de cancha consignada en la planilla oficial, siempre que esta haya sido completada y firmada por ambos capitanes antes del inicio de los partidos.
Si no existiera dicha indicación previa, ambos partidos de dobles deberán repetirse durante la misma fase del torneo, manteniendo idéntica formación en cada pareja, en la misma sede. En caso de no cumplirse esta condición, los resultados de ambos partidos quedarán anulados.`,
    },
    {
      title: "Feriados largos",
      text: `Queda a criterio de la organización la programación de partidos en dichos días.`,
    },
    {
      title: "Alquiler de canchas",
      text: `La liga reúne a clubes cuya principal fuente de ingresos proviene del alquiler de canchas. Cada jugador debe abonar, como local o visitante, la suma fijada por la organización en el club donde se dispute la serie.
El equipo que presente formación incompleta sin aviso previo de al menos 24 horas en el chat de capitanes deberá abonar igualmente el costo correspondiente al alquiler de la cancha.
Los emprendimientos urbanísticos que no cobran alquiler por el uso de canchas, por estar cubierto con expensas, podrán hacerlo en condición de local y destinar lo recaudado a cubrir gastos de participación como visitantes, quedando a su criterio el cobro a los equipos visitantes.
La única forma de evitar el pago del alquiler es informar la ausencia con 24 horas de anticipación, lo que permite al club local disponer de la cancha para alquilarla a terceros.`,
    },
    {
      title: "Instalaciones necesarias",
      text: `El club deberá poder ofrecer para jugar un partido completo un mínimo de 2 canchas reglamentarias de tenis, vestuarios con comodidades suficientes.
      Dichas canchas deberán ser de un mismo tipo de superficie, las que serán previamente aprobadas por esta asociación. 
      Los 3 encuentros deberán disputarse en el mismo horario, con excepción de clubes con 2 canchas, ver apartado`,
    },
    {
      title: "Clubes con 2 canchas",
      text: `En caso de disputarse una serie en un club con dos canchas, cada jugador podrá participar en un único encuentro dentro de la misma serie. La serie deberá desarrollarse en dos tandas consecutivas, sin excepción, iniciándose la segunda tanda no más tarde de las 17:00 horas.

Asimismo, la programación de la serie deberá evitar que el Doble 2 se dispute en el primer turno sin estar acompañado por el Doble 1, a fin de prevenir posibles walkovers (WO) de último momento en el Doble 1, lo que provocaría la anulación de la serie. `,
    },
    {
      title: "Excepciones a la programación",
      text: `Cuando por coincidencia de fechas con la realización del circuito de tenis algún club tenga compromisos asumidos con anterioridad, podrá solicitar a esta asociación, a considerar, la no programación de partidos, la misma deberá ser presentada con anterioridad a la realización de la programación oficial e indicará fechas ciertas de los compromisos asumidos.
      Esta posibilidad solo podrá ser concedida por una vez, por torneo, y de manera excepcional. 
      Se hace saber que NO es obligatorio para la organización el otorgar dicha excepción pudiendo siempre la organización no hacer lugar al pedido. `,
    },
    {
      title: "Lista de buena fe",
      text: `El mejor jugador del equipo deberá ir primero en la lista, siguiendo este criterio para el resto de la lista, siendo el último jugador el de más bajo nivel.
      Es responsabilidad de los capitanes chequear que estén todos sus jugadores y colocados en la posición que consideren correcta antes del comienzo del torneo. En las categorías con límite de edad, tercera y segunda +35, se considerará que el jugador está dentro de la categoría, al cumplir años dentro del año calendario de inicio del torneo.`,
    },
    {
      title: "Cantidad de jugadores por equipo",
      text: `El límite de integrantes de la lista de buena fe es de 6 a 20 jugadores.`,
    },
    {
      title: "Equivalencias de niveles en otros torneos",
      text: `Quinta Libre y Cuarta Damas: Jugadores categoría 125, C. 
      Cuarta Libre, Tercera +35, 
      Tercera Damas: Jugadores categoría 250 a 500, B2, B-. 
      Tercera Libre: Jugadores categoría 500 a 750, B1 
      Segunda Libre: Jugadores categoría 750 a 1000, A1, A2 
      Primera Libre: Jugadores categoría 1000, Super A.
      `,
    },
    {
      title: "Auditoria de lista de buena fe rivales",
      text: `Cada capitán podrá objetar la ubicación de algún jugador rival en la lista de algún equipo rival. Para tal fin deberá informarlo por mail a hola@imltenis.com.ar, mencionando equipo, ubicación objetada, motivos y ubicación que considera correcta. No se tomarán reclamos por teléfono o WhatsApp. Tal objeción, será tomada de forma anónima.`,
    },
    {
      title: "Suplentes naturales",
      text: `Cualquier jugador de nivel inferior puede jugar en un nivel inmediatamente superior para un equipo perteneciente al mismo club del jugador. Si dicho jugador gana un partido en un nivel superior y vuelve a ser convocado en ese nivel, no podrá participar más en el nivel inferior.`,
    },
    {
      title: "Dos o más equipos por división",
      text: `Cuando un club tenga dos o más equipos en la misma categoría, éstos se considerarán como equipos distintos, los jugadores de estos equipos no podrán jugar en ningún otro equipo de la misma categoría a la que pertenezcan.`,
    },
    {
      title: "Ascenso de equipos",
      text: `El sistema de ascenso será personalizado para cada categoría, adaptándose a la cantidad de equipos y al formato de competencia específico. Este enfoque garantiza una experiencia de torneo más justa y equitativa, reflejando las necesidades únicas de cada categoría y promoviendo un ambiente competitivo saludable para todos.

      Los equipos ascendidos se requerirá la participación de todos los jugadores que hayan aportado al menos un punto, con excepción de los jugadores que presenten diferencia negativa entre partidos ganados y perdidos, para estos el ascenso será optativo.
    `,
    },
    {
      title: "Descenso de equipos",
      text: `Los equipos que desciendan deberán participar en la categoría inmediatamente inferior con la totalidad de sus jugadores, a excepción de aquellos que hayan finalizado el torneo con un balance positivo de +3 o superior en partidos ganados.`,
    },
    {
      title: "Descenso de jugadores",
      text: `Un jugador podrá solicitar el descenso voluntario a la categoría inmediatamente inferior únicamente al inicio de un nuevo torneo, siempre que el balance total de partidos ganados y perdidos en dicha categoría sea de –3 o inferior en todas sus participaciones.`,
    },
    {
      title: "Ascensos de jugadores",
      text: `La organización se reserva el derecho de ascender a cualquier jugador cuyo nivel supere ampliamente el de su categoría actual. Asimismo, podrá aplicar este criterio a jugadores que registren participaciones y/o triunfos en torneos de categorías significativamente superiores en un plazo reciente de hasta dos años. En caso de reclamo, la organización podrá disponer la quita de puntos de la serie involucrada.`,
    },
    {
      title: "Excepciones",
      text: `Además de los parámetros objetivos establecidos en este reglamento para los ascensos y descensos de jugadores, la organización se reserva el derecho de realizar excepciones. De manera excepcional, y ante un pedido especial debidamente fundamentado por la parte interesada, la organización podrá autorizar el ascenso o descenso de un jugador que no cumpla con dichos parámetros, siempre que así lo considere pertinente.`,
    },
    {
      title: "Fases de elimanación directa",
      text: `En estas etapas solo podrán participar aquellos jugadores que hayan disputado, al menos, una serie en instancias previas de la categoría correspondiente o de una inferior dentro del torneo en curso.`,
    },
    {
      title: "Mala formación",
      text: `En caso de incurrir en una mala conformación de las parejas de dobles, la sanción implicará la pérdida exclusiva de los parciales correspondientes a los dobles involucrados (Doble 1 y Doble 2). El partido de singles no se verá afectado, por lo que se conservará el resultado obtenido en cancha.`,
    },
    {
      title: "Penalizaciones",
      text: `A. La organización se reserva el derecho de sancionar y/o advertir a cualquier jugador que agreda física o verbalmente a cualquier miembro de la liga. 
      B. Cualquierinconveniente surgido durante el partido deberá ser resuelto por los participantes del mismo, y en caso de no lograr una solución, se permitirá la intervención de terceros, siempre y cuando exista un acuerdo previo entre los participante involucrados.`,
    },
    {
      title: "Walkovers",
      text: `El equipo que registre tres (3) walkovers en series completas quedará automáticamente descalificado de la competencia por decisión de la organización.`,
    },
    {
      title: "Límite temporal de reclamos",
      text: `Cualquier reclamo que verse sobre cualquier situación que pueda darse desde el comienzo de la competición y hasta su finalización, y que a criterio de alguna de las partes considerase que infringe este reglamento, dicho reclamo deberá ser expresado a la organización dentro de las 48 hs. de haberse jugado la serie en cuestión.
      Luego de ese tiempo y sin excepción, cualquier reclamo quedará sin efecto.`,
    },
    {
      title: "Otras cuestiones",
      text: `La organización se reserva el derecho a modificar el presente reglamento cuando sea imperioso establecer, regular o fijar conductas o acciones que puedan generar conflictos o diversas interpretaciones con el objeto de conducir a un mejor desenvolvimiento de las diversas competiciones.

      La organización podrá disponer de fechas de juego en días originariamente no asignados a la categoría, así como también modificar el sistema de clasificación, cuando circunstancias ajenas a la misma (el clima por ejemplo) no permitan concluir el calendario en la manera en que estaba asignado desde un principio
      
      Para el supuesto caso que pudiera darse una laguna en la normativa o posible doble interpretación, esta organización resolverá puntualmente la cuestión en conflicto de acuerdo a su leal saber y entender, notificando a las partes que pudieran estar involucradas. La decisión será inapelable por las partes que pudieran estar involucradas y generará un precedente que será utilizado para aclaración de las posibles normas en conflicto.`,
    },
    {
      title: "",
      text: `Ultima actualización: Septiembre 2025`,
    },
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <Title title="Reglamento Clausura 2025" emoji="🤝" description="" />
      <Filter data={data} />
    </section>
  );
};

export default page;
