import { BookingForm, Destination, Faq, Footer, Hero, InfoDisplay, Process, ShowCase } from "$components";

export default function () {
  return (
    <main>
      <Hero />
      <BookingForm />
      <Destination />
      <ShowCase />
      <Process />
      <InfoDisplay />
      <Faq />
      <Footer />
    </main>
  );
}
