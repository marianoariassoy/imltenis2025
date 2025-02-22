import { Instagram } from "../../lib/icons";

interface Item {
  title: string;
  text: string;
  url?: string;
}

const Item = ({ item }: { item: Item }) => {
  return (
    <article className="flex flex-col text-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-primary font-bold">{item.title}</h2>
        <div>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:opacity-70 text-xs"
            >
              <Instagram />
            </a>
          )}
        </div>
      </div>
      <p>{item.text}</p>
    </article>
  );
};

export default Item;
