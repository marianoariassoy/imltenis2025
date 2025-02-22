import Title from "@/components/Title";

const Page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/tournaments/ "
  );
  const data = await response.json();

  return (
    <section className="fade-in flex flex-col gap-y-6">
      <Title title="Segunda Libre Clausura 2024" emoji="🏆" />
    </section>
  );
};

export default Page;
