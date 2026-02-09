import { memo } from "react";
import { type League } from "../model/types";
import { useLeagueBadge } from "../hooks/useLeagueBadge";
import { Card } from "../../../shared/ui/Card";
import { Loader } from "../../../shared/ui/Loader";
import { EmptyState } from "../../../shared/ui/EmptyState";
import { ErrorState } from "../../../shared/ui/ErrorState";

type Props = {
  league: League | null;
};

export const LeagueBadgePanel = memo(function LeagueBadgePanel({ league }: Props) {
  const badgeQuery = useLeagueBadge(league?.idLeague ?? null);

  return (
    <Card>
      {!league ? (
        <EmptyState
          title="No league selected"
          description="Click a league in the list to load its season badge."
        />
      ) : badgeQuery.isLoading ? (
        <div className="py-10">
          <Loader label="Loading badge..." />
        </div>
      ) : badgeQuery.isError ? (
        <ErrorState message={(badgeQuery.error as Error).message} />
      ) : !badgeQuery.data?.badgeUrl ? (
        <EmptyState title="No badge available" description="This league does not have season badges." />
      ) : (
        <div className="flex flex-col gap-3">
          <div>
            <div className="text-sm text-neutral-500">Selected league</div>
            <div className="text-lg font-semibold">{league.strLeague}</div>
            <div className="text-sm text-neutral-600">{league.strSport}</div>
            {badgeQuery.data.seasonLabel ? (
              <div className="mt-1 text-xs text-neutral-500">Season: {badgeQuery.data.seasonLabel}</div>
            ) : null}
          </div>

          <div className="flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-4">
            <img
              src={badgeQuery.data.badgeUrl}
              alt={`${league.strLeague} season badge`}
              className="max-h-56 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </Card>
  );
});
