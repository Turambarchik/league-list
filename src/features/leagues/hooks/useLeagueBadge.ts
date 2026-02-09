import { useQuery } from "@tanstack/react-query";
import { fetchLeagueSeasonsWithBadges } from "../api/leaguesApi";

type LeagueBadgeResult = {
  badgeUrl: string | null;
  seasonLabel: string | null;
};

function pickBadge(seasons: { strBadge?: string | null; strSeason?: string | null }[]): LeagueBadgeResult {
  const withBadge = seasons.find((s) => Boolean(s.strBadge));

  return {
    badgeUrl: withBadge?.strBadge ?? null,
    seasonLabel: withBadge?.strSeason ?? null,
  };
}

export function useLeagueBadge(leagueId: string | null) {
  return useQuery({
    queryKey: ["league-badge", leagueId],
    enabled: Boolean(leagueId),
    queryFn: async ({ signal }) => {
      if (!leagueId) {
        return { badgeUrl: null, seasonLabel: null } satisfies LeagueBadgeResult;
      }

      const data = await fetchLeagueSeasonsWithBadges(leagueId, signal);
      const seasons = data.seasons ?? [];

      return pickBadge(seasons);
    },
    staleTime: 30 * 60 * 1000,
  });
}
