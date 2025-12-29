interface Item {
  title: string;
  text: string;
}

const Item = ({ title, text }: Item) => {
  return (
    <article className="flex flex-col gap-y-2 p-5 bg-white/5 rounded-xl shadow-md">
      <h2 className="font-bold text-primary">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </article>
  );
};

export default Item;
