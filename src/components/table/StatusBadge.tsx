export default function StatusBadge({ status }: { status: string }) {
  const statusColors: Record<string, string> = {
    "In-process": "bg-yellow-100 text-yellow-800",
    "Need to start": "bg-blue-100 text-blue-800",
    "Complete": "bg-green-100 text-green-800",
    "Blocked": "bg-red-100 text-red-800",
  };

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColors[status] || ""}`}>
      {status}
    </span>
  );
}
