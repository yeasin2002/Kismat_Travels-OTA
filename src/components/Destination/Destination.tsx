import { ItemCard, Title } from "$components";

export const Destination = () => {
  return (
    <section className="container py-20">
      <Title subtitle=" DESTINATIONS" classSubtitle=" text-gray-300/20 sm:text-gray-300/40 ">
        POPULAR DESTINATIONS
      </Title>
      <div className="my-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4].map((val) => (
          <ItemCard key={val} />
        ))}
      </div>
    </section>
  );
};
