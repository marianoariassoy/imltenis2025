import { WhatsApp } from "@/lib/icons";
import Item from "./Item";
import Whatsapp from "@/components/WhatsApp";

export const metadata = {
  title: "Presentación Torneo Clausura 2025",
  description:
    "Presentación Torneo Clausura 2025 de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/presentacion",
    title: "Presentación Torneo Clausura 2025",
    description:
      "Presentación Torneo Clausura 2025 de la liga de clubes IML Tenis",
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

const Presentacion = () => {
  const data = [
    {
      title: "🤔 ¿Qué necesito para realizar la inscripción?",
      text: `Para inscribirte necesitás leer la información completa de cómo se lleva adelante el torneo y armar tu equipo con un mínimo de 6 participantes en la lista de buena fe y un máximo de 20 jugadores. Tener o alquilar 3 canchas de tenis de la misma superficie para poder hacer de local, aceptamos clubes con 2 canchas.`,
    },
    {
      title: "📅 Fechas",
      text: `Inicio del torneo: <strong>Sábado 16 y Domingo 17 de Agosto.</strong><br />
Cierre de Inscripción: <strong>1 de Agosto.</strong>`,
    },
    {
      title: "🏆 ¿Cómo es el formato de juego y del torneo?",
      text: `En todas las categorías con exepción de las categorías Mixtas se disputarán <strong >1 single y 2 dobles.</strong> En las categorías Mixtas se disputarán <strong>2 dobles.</strong><br/>
      Todos los partidos se disputarán al mejor de 3 sets, con tie break. El tercer set será Super Tie break a 10 puntos con diferencia de dos.<br/>
      Todos los resultados y el reglamento general podrán ser vistos en este sitio web.`,
    },
    {
      title: "⭐ ¿En qué categorías puedo inscribirme?",
      text: `<strong>Domingos:</strong> Primera Libre, Segunda Libre, Tercera Libre, Cuarta Libre, Quinta Libre, Sexta Libre (con admisión). <br/> 
      <strong>Sábados y Domingos:</strong> Damas Segunda, Damas Tercera, Damas Cuarta. <br/> 
      <strong>Sábados:</strong> Mixto Mixto Tercera/Cuarta, Caballeros Segunda +35, Caballeros Tercera +35.`,
    },
    {
      title: "📈 ¿Cómo se a que categoría corresponde mi equipo?",
      text: `<strong>Niveles orientativos: </strong>
        Quinta: Jugadores categoría 125, C. <br/> Cuarta: Jugadores categoría 250, B2, B-. <br/>Tercera: Jugadores categoría 500,
        B1 <br/>Segunda: Jugadores categoría 750, A1, A2 <br/>Primera: Jugadores categoría 1000, Super A.`,
    },
    {
      title: "🔞 ¿Hay restricciones por edad?",
      text: `Caballeros Segunda +35 y Caballeros Tercera +35, el resto de las categorías serán +16 años.`,
    },
    {
      title: "🌍 ¿Dónde se juega?",
      text: `Cada equipo <strong>representa a un club o barrio</strong> que jugará de local reservando o alquilando cancha según corresponda.<br/>
      Zonas de juego: <strong>Zona Norte y Zona Oeste de Buenos Aires.</strong>`,
    },
    {
      title: "🕛 ¿Qué día y horario se juega por categoría?",
      text: `Las categorías de los Domingos de <strong>9 a 17 hs.</strong><br/>Las categorías de los Sábados de <strong>12 a 17 hs.</strong> <br/> 
      Cada equipo puede elegir el horario cuando actúa de local.`,
    },
    {
      title: "🤔 ¿Hay un mínimo de encuentros o series a disputar?",
      text: `No podemos saber con exactitud cuantas series se disputarán hasta no tener cerradas las categorías, pretendemos que se disputen desde 8 series por equipo.`,
    },
    {
      title: "🎾 Pelotas",
      text: `Las pelotas serán responsabilidad del <strong>equipo local</strong>, deben ser nuevas o con un solo uso reciente, puediendo ser sueltas o de tubo presurizado.`,
    },
    {
      title:
        "💵 ¿Cuál es el valor y como abonar la inscripción por cada equipo?",
      text: `
      <strong>Durante Junio $200.000.- </strong><br/>
      <strong>Durante Julio $240.000.- </strong><br/> 
      <strong>Durante Agosto $280.000.- </strong><br/><br/>
      Podes realizar una transferencia del valor de la inscripción a la siguiente cuenta: <br/>
      Alias: iml.tenis <br/>
      Banco Supervielle <br/>
Daiana Elizabeth Soto <br/>
CTA: CA ARS 257-3229751-4 <br/>
CBU: 0270257720032297510041 <br/>
CUIT/CUIL: 27397070811 <br/><br/>
    
      Enviar comprobante al área administrativa +54 9 11 3017-1475 
      <br/> 
      Consultá descuentos para tu club por cantidad de equipos.`,
    },
    {
      title: "💵 ¿Cuál es el valor a abonar cada partido?",
      text: `El costo a abonar cada jugador en conceptos de alquiler de canchas al club local será definido en la comisión de clubes a la brevedad.`,
    },
    {
      title: "😀 ¿Cómo llevo adelante la inscripción?",
      text: `Cada equipo deberá tener un capitán responsable, quien será el encargado de realizar la inscripción y de enviar la lista de buena fe de su equipo hasta la fecha indicada. `,
    },
  ];
  return (
    <section className="flex flex-col gap-y-6 text-sm max-w-2xl m-auto">
      <div className="flex flex-col gap-y-3">
        <div className="text-center flex flex-col items-center mb-3">
          <div className="text-2xl text-center">🏆</div>
          <h1 className="font-extrabold text-primary text-lg">
            Torneo Clausura 2025
          </h1>
        </div>

        <div className="aspect-square lg:aspect-video overflow-hidden rounded-xl">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODQ2dTV0Y2w3dzl4cWZvcXBwemgwcTJsajlrajl0MmsweDh5Z2lxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kSADP5pTBqGb0RAHJv/giphy.gif"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <div className="[&>span]:font-semibold [&>span]:text-primary">
        <span>¡Llega el Torneo Clausura 2025!</span> Sumate a uno de los
        interclubes de tenis más importantes de la región, con más de 150
        equipos y 12 categorías, viví una experiencia única junto a tu grupo de
        amigos. Representá a tu club o barrio, jugá de local en tus canchas y
        descubrí nuevas sedes y rivales cada semana. Todos los resultados y
        rankings se actualizan online, para que sigas el torneo en tiempo real.
        <br />
        Premios, reconocimientos y mucho más Podés ser elegido como{" "}
        <span>el jugador destacado de la fecha</span>, liderar el ranking
        individual y recibir importantes premios al final de la temporada.
        Además, cada punto que sumes ayuda a tu club a escalar posiciones en el{" "}
        <span>ranking anual de clubes.</span>
        <br />Y eso no es todo...Celebramos lo mejor de nuestra comunidad con
        propuestas como <span>La Batalla de Clubes</span>, la elección de los
        mejores capitanes y los esperados <span>IML Awards.</span>
        <br />
        El torneo culmina con una gran final junto a todas las categorías, en un
        evento de cierre con premiación, sorteos y muchas sorpresas más.
      </div>

      {data.map((item, index) => (
        <Item key={index} title={item.title} text={item.text} />
      ))}

      <div className="font-medium">
        <a
          href="https://wa.me/5491130171475"
          className="hover:underline flex items-center gap-x-1 flex-wrap text-primary"
          target="_blank"
        >
          <span>Ante cualquier duda contactate por</span>
          <span className="flex items-center gap-x-1">
            <WhatsApp /> WhatsApp haciendo click acá
          </span>
        </a>
      </div>

      <div className="aspect-square lg:aspect-video overflow-hidden rounded-xl">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm4xeWwwM3FidG82dmNyNTc4dzVjdzdlYXlxbWRkdjB2Y2puZWZ5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ddx6LRVa19X5J6piFt/giphy.gif"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <Whatsapp />
    </section>
  );
};

export default Presentacion;
