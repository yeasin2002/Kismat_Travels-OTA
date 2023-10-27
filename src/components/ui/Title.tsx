import { cn } from "shadcn/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  subtitle: string;
  classTitle?: string;
  classSubtitle?: string;
}

export function Title({ children, subtitle, classTitle, classSubtitle }: TitleProps) {
  return (
    <div className="stack isolate place-items-center py-4">
      <h1 className={cn("z-10 text-2xl uppercase text-blue-500 max-md:font-bold sm:text-4xl md:text-4xl", classTitle)}>
        {children}
      </h1>
      <p
        className={cn(
          "hidden text-ellipsis text-6xl font-bold uppercase text-white/20 sm:text-white/40 md:block md:text-8xl lg:text-9xl",
          classSubtitle
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
