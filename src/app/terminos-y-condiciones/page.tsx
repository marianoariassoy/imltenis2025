import Title from "@/components/Title";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Terminos y Condiciones IML Tenis",
  description: "Terminos y Condiciones IML Tenis",

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://imltenis.com.ar/terminos-y-condiciones",
    title: "Terminos y Condiciones IML Tenis",
    description: "Terminos y Condiciones IML Tenis",
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

export const termsAndConditions = [
  {
    id: 1,
    title: "Introducción",
    content: [
      "El acceso, navegación y utilización del sitio web de IML Tenis implica la aceptación plena de los presentes Términos y Condiciones por parte del usuario.",
      "Toda persona que utilice la plataforma declara haber leído, comprendido y aceptado las disposiciones aquí detalladas.",
      "IML Tenis podrá actualizar o modificar estos términos en cualquier momento, entrando en vigencia desde su publicación en el sitio web.",
    ],
  },

  {
    id: 2,
    title: "Uso de la plataforma",
    content: [
      "La plataforma de IML Tenis tiene como finalidad brindar información relacionada con torneos, competencias, resultados, rankings, calendarios y servicios vinculados a la actividad deportiva.",
      "Los usuarios se comprometen a utilizar el sitio de manera responsable, respetando la legislación vigente, la moral, las buenas costumbres y los derechos de terceros.",
      "Queda prohibido realizar acciones que puedan afectar el funcionamiento, seguridad o disponibilidad del sitio web.",
    ],
  },

  {
    id: 3,
    title: "Registro y datos personales",
    content: [
      "Los datos personales proporcionados por los usuarios serán utilizados únicamente para fines relacionados con la organización, administración y comunicación de actividades deportivas desarrolladas por IML Tenis.",
      "IML Tenis adoptará las medidas razonables de seguridad y confidencialidad necesarias para proteger la información suministrada por los usuarios.",
      "El tratamiento de los datos personales se realizará conforme a la legislación vigente en la República Argentina, incluyendo la Ley Nº 25.326 de Protección de Datos Personales.",
      "El usuario podrá solicitar en cualquier momento la actualización, rectificación o eliminación de sus datos personales mediante los canales de contacto oficiales.",
    ],
  },

  {
    id: 4,
    title: "Uso de imagen y contenido audiovisual",
    content: [
      "Al participar en torneos, eventos o actividades organizadas por IML Tenis, el usuario autoriza la utilización de imágenes, fotografías y videos en los que pudiera aparecer, con fines institucionales, informativos, promocionales y de difusión.",
      "El material podrá ser publicado en el sitio web oficial, redes sociales, plataformas digitales y piezas de comunicación vinculadas a IML Tenis.",
      "La presente autorización se concede de manera gratuita y sin límite territorial, únicamente para acciones relacionadas con la actividad deportiva y comunicacional de la organización.",
      "IML Tenis se compromete a realizar un uso adecuado del material respetando la imagen, dignidad y derechos personales de los participantes.",
    ],
  },

  {
    id: 5,
    title: "Conducta de los usuarios",
    content: [
      "Los usuarios deberán mantener un comportamiento respetuoso tanto dentro de la plataforma como en las competencias y actividades organizadas por IML Tenis.",
      "No se permitirá la publicación o transmisión de contenidos ofensivos, discriminatorios, ilegales, difamatorios o que vulneren derechos de terceros.",
      "IML Tenis podrá suspender temporal o definitivamente a aquellos usuarios que incumplan las normas establecidas o afecten el normal desarrollo de las actividades.",
    ],
  },

  {
    id: 6,
    title: "Propiedad intelectual",
    content: [
      "Todo el contenido presente en el sitio web, incluyendo textos, diseños, imágenes, logotipos, marcas, gráficos, bases de datos y material audiovisual, pertenece a IML Tenis o cuenta con autorización para su utilización.",
      "Queda prohibida la reproducción, distribución, modificación o utilización del contenido sin autorización previa y por escrito de IML Tenis.",
    ],
  },

  {
    id: 7,
    title: "Disponibilidad del servicio",
    content: [
      "IML Tenis realizará esfuerzos razonables para garantizar el correcto funcionamiento de la plataforma.",
      "Sin embargo, no se garantiza la disponibilidad permanente e ininterrumpida del sitio web, pudiendo existir interrupciones por mantenimiento, actualizaciones, problemas técnicos o causas ajenas a la organización.",
    ],
  },

  {
    id: 9,
    title: "Modificaciones",
    content: [
      "IML Tenis se reserva el derecho de modificar, actualizar o eliminar contenidos, servicios y funcionalidades del sitio web en cualquier momento y sin necesidad de notificación previa.",
    ],
  },

  {
    id: 10,
    title: "Legislación aplicable",
    content: [
      "Los presentes Términos y Condiciones se regirán por las leyes de la República Argentina.",
      "Cualquier controversia relacionada con el uso del sitio web será sometida a la jurisdicción de los tribunales competentes de la Provincia de Buenos Aires, con renuncia expresa a cualquier otro fuero o jurisdicción.",
    ],
  },
];

const page = () => {
  return (
    <Container>
      <Title title="Terminos y Condiciones" emoji="🤝" description="" />
      <div className="flex flex-col gap-y-4 text-sm">
        {termsAndConditions.map((item, index) => (
          <article key={index} className="flex flex-col gap-y-2">
            <h2 className="font-bold text-primary">
              {index + 1}. {item.title}
            </h2>
            <div className="flex flex-col gap-y-2">
              {item.content.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
};

export default page;
