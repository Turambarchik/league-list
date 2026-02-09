type Props = {
  label?: string;
};

export function Loader({ label }: Props) {
  return (
    <div className="flex items-center justify-center gap-3 text-sm text-neutral-600">
      <span className="inline-block size-4 animate-spin rounded-full border-2 border-neutral-300 border-t-transparent" />
      {label ?? "Loading..."}
    </div>
  );
}
