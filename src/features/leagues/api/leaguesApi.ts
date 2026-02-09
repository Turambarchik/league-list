import type { AllLeaguesResponse, LeagueSeasonsResponse } from "../model/types";

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/3";

async function fetchJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(url, { signal });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as T;
}

export function fetchAllLeagues(signal?: AbortSignal): Promise<AllLeaguesResponse> {
  return fetchJson<AllLeaguesResponse>(`${BASE_URL}/all_leagues.php`, signal);
}

export function fetchLeagueSeasonsWithBadges(
  leagueId: string,
  signal?: AbortSignal,
): Promise<LeagueSeasonsResponse> {
  const url = `${BASE_URL}/search_all_seasons.php?badge=1&id=${encodeURIComponent(leagueId)}`;
  return fetchJson<LeagueSeasonsResponse>(url, signal);
}
