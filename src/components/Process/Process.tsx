import mountainImg from "$assets/mountain.jpg";
import { Title } from "$components";
import { AirplaneIcon, CalendarIcon, MapIcon, WorkIcon } from "$icons";
import Image from "next/image";

interface ProcessProps {}

const elements = [
  {
    title: "Trip Planning",
    subTitle: "We plan on what to do during the trip days.",
    icon: <MapIcon className="text-4xl text-blue-400" />,
  },
  {
    title: "Trip Booking",
    subTitle: "We plan on what to do during the trip days.",
    icon: <AirplaneIcon className="text-4xl text-blue-400" />,
  },
  {
    title: "Trip Preparation",
    subTitle: "We plan on what to do during the trip days.",
    icon: <WorkIcon className="text-4xl text-blue-400" />,
  },
  {
    title: "Trip Experience",
    subTitle: "We plan on what to do during the trip days.",
    icon: <CalendarIcon className="text-4xl text-blue-400" />,
  },
];

export function Process({}: ProcessProps) {
  return (
    <section className="stack fade-edge place-items-center">
      <Image src={mountainImg} alt="bg-mountain" className="h-full w-full object-cover" />
      <div className="container w-full py-14 lg:py-0">
        <Title subtitle="Process">How it works</Title>

        <div className="grid items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-4 ">
          {elements.map((val) => {
            return (
              <div key={val.title + val.subTitle} className="space-y-6 p-4 lg:even:translate-y-16">
                <div className="mx-auto flex aspect-square w-32 items-center justify-center rounded-full bg-white shadow">
                  {val.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-center text-2xl font-medium text-gray-900">{val.title}</h4>
                  <p className="text-center text-gray-800 [text-wrap:balance]">{val.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
