import { cn } from "shadcn/lib/utils";

interface DisplayCardProps {
  url: string;
  title: string;
  description: string;
  className?: string;
  dark?: boolean;
}

export function DisplayCard({ description, url, title, className, dark }: DisplayCardProps) {
  return (
    <div className="stack group/card isolate overflow-hidden rounded-2xl">
      <img
        src={url}
        alt="card-image"
        className="-z-10 h-full w-full object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
      />
      <div className={cn("flex flex-col gap-4 self-end p-4 text-white md:p-8", className, { "text-black": dark })}>
        <h2
          className={cn(
            "inline-block text-4xl font-bold transition-all duration-500 hover:text-black md:pr-10 md:text-7xl",
            { "hover:text-white": dark }
          )}
        >
          {title}
        </h2>
        <p className="drop-shadow-sm">{description}</p>
        <button
          type="button"
          className={cn(
            "w-max rounded-md bg-white px-6 py-2 font-semibold text-gray-950 transition-all duration-200 hover:bg-black hover:text-white",
            { "bg-black text-white hover:bg-white hover:text-black": dark }
          )}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
