type Option = { label: string; value: string };

type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

export function Select({ label, value, onChange, options }: Props) {
  return (
    <label className="flex flex-col gap-1">
      {label ? <span className="text-xs font-medium text-neutral-700">{label}</span> : null}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 rounded-xl border border-neutral-200 bg-white px-3 text-sm outline-none ring-0 focus:border-neutral-300"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
