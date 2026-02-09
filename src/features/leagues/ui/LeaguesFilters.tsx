import { Input } from "../../../shared/ui/Input";
import { Select } from "../../../shared/ui/Select";

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  sport: string;
  onSportChange: (value: string) => void;
  sportOptions: string[];
};

export function LeaguesFilters({ search, onSearchChange, sport, onSportChange, sportOptions }: Props) {
  const options = [{ label: "All sports", value: "All" }, ...sportOptions.map((s) => ({ label: s, value: s }))];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <Input
        label="Search"
        value={search}
        onChange={onSearchChange}
        placeholder="e.g. Premier, Liga, NBA..."
      />
      <Select label="Sport" value={sport} onChange={onSportChange} options={options} />
    </div>
  );
}
