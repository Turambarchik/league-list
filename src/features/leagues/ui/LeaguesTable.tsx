import { type League } from "../model/types";

type Props = {
  items: League[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function LeaguesTable({ items, selectedId, onSelect }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-2 border-b border-neutral-200 bg-neutral-50 px-4 py-3 text-xs font-medium uppercase tracking-wide text-neutral-600">
        <div>League</div>
        <div>Sport</div>
        <div className="hidden md:block">Alternate</div>
      </div>

      <div className="max-h-[60vh] overflow-auto">
        {items.map((l) => {
          const isSelected = l.idLeague === selectedId;

          return (
            <button
              key={l.idLeague}
              type="button"
              onClick={() => onSelect(l.idLeague)}
              className={[
                "grid w-full grid-cols-[1.4fr_1fr_1fr] gap-2 px-4 py-3 text-left text-sm",
                "border-b border-neutral-100 last:border-b-0",
                "hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300",
                isSelected ? "bg-neutral-100" : "bg-white",
              ].join(" ")}
            >
              <div className="font-medium text-neutral-900">{l.strLeague}</div>
              <div className="text-neutral-700">{l.strSport}</div>
              <div className="hidden truncate text-neutral-600 md:block">{l.strLeagueAlternate ?? "—"}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
