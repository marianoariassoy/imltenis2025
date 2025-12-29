import { WhatsApp } from "@/lib/icons";
import Item from "./Item";
import Whatsapp from "@/components/WhatsApp";
import Image from "next/image";

export const metadata = {
  title: "Presentación Torneo Apertura 2026",
  description:
    "Presentación Torneo Apertura 2026 de la liga de clubes IML Tenis",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/presentacion",
    title: "Presentación Torneo Apertura 2026",
    description:
      "Presentación Torneo Apertura 2026 de la liga de clubes IML Tenis",
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
      text: `Para inscribirte, necesitás leer la información completa sobre cómo se desarrolla el torneo y armar tu equipo con un mínimo de 8 participantes en la lista de buena fe y un máximo de 20 jugadores.

Además, el equipo deberá contar con 3 canchas de tenis de la misma superficie para hacer de local. También se aceptan clubes con 2 canchas.`,
    },
    {
      title: "📅 Fechas",
      text: `Inicio del torneo: <strong>Sábado 21 de Marzo.</strong><br />
Cierre de Inscripción: <strong>7 de Marzo.</strong>`,
    },
    {
      title: "🔥 ¿Cómo es el formato de juego y del torneo?",
      text: `Según la categoría, se disputará 1 single y 2 dobles, o bien 2 partidos de dobles.
<br /> 
Todos los partidos se jugarán al mejor de 3 sets, con tie-break. En caso de tercer set, se disputará un super tie-break a 10 puntos, con diferencia de dos.
<br /> 
Todos los resultados y el reglamento general pueden consultarse en este sitio web.`,
    },
    {
      title: "🚀 ¿En qué categorías puedo inscribirme?",
      text: `<strong>Damas sábados de 13 a 17 hs.:</strong><br/>
      Intermedia +30 (2 dobles)<br/>
      Tercera +40 (2 dobles)<br/>
      Cuarta +40 (2 dobles)<br/><br/>
      
      <strong>Damas domingos de 9 a 17hs.:</strong>  <br/> 
      Tercera Libre (1 single, 2 dobles)  <br/> 
      Cuarta Libre (1 single, 2 dobles)  <br/> 
      Quinta Libre (1 single, 2 dobles) <br/> <br/> 
    
      <strong>Caballeros sábados de 13 a 17 hs.:</strong><br/>
      Cuarta +40 (2 dobles)<br/>
      Quinta +40 (2 dobles)<br/><br/> 
      
      <strong>Caballeros domingos de 9 a 17hs.:</strong> <br/> 
      Primera Libre (1 single, 2 dobles) <br/> 
      Intermedia Libre (1 single, 2 dobles) <br/> 
      Tercera Libre (1 single, 2 dobles) <br/> 
      Cuarta Libre (1 single, 2 dobles) <br/> 
      Quinta Libre (1 single, 2 dobles) <br/> 
      Sexta Libre (1 single, 2 dobles)  <br/>  <br/> 

      <strong>Mixtos sábados de 13 a 17 hs.:</strong><br/>
      Mixto Tercera (2 dobles)<br/>
      Mixto Libre. (1 doble)
      `,
    },
    {
      title: "📈 ¿Cómo se a que categoría corresponde mi equipo?",
      text: `<strong>Niveles orientativos: </strong>
        Quinta: Jugadores categoría 125, C. <br/> Cuarta: Jugadores categoría 250, B2, B-. <br/>Tercera: Jugadores categoría 500,
        B1 <br/>Intermedia: Jugadores categoría 750, A1, A2 <br/>Primera: Jugadores categoría 1000, Super A.`,
    },
    {
      title: "🔞 ¿Hay restricciones por edad en las categorías libres?",
      text: `Sí. La edad mínima para participar en estas categorías es de 14 años cumplidos.`,
    },
    {
      title: "🌍 ¿Dónde se juega?",
      text: `Cada equipo <strong>representa a un club o barrio</strong> que jugará de local reservando o alquilando cancha según corresponda.<br/>
      Zonas de juego: <strong>Zona Norte y Zona Oeste de Buenos Aires.</strong>`,
    },
    {
      title: "🕛 ¿Qué día y horario se juega por categoría?",
      text: `Las categorías de los domingos de <strong>9 a 17 hs.</strong><br/>Las categorías de los sábados de <strong>13 a 17 hs.</strong> <br/> 
      Cada equipo puede elegir el horario cuando actúa de local dentro de esas franjas.`,
    },
    {
      title: "💪🏻 ¿Hay un mínimo de encuentros o series a disputar?",
      text: `No es posible determinar con exactitud la cantidad de series que se disputarán hasta que las categorías estén cerradas. No obstante, se prevé que cada equipo dispute al menos 8 series a lo largo del torneo.`,
    },
    {
      title: "🎾 Pelotas",
      text: `Las pelotas serán responsabilidad del <strong>equipo local</strong>, deben ser nuevas o con un solo uso reciente, puediendo ser sueltas o de tubo presurizado.`,
    },
    {
      title:
        "💵 ¿Cuál es el valor y como abonar la inscripción por cada equipo?",
      text: `
      <strong>Durante Enero $280.000.- </strong><br/>
      <strong>Durante Febero $310.000.- </strong><br/> 
      <strong>Durante Marzo $340.000.- </strong><br/><br/>
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
      title: "🙌🏻 ¿Cuál es el valor a abonar cada partido?",
      text: `El costo a abonar cada jugador en conceptos de alquiler de canchas al club local será de $10 mil pesos (el costo puede variar).`,
    },
    {
      title: "😎 ¿Cómo llevo adelante la inscripción?",
      text: `Cada equipo deberá tener un capitán responsable, quien será el encargado de realizar la inscripción y de cargar la lista de buena fe de su equipo hasta la fecha indicada. `,
    },
  ];
  return (
    <section className="flex flex-col gap-y-4 m-auto max-w-4xl">
      <div className="flex flex-col gap-y-4">
        <div className="text-center flex flex-col items-center">
          <div className="text-2xl text-center">🏆</div>
          <h1 className="font-extrabold text-primary text-xl">
            Torneo Apertura 2026
          </h1>
        </div>

        <div className="[&>span]:font-semibold [&>span]:text-primary mb-2">
          Sumate a uno de los interclubes de tenis más importantes de la zona ,
          con casi <span>200 equipos y 16 categorías</span> de diferentes
          niveles de juego. Viví una experiencia única junto a tu grupo de
          amigos: representá a tu club o barrio, jugá en tus propias canchas y
          descubrí nuevas sedes y rivales cada semana. <br />
          <br />
          Todos los <span> resultados, estadísticas y rankings </span>se
          actualizan online para que sigas el torneo en tiempo real.
        </div>

        <div className="aspect-square lg:aspect-video overflow-hidden rounded-xl">
          <Image
            src="/images/1.png"
            className="w-full h-full object-cover object-top"
            width={1200}
            height={1200}
            alt="Portada"
          />
        </div>
      </div>

      <div className="[&>span]:font-semibold [&>span]:text-primary">
        <span>Recibí premios, reconocimientos y mucho más.</span>
        <br />
        Podés ser elegido como <span>Jugador Destacado de la Fecha</span>,
        liderar el ranking individual y acceder a importantes premios al final
        de la temporada. Además, cada punto que sumes impulsa a tu equipo y a tu
        club a escalar posiciones en el <span>ranking anual de clubes</span>.
        <br />
        <br />Y eso no es todo… Celebramos lo mejor de nuestra comunidad con
        propuestas especiales como <span>La Batalla de Clubes</span>, la
        elección de los mejores capitanes y los esperados{" "}
        <span>IML Awards</span>.
        <br />
        La temporada culmina con una gran final junto a todas las categorías, en
        un evento de cierre con premiación, sorteos y muchas sorpresas más.
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
          <span>Contactate por</span>
          <span className="flex items-center gap-x-1">
            <WhatsApp /> WhatsApp haciendo click acá
          </span>
        </a>
      </div>

      <div className="aspect-square lg:aspect-video overflow-hidden rounded-xl">
        <Image
          src="/images/2.png"
          className="w-full h-full object-cover object-center"
          width={1200}
          height={1200}
          alt="Portada 2"
        />
      </div>

      <Whatsapp />
    </section>
  );
};

export default Presentacion;
