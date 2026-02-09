import { useQuery } from "@tanstack/react-query";
import { fetchAllLeagues } from "../api/leaguesApi";
import type { League } from "../model/types";

export function useLeagues() {
  return useQuery({
    queryKey: ["leagues"],
    queryFn: async ({ signal }) => {
      const data = await fetchAllLeagues(signal);
      return data.leagues ?? [];
    },
    select: (leagues: League[]) =>
      [...leagues].sort((a, b) => a.strLeague.localeCompare(b.strLeague)),
  });
}
