export default function PriorityBadge({ priority }: { priority: string }) {
  const colorMap: Record<string, string> = {
    Low: "text-blue-600",
    Medium: "text-yellow-600",
    High: "text-red-600"
  };

  return (
    <span className={`text-sm font-medium ${colorMap[priority] || ""}`}>
      {priority}
    </span>
  );
}
