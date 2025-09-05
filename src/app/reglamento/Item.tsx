interface data {
  title: string;
  text: string;
}

const Item = ({ data }: { data: data }) => {
  return (
    <article className="mb-6">
      {data.title && (
        <h2 className="font-bold text-primary inline-block mr-2">
          {data.title}:
        </h2>
      )}
      <span className="text-balance whitespace-pre-line">{data.text}</span>
      {data.title === "Planillas" && (
        <a
          href="https://www.imltenis.com.ar/docs/planilla-carga-imltenis.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-white block"
        >
          Descargar planilla de resultados
        </a>
      )}
    </article>
  );
};

export default Item;
