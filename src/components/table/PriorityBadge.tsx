interface PriorityBadgeProps {
  priority: "low" | "medium" | "high" | "urgent"
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityStyles(priority)}`}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  )
}
