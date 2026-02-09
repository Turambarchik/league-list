type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function Input({ label, value, onChange, placeholder }: Props) {
  return (
    <label className="flex flex-col gap-1">
      {label ? <span className="text-xs font-medium text-neutral-700">{label}</span> : null}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 rounded-xl border border-neutral-200 bg-white px-3 text-sm outline-none ring-0 focus:border-neutral-300"
      />
    </label>
  );
}
