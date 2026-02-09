import { useCallback, useMemo, useState } from "react";
import { useLeagues } from "./hooks/useLeagues";
import { filterLeagues, getSportOptions } from "./model/selectors";
import { type League } from "./model/types";
import { LeaguesFilters } from "./ui/LeaguesFilters";
import { LeaguesTable } from "./ui/LeaguesTable";
import { LeagueBadgePanel } from "./ui/LeagueBadgePanel";
import { Card } from "../../shared/ui/Card";
import { Loader } from "../../shared/ui/Loader";
import { ErrorState } from "../../shared/ui/ErrorState";
import { EmptyState } from "../../shared/ui/EmptyState";
import { useDebouncedValue } from "../../shared/hooks/useDebouncedValue";

export function LeaguesPage() {
  const leaguesQuery = useLeagues();

  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("All");
  const [selectedLeagueId, setSelectedLeagueId] = useState<string | null>(null);

  const debouncedSearch = useDebouncedValue(search, 250);

  const leagues = useMemo(() => leaguesQuery.data ?? [], [leaguesQuery.data]);

  const sportOptions = useMemo(() => getSportOptions(leagues), [leagues]);

  const filtered = useMemo(() => {
    return filterLeagues(leagues, { search: debouncedSearch, sport });
  }, [leagues, debouncedSearch, sport]);

  const selectedLeague: League | null = useMemo(() => {
    if (!selectedLeagueId) return null;
    return leagues.find((l) => l.idLeague === selectedLeagueId) ?? null;
  }, [leagues, selectedLeagueId]);

  const handleSelectLeague = useCallback((id: string) => {
    setSelectedLeagueId(id);
  }, []);

  const handleSportChange = useCallback((next: string) => {
    setSport(next);
    setSelectedLeagueId(null);
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl p-4 md:p-6">
      <div className="mb-4 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">League List</h1>
        <p className="text-sm text-neutral-600">
          Filter leagues by name and sport, then click a league to load a season badge.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
        <Card>
          <div className="flex flex-col gap-4">
            <LeaguesFilters
              search={search}
              onSearchChange={setSearch}
              sport={sport}
              onSportChange={handleSportChange}
              sportOptions={sportOptions}
            />

            {leaguesQuery.isLoading ? (
              <div className="py-10">
                <Loader label="Loading leagues..." />
              </div>
            ) : leaguesQuery.isError ? (
              <ErrorState message={(leaguesQuery.error as Error).message} />
            ) : filtered.length === 0 ? (
              <EmptyState title="No leagues found" description="Try changing the filters." />
            ) : (
              <LeaguesTable items={filtered} selectedId={selectedLeagueId} onSelect={handleSelectLeague} />
            )}
          </div>
        </Card>

        <LeagueBadgePanel league={selectedLeague} />
      </div>
    </div>
  );
}
