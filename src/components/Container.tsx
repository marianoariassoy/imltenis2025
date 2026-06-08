export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-4xl mx-auto px-4 flex flex-col gap-y-8 pt-[6.5rem]">
      {children}
    </section>
  );
};
