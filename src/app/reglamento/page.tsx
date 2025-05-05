import Title from "@/components/Title";
import Filter from "./Filter";

export const metadata = {
  title: "Reglamento",
};

const page = () => {
  const data = [
    {
      title: "",
      text: `La presente liga de clubes se desarrolla desde el mes de marzo hasta el mes de diciembre en 2 torneos a jugarse los días sábados y domingos, según corresponda. Disputando en cada fecha 3 encuentros entre 2 equipos representantes de un club de tenis.`,
    },
    {
      title: "Modalidad de juego",
      text: `En las categorías Damas, Libres y +35 se jugará 1 single y 2 dobles.
      Todos los partidos se disputarán al mejor de 3 sets con tie break. El tercer set será supertie break a 10 puntos con diferencia de dos.
      Los 3 encuentros deberán disputarse en simultaneo comenzando al mismo tiempo, salvo clubes con 2 canchas (ver el reglamento).

      En las categorías Mixtas se jugará 2 dobles mixtos y simultaneos. Las series podrán quedar empatadas en la primera fase, se sumará 1 punto para cada equipo.
En playoffs, en caso de empate se disputará un tercer punto, con duración de un set, conformado por los jugadores que cada capitán convoque, pudiendo incluir a jugadores que hayan disputado los 2 puntos anteriores, siempre respetando que la integración sea mixta.
      `,
    },
    {
      title: "Puntuación",
      text: `Cada encuentro ganado sumará un punto, es decir, ganando los 3 encuentros de la serie se sumarán 3 puntos al equipo vencedor, ganando 2 a 1 se sumarán 2 puntos al equipo vencedor y 1 punto al equipo rival, por lo que ahora todos los encuentros ganados suman puntos.
      En caso de empate por puntos se desempatará por mayor cantidad de series ganadas, de persistir el empate, se desempatará por diferencia de sets y en el último caso diferencia de games. 
      Todos los resultados podrán ser vistos en este sitio web.`,
    },
    {
      title: "Formación",
      text: `En las categorías en las cuales se disputen 1 partido de single y 2 partidos de dobles, de los 4 doblistas convocados para la serie el de mejor ranking deberá ser asignado obligatoriamente para jugar el doble 1.`,
    },
    {
      title: "Pelotas",
      text: `El equipo local será el encargado de proveer las pelotas para el encuentro. Se podrán usar tubos o pelotas sueltas hasta con un uso, de lo contrario el equipo rival podrá pedir cambio de pelotas o pedir WO. 
      Las pelotas "con un uso" deben tener presión de pelota nueva y en cuanto a la felpa debe verse la marca de la
      pelota completa.`,
    },
    {
      title: "Formación Incompleta",
      text: `Si el equipo completo o algún jugador no se presentara a jugar la fecha correspondiente (WO) deberá avisar con un mínimo de 24 hs. al capitán rival por escrito al chat de capitanes de WhatsApp, de lo contrario deberá correr con los gastos que correspondan al equipo local, como ser alquiler de canchas. 
      Se podrá presentar WO tanto de single y/o de doble 2, pudiéndose disputar el resto de el o los parciales.`,
    },
    {
      title: "Mala formación",
      text: `En caso de incurrir en una mala formación de las parejas de dobles, los puntos perdidos serán exclusivamente los de los paciales involucrados (doble 1 y doble 2). El partido de single no se verá afectado por esta sanción, por lo que se mantendrá el resultado jugado en cancha.`,
    },
    {
      title: "Días y Horarios",
      text: `Las categorías de Damas jugarán los días sábados y domingos en un horario a determinar por el equipo local en cada oportunidad, que deberá ser los sábados entre las 13 y las 17 hs. y los domingos entre las 9 y las 17 hs.
      La categoría Caballeros Segunda +35, Caballeros Tercera +35 y Mixto Tercera, jugarán los días sábados en un horario a determinar por el equipo local en cada oportunidad, que deberá ser entre las 13 y las 17 hs. 
      El resto de las categorías jugarán los días domingos en un horario a determinar por el equipo local en cada oportunidad, que deberá ser entre las 9 y las 17 hs.

      Los horarios deben informarse por el capitán del equipo local en el chat de capitanes de WhatsApp antes de las 17:00 hs. del miércoles de la semana correspondiente, de lo contrario se procederá a la quita de 1 punto de la serie al equipo local, sumándose 1 punto por cada día de atraso.`,
    },
    {
      title: "Lista de buena fe",
      text: `El mejor jugador del equipo deberá ir primero en la lista, siguiendo este criterio para el resto de la lista, siendo el último jugador el de más bajo nivel.
      Es responsabilidad de los capitanes chequear que estén todos sus jugadores y colocados en la posición que consideren correcta antes del comienzo del torneo. En las categorías con límite de edad, tercera y segunda +35, se considerará que el jugador está dentro de la categoría, al cumplir años dentro del año calendario de inicio del torneo.`,
    },
    {
      title: "Cantidad de jugadores por equipo",
      text: `El límite de integrantes de la lista de buena fe es de 20 jugadores.`,
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
      title: "Resultados y Formación",
      text: `El capitán del equipo ganador será el encargado de cargar el resultado de la serie en capitanes.imltenis.com.ar antes del Martes a las 12:00 hs. de cada semana. Una vez realizada la carga, deberá compartir el enlace generado por el sistema en el grupo de WhatsApp de capitanes, indicando la serie correspondiente.  

Además, será obligatorio conservar la planilla en papel firmada por ambos capitanes, ya que en caso de cualquier reclamo, hasta 48 hs. desde el inicio de la serie, esta será el único documento válido para verificar la información.  

El incumplimiento de la carga por parte del capitán del equipo ganador de la serie resultará en la anulación de los puntos obtenidos por su equipo, mientras que el equipo rival mantendrá los puntos ganados en cancha. No habrá posibilidad de reclamo una vez aplicada la sanción.`,
    },
    {
      title: "Retiro",
      text: `En caso de que un partido se viera interrumpido por el retiro de uno de los jugadores, el resultado se complementará a favor del ganador con todos los games que correspondan para llegar al resultado final 
Ejemplo Si al momento de la interrupción el resultado parcial es 63 21, el resultado final será 63 61
Este último resultado es el que se deberá tomarse en cuenta en la confección de un desempate por porcentajes de set o games.`,
    },

    {
      title: "Tercer tiempo",
      text: `Queda a voluntad del equipo local. Por parte de la organización recomendamos en lo posible llevarlo a cabo compartiendo los gastos del mismo, de esta manera fomentando la camaraderia entre los jugadores y equipos.`,
    },
    {
      title: "Coaching",
      text: `Los capitanes pueden intercambiar pareceres, comentarios
      y/o efectuar directivas a sus jugadores, sobre el partido o cualquier otro tema que tenga interés. Si el capitán no estuviere dentro de la cancha acompañando a sus jugadores podrá ingresar en el momento de algún cambio de lado. Todos los comentarios deberán ser efectuados en un nivel de tono, forma y contenido que no moleste a ningún jugador rival. Cuando el capitán fuera jugador y se encontrará disputando un partido, podrá delegar esta función de coaching en otra persona. Y responderá en todo por ella.`,
    },
    {
      title: "Capitanía",
      text: ` La organización se reserva el derecho a solicitar cambio de capitanía en caso de considerarlo necesario o bien de solicitar la incorporación de un subcapitan al chat de capitanes en reemplazo del capitán, a efectos de facilitar la comunicación y gestionar de manera más diligente las cuestiones administrativas referentes a la organización de cada serie a desarrollarse. Este sub capitán/a deberá ser un jugador/a integrante del plantel.`,
    },
    {
      title: "Feriados largos",
      text: `Queda a criterio de la organización la programación de partidos en dichos días.`,
    },
    {
      title: "En caso de lluvia",
      text: `El equipo local deberá avisar como mínimo dos horas antes del horario del partido al chat de capitanes de WhatsApp que sus canchas están en condiciones para jugar. Pasado este límite, el equipo visitante no está en la obligación de aceptar ir a jugar.
      La reprogramación se pasará para el final del torneo, salvo que los equipos involucrados acuerden y
      decidan jugar antes, informando previamente a esta organización.`,
    },
    {
      title: "Reinicio de serie reprogramada",
      text: `Al reprogramarse una serie que no ha comenzado, por razones climáticas, y/o algún otro motivo, esta se
      considerará como una serie nueva en todos los aspectos. Esto incluye la anulación de cualquier configuración
      previa, tales como formaciones de equipos, selección de jugadores, y el orden de los partidos.`,
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
      title: "Inpuntualidad de jugadores",
      text: `El máximo de tolerenacia será de 15 minutos, pasados los cuales se considerará como abandono del partido. El equipo que abandone un partido, deberá avisar a la organización por escrito al chat de capitanes de WhatsApp, y deberá correr con los gastos que correspondan al equipo rival, como ser alquiler de canchas.`,
    },
    {
      title:
        "Impuntualidad en el inicio de algún encuentro por falta de disponibilidad de cancha",
      text: `Se sugiere a los clubes locales, establecer horarios entre series separados con un mínimo de dos horas entre una y otra. 
      El horario fijado por el club local para la iniciación de la serie debe ser respetado. El tiempo detolerancia por parte de los jugadores visitantes para el inicio de la serie es de un máximo de media hora a partir del horario establecido. 
      Transcurrido dicho límite temporal, y no habiendo posibilidades de comenzar la serie, los jugadores visitantes podrán anoticiar a su capitán de dicha circunstancia y éste último en caso de existir algún impedimento de sus jugadores para iniciar la serie con posterioridad a dicho horario, deberá informar del hecho en el chat de capitanes. Informada dicha circunstancia, la organización podrá comunicarse con el responsable del equipo local y evaluar si la demora obedece a un motivo atendible para exceptuar (espera de ambulancia por alguna afectación sufrida por algún jugador, lluvia o chaparrón que obligó a demorar la serie previa, o similares) y en caso contrario podrá el equipo visitante reclamar el punto, o los puntos que no comenzaron en tiempo y forma.
      La organización siempre evaluará la circunstancia de atraso en el inicio de la serie y tendrá la decisión
      final.`,
    },
    {
      title: "Alquiler de canchas",
      text: `La presente es una liga que reúne a la mayoría de clubes deportivos cuyos ingresos provienen del
      cobro por el uso de dichos espacios. Cada jugador debe abonar cuando le toca jugar ya sea de local o de
      visitante una suma fijada por la organización. Ese dinero se abona en el club donde se desarrolla la serie.
      Aquel equipo que presente formación incompleta sin haber avisado con el mínimo de 24hs en el chat de capitanes, deberá abonar igualmente el costo completo en concepto de alquiler de cancha. Aquellos emprendimientos urbanísticos que no acostumbran a cobrar el alquiler por el uso de las canchas en razón que los propietarios la sostienen mediante el pago de las expensas, tienen el mismo derecho a cobrarlas y utilizar el dinero recaudado en las localias para afrontar el costo de su participación cuando jueguen de visitantes. Queda igualmente a criterio de los mismos el cobro a los equipos visitantes. La única manera de evitar el pago del alquiler de las canchas es avisando 24hs antes de la ausencia, en cuyo caso el club que será local tiene el tiempo suficiente de disponer de la misma para alquilarla a terceros.
      El costo fijado en concepto de alquiler de cancha será actualizado periódicamente por esta organización con el fin de mantenerlo acorde a la necesidad de los clubes.`,
    },
    {
      title: "Instalaciones necesarias",
      text: `El club deberá poder ofrecer para jugar un partido completo un mínimo de 2 canchas reglamentarias de tenis, vestuarios con comodidades suficientes.
      Dichas canchas deberán ser de un mismo tipo de superficie, las que serán previamente aprobadas por esta asociación. 
      Los 3 encuentros deberán disputarse en el mismo horario, con excepción de clubes con 2 canchas, ver apartado`,
    },
    {
      title: "Clubes con 2 canchas",
      text: `En caso de disputarse una serie en un club con  dos canchas, cada jugador solo podrá disputar un encuentro en una misma serie. La serie se desarrollará en dos tandas que deben jugarse una a continuación de la otra, sin excepcion. La segunda tanda deberá comenzar no despues de las 17hs.

      Siempre debe programarse la serie evitando disputar en primer turno el doble 2 sin estar acompañado del doble 1, de esta manera evitando posibles WO de doble 1 de ultimo momento, que de esa manera anularía la serie. `,
    },
    {
      title: "Excepciones a la programación",
      text: `Cuando por coincidencia de fechas con
      la realización del circuito de tenis algún club tenga compromisos asumidos con anterioridad, podrá solicitar a  esta asociación, a considerar, la no programación de partidos, la misma deberá ser presentada con anterioridad a  la realización de la programación oficial e indicará fechas ciertas de los compromisos asumidos.
      Esta posibilidad solo podrá ser concedida por una vez, por torneo, y de manera excepcional. 
      Se hace saber que NO  es obligatorio para la organización el otorgar dicha excepción pudiendo siempre la organización no hacer lugar al pedido. 
      En caso que algún club no haya hecho uso de dicha posibilidad dentro de un campeonato, pero que la organización encuentre dificultades para otorgarles dicha excepción habida cuenta de retrasos que complican el normal  desarrollo del torneo, la organización podrá negar dicha posibilidad mediante una simple notificación por razones organizativas, la cual será inapelable.`,
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

      Los equipos ascendidos se requerirá la participación de todos los jugadores con excepción de los jugadores que no hayan aportado ningún punto, para estos el ascenso será optativo.
    `,
    },
    {
      title: "Descenso de equipos",
      text: `Los equipos que hayan terminado en ultimo lugar en sus respectivos grupos tendrán derecho de descender a una categoría inmediatamente inferior con todos sus jugadores, con excepción de los jugadores  que hayan finalizado el torneo con una diferencia de partidos ganados +5 o superior.`,
    },
    {
      title: "Descenso de jugadores",
      text: `Un jugador podrá descender a una categoría inmediatamente inferior de forma voluntaria al inicio del torneo cuando su diferencia de partidos ganados sea -3 o inferior`,
    },
    {
      title: "Ascensos de jugadores",
      text: `La organización ostenta el legítimo derecho de ascender a cualquier jugador cuyo nivel sobrepase ampliamente la categoría correspondiente, así como a aquellos que posean registros de haber participado y/o ganado torneos en categorías considerablemente superiores en el tiempo reciente, hasta dos años, con la posible quita de puntos de la serie en reclamo.`,
    },
    {
      title: "Playoffs",
      text: `En estas estapas solo podrán participar los jugadores que hayan disputado al menos una serie en instancias previas en la categoría corresponiente en el actual torneo.`,
    },
    {
      title: "Penalizaciones",
      text: `A. La organización se reserva el derecho de sancionar y/o
      advertir a cualquier jugador que agreda física o verbalmente a cualquier miembro de la liga. B. Cualquier
      inconveniente surgido durante el partido deberá ser resuelto por los participantes del mismo, y en caso de no
      lograr una solución, se permitirá la intervención de terceros, siempre y cuando exista un acuerdo previo entre los participante involucrados.`,
    },

    {
      title: "Límite temporal de reclamos",
      text: `Cualquier reclamo que verse sobre cualquier situación que pueda darse desde el comienzo de la competición y hasta su finalización, y que a criterio de alguna de las partes considerase que infringe este reglamento, dicho reclamo deberá ser expresado a la organización dentro de las 48 hs. de haberse jugado la serie en cuestión.
      Luego de ese tiempo y sin excepción, cualquier reclamo quedará sin efecto.`,
    },
    {
      title: "Otras cuestiones",
      text: `La organización se reserva el derecho a modificar el presente reglamento cuando sea imperioso establecer, regular o fijar conductas o acciones que puedan generar conflictos o diversas interpretaciones con el objeto de conducir a un mejor desenvolvimiento de las diversas competiciones.
      Para el supuesto caso que pudiera darse una laguna en la normativa o posible doble interpretación, esta
      organización resolverá puntualmente la cuestión en conflicto de acuerdo a su leal saber y entender, notificando a las partes que pudieran estar involucradas. La decisión será inapelable por las partes que pudieran estar involucradas y generará un precedente que será utilizado para aclaración de las posibles normas en conflicto.`,
    },
    {
      title: "",
      text: `Ultima actualización: 2025-04-14`,
    },
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <Title title="Reglamento IML Tenis" emoji="🤝" description="" />

      <Filter data={data} />
    </section>
  );
};

export default page;
