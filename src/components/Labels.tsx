interface Label {
  name: string;
  value: string;
}

const Labels = ({ labels }: { labels: Label[] }) => {
  return (
    <ul className="flex gap-x-3 justify-center text-secondary flex-wrap text-sm mb-3">
      {labels
        .filter((item) => item.value)
        .map((item, index) => (
          <li key={index}>
            <span className="font-semibold">{item.name}:</span> {item.value}
          </li>
        ))}
    </ul>
  );
};

export default Labels;
