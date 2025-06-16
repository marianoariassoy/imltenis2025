interface Item {
  title: string;
  text: string;
}

const Item = ({ title, text }: Item) => {
  return (
    <article className="flex flex-col gap-y-1 p-5 bg-black bg-opacity-10 rounded-xl shadow-md">
      <h2 className="font-bold text-primary">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </article>
  );
};

export default Item;
