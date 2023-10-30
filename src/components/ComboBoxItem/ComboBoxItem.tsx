interface ComboBoxItemProps {
  title: string;
  subtitle: string;
  code: string;
}

export function ComboBoxItem({ code, subtitle, title }: ComboBoxItemProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="flex-1 space-y-1">
        <p className="line-clamp-1 text-slate-950">{title}</p>
        <span className="line-clamp-1 text-slate-500">{subtitle}</span>
      </div>
      <span className="w-min text-sm font-medium uppercase text-slate-600/80">{code}</span>
    </div>
  );
}
