import desertCamel from "$assets/desert-camel.jpeg";
import desertHuman from "$assets/desert-human.jpg";
import { DisplayCard } from "$components";

export function ShowCase() {
  return (
    <section className="container py-14">
      <div className="flex flex-col gap-4 md:flex-row">
        <DisplayCard
          url={desertHuman.src}
          title="ESCAPE TO PARADISE"
          description="Book now and save 20% on your tropical getaway!"
        />
        <DisplayCard
          url={desertCamel.src}
          title="ESCAPE TO PARADISE"
          description="Book now and save 20% on your tropical getaway!"
          dark
        />
      </div>
    </section>
  );
}
