import hotelImg from "$assets/display/hotel.jpg";
import Image from "next/image";

const info = [
  {
    title: "years of experience",
    data: "20+",
  },
  {
    title: "destination countries",
    data: "100+",
  },
  {
    title: "tour & travel awards",
    data: "10+",
  },
  {
    title: "delighted clients",
    data: "2237216",
  },
];

export function InfoDisplay() {
  return (
    <section className="container text-slate-600">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="space-y-2 sm:col-span-2 md:space-y-4 lg:col-span-1">
          <h2 className="text-2xl font-bold text-slate-900 [text-wrap:balance] md:text-5xl">
            Only The Best Quality For You
          </h2>
          <p>
            From Planning to Post-Trip Follow-Up, we have all the best services special for you. Take a look at our
            numbers for our credibility.
          </p>
        </div>
        <Image src={hotelImg} alt="hotels" className="rounded" />
        <div className="flex flex-col justify-between max-sm:gap-2">
          {info.map((val, index) => (
            <>
              <div key={val.title + val.data}>
                <p className="text-2xl font-bold text-slate-800">{val.data}</p>
                <h4 className="text-base ">{val.title}</h4>
              </div>
              {info.length !== index + 1 && <hr />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
