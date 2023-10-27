export function CardWrapper({ children, title = "" }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="flex flex-col gap-y-2 rounded bg-brandBlue-200/50 p-2 backdrop-blur-3xl">
      <span className="text-base font-medium text-slate-900">{title}</span>
      {children}
    </div>
  );
}
