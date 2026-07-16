"use client";
import { useEffect, useRef } from "react";
import Item from "./Item";
import Whatsapp from "@/components/WhatsApp";
import Image from "next/image";
import { Container } from "@/components/Container";
import ButtonIA from "@/components/ButtonIA";

const Presentacion = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const data = [
    {
      title: "🤔 ¿Qué necesito para realizar la inscripción?",
      text: `Para inscribirte, es requisito leer la información completa sobre el desarrollo del torneo y conformar un equipo con un mínimo de 8 jugadores/as en la lista de buena fe y un máximo de 20.

Además, el equipo deberá disponer de 3 canchas de tenis de la misma superficie para actuar como local. De manera excepcional, también se aceptarán clubes que cuenten con 2 canchas.`,
    },
    {
      title: "📅 Fechas",
      text: `Inicio del torneo: <strong>15 y 16 de Agosto.</strong><br />
Cierre de Inscripción: <strong>1 de Agosto.</strong>`,
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
      text: `👉🏻 <strong>Zona Norte/Oeste:</strong><br/> <br/>  <strong>Damas sábados de 13 a 17 hs.:</strong><br/>
      Intermedia +30 (2 dobles)<br/>
      Tercera +40 (2 dobles)<br/>
      Cuarta +40 (2 dobles)<br/><br/>
      
      <strong>Damas domingos de 9 a 17hs.:</strong>  <br/> 
      Tercera Libre (1 single, 2 dobles)  <br/> 
      Cuarta Libre (1 single, 2 dobles)  <br/> 
      Quinta Libre (1 single, 2 dobles) <br/> <br/> 
    
      <strong>Caballeros sábados de 13 a 17 hs.:</strong><br/>
      Tercera +40 (2 dobles) (Nueva)<br/>
      Cuarta +40 (2 dobles)<br/>
      Quinta +40 (2 dobles)<br/><br/> 
      
      <strong>Caballeros domingos de 9 a 17hs.:</strong> <br/> 
      Primera Libre (1 single, 2 dobles) <br/> 
      Intermedia Libre (1 single, 2 dobles) <br/> 
      Tercera Libre (1 single, 2 dobles) <br/> 
      Cuarta Libre (1 single, 2 dobles) <br/> 
      Quinta Libre (1 single, 2 dobles) <br/> 
      Sexta Libre (1 single, 2 dobles)  <br/> <br/> 

      <strong>Mixtos sábados de 13 a 17 hs.:</strong><br/>
      Mixto Libre (Caballeros y Damas nivel libre) <br/> 
      Mixto B (Caballeros hasta Cuarta / Damas hasta Tercera) <br/> 
      Mixto C (Caballeros hasta Quinta / Damas hasta Cuarta) <br/> <br/> 

        👉🏻 <strong>Zona Sur:</strong><br/> <br/> 
           <strong>Damas domingos o sábados de 13 a 17hs.:</strong>  <br/> 
      Tercera/Cuarta +30 (2 dobles)  <br/> <br/> 
                 <strong>Caballeros domingos o sábados de 13 a 17hs.:</strong>  <br/> 
      Tercera/Cuarta +30 (2 dobles)  <br/> <br/> 
      Mixto Libre (sábados o domingos de 13 a 17 hs.):
      `,
    },
    {
      title: "📈 ¿Cómo se a que categoría corresponde mi equipo?",
      text: `<strong>Niveles orientativos: </strong> <br/> 
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
      Zonas de juego: <strong>Zona Norte, Zona Oeste y Zona Sur (zona exclusiva) de Buenos Aires.</strong>`,
    },
    {
      title: "🕛 ¿Qué día y horario se juega por categoría?",
      text: `Las categorías de los domingos de <strong>9 a 17 hs.</strong><br/>Las categorías de los sábados de <strong>13 a 17 hs.</strong> <br/> 
      Categorías de Sábados y Domingos de 13 a 17 hs. <br/> 
      Cada equipo puede elegir el horario cuando sea local dentro de esas franjas.`,
    },
    {
      title: "💪🏻 ¿Hay un mínimo de encuentros o series a disputar?",
      text: `A lo largo del torneo, cada equipo tendrá garantizada la disputa de al menos 8 series.`,
    },
    {
      title: "🎾 Pelotas",
      text: `Las pelotas serán responsabilidad del <strong>equipo local</strong>, deben ser nuevas, puediendo ser sueltas o de tubo presurizado.`,
    },
    {
      title:
        "💵 ¿Cuál es el valor y como abonar la inscripción por cada equipo?",
      text: `
      Durante Junio <strong>$320.000.- </strong><br/>
      Durante Julio <strong>$360.000.- </strong><br/> 
      Durante Agosto <strong>$400.000.- </strong><br/><br/>
      Podes realizar una transferencia del valor de la inscripción a la siguiente cuenta: <br/>
      Alias: IML.TENIS <br/>
Banco Supervielle <br/>
Daiana Elizabeth Soto <br/>
CTA: CA ARS 257-3229751-4 <br/>
CBU: 0270257720032297510041 <br/>
CUIT/CUIL: 27397070811 <br/><br/>

      Enviar comprobante al área administrativa +54 9 11 3017-1475 `,
    },
    {
      title: "🙌🏻 ¿Cuál es el valor a abonar cada partido?",
      text: `El costo a abonar cada jugador en conceptos de alquiler de canchas al club local será de $12 mil pesos (el costo puede variar).`,
    },
    {
      title: "😎 ¿Cómo llevo adelante la inscripción?",
      text: `Cada equipo deberá tener un capitán responsable, quien será el encargado de realizar la inscripción y de cargar la lista de buena fe de su equipo hasta la fecha indicada. 
      
      `,
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-y-4 mt-4">
        <div className="aspect-4/5 lg:aspect-video overflow-hidden rounded-2xl">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="object-cover object-center w-full h-full"
          >
            <source src="/videos/video-presentation.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="[&>strong]:text-primary [&>strong]:font-medium mb-2">
          <strong> IML Tenis </strong>es uno de los interclubes de tenis amateur
          más importantes de la zona, con más de <strong>200 equipos</strong> y{" "}
          <strong>20 categorías</strong> que abarcan distintos niveles de juego
          en damas, caballeros y mixtos.
          <br /> <br />
          En esta competencia vas a compartir una experiencia única junto a tu
          grupo de amigos: <strong>representando a tu club o barrio</strong>,
          jugando en tus propias canchas y descrubriendo nuevas sedes y rivales
          cada semana.
          <br /> <br />
          Todos los{" "}
          <strong>
            resultados, tablas de posiciones, estadísticas y rankings
          </strong>{" "}
          se actualizan online y de forma permanente, brindando una experiencia{" "}
          <strong>transparente, moderna y accesible</strong> para todos los
          participantes. Seguí el rendimiento de tu equipo, consultá
          estadísticas individuales y grupales, compará rendimientos y accedé a
          toda la información del torneo en cualquier momento y desde cualquier
          dispositivo.
          <br /> <br />
          Vas a poder recibir{" "}
          <strong>premios, reconocimientos y beneficios exclusivos</strong>.
          Podés ser elegido como <strong>Jugador Destacado de la Fecha</strong>,
          liderar el <strong>ranking individual</strong> y acceder a importantes
          premios al final de la temporada. Además, cada punto que sumes impulsa
          a tu equipo y a tu club a escalar posiciones en el{" "}
          <strong>ranking anual de clubes</strong>.
        </div>

        <div className="aspect-square lg:aspect-video overflow-hidden rounded-2xl">
          <Image
            src="/images/2026.png"
            className="w-full h-full object-cover object-center"
            width={1200}
            height={1200}
            alt="Portada"
          />
        </div>
      </div>

      <div className="[&>strong]:text-primary [&>strong]:font-medium mb-2">
        También premiamos los valores que hacen grande a nuestra comunidad. En
        cada jornada, los equipos podrán sumar <strong>puntos Fair Play</strong>
        , otorgados por sus rivales y por los terceros tiempos compartidos. Al
        finalizar la temporada, el equipo con mejor desempeño en Fair Play
        recibirá beneficios exclusivos para futuras competencias, mientras que
        su capitán será reconocido como <strong>Capitán Destacado</strong> por
        su compromiso con el respeto, la deportividad y el compañerismo.
        <br /> <br />Y eso no es todo. Celebramos lo mejor de nuestra comunidad
        con propuestas especiales como <strong>La Batalla de Clubes</strong>, y
        los esperados <strong>IML Awards</strong>.
        <br /> <br />
        La temporada culmina con una{" "}
        <strong>gran final junto a todas las categorías</strong>, en un evento
        de cierre con <strong>premiación, sorteos y muchas sorpresas</strong>,
        celebrando a quienes formaron parte de una experiencia única durante
        todo el año.
      </div>

      {data.map((item, index) => (
        <Item key={index} title={item.title} text={item.text} />
      ))}

      <Whatsapp />
      <ButtonIA />
    </Container>
  );
};

export default Presentacion;
