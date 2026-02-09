import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title?: string;
}>;

export function Card({ title, children }: Props) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      {title ? <div className="mb-3 text-sm font-semibold text-neutral-900">{title}</div> : null}
      {children}
    </div>
  );
}
