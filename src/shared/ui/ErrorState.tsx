type Props = {
  message: string;
};

export function ErrorState({ message }: Props) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-4">
      <div className="text-sm font-semibold text-red-900">Something went wrong</div>
      <div className="mt-1 break-words text-sm text-red-800">{message}</div>
    </div>
  );
}
