type Props = {
  title: string;
  description?: string;
};

export function EmptyState({ title, description }: Props) {
  return (
    <div className="rounded-xl border border-dashed border-neutral-200 bg-neutral-50 p-4">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      {description ? <div className="mt-1 text-sm text-neutral-600">{description}</div> : null}
    </div>
  );
}
