import type { League } from "./types";

export type LeaguesFilters = {
  search: string;
  sport: string;
};

export function getSportOptions(leagues: League[]): string[] {
  return Array.from(new Set(leagues.map((l) => l.strSport).filter(Boolean))).sort();
}

export function filterLeagues(leagues: League[], filters: LeaguesFilters): League[] {
  const search = filters.search.trim().toLowerCase();
  const sport = filters.sport;

  return leagues.filter((l) => {
    const matchesSport = sport === "All" || l.strSport === sport;

    if (!search) {
      return matchesSport;
    }

    const name = l.strLeague.toLowerCase();
    const alt = (l.strLeagueAlternate ?? "").toLowerCase();

    const matchesSearch = name.includes(search) || alt.includes(search);

    return matchesSport && matchesSearch;
  });
}
