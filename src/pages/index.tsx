import { Destination, Faq, Footer, Hero, InfoDisplay, Nav, Process, ShowCase } from "$components";
import { FileUpload } from "shadcn/components/ui/file-upload";

export default function () {
  return (
    <main>
      <Nav />
      <Hero />
      <Destination />
      <ShowCase />
      <Process />
      <InfoDisplay />
      <Faq />
      <Footer />
    </main>
  );
}
