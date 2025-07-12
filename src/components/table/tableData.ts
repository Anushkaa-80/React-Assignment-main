export interface TableRow {
  job: string
  date: string
  status: "pending" | "in-progress" | "completed" | "cancelled"
  submitter: string
  url: string
  assigned: string
  priority: "low" | "medium" | "high" | "urgent"
  due: string
  value: string
}

export const tableData: TableRow[] = [
  {
    job: "Website Redesign",
    date: "2024-01-15",
    status: "in-progress",
    submitter: "John Doe",
    url: "https://example.com/project1",
    assigned: "Jane Smith",
    priority: "high",
    due: "2024-02-15",
    value: "$5,000",
  },
  {
    job: "Mobile App Development",
    date: "2024-01-10",
    status: "pending",
    submitter: "Alice Johnson",
    url: "https://example.com/project2",
    assigned: "Bob Wilson",
    priority: "urgent",
    due: "2024-03-01",
    value: "$15,000",
  },
  {
    job: "Database Migration",
    date: "2024-01-08",
    status: "completed",
    submitter: "Charlie Brown",
    url: "https://example.com/project3",
    assigned: "Diana Prince",
    priority: "medium",
    due: "2024-01-30",
    value: "$3,500",
  },
  {
    job: "API Integration",
    date: "2024-01-12",
    status: "in-progress",
    submitter: "Eve Davis",
    url: "https://example.com/project4",
    assigned: "Frank Miller",
    priority: "high",
    due: "2024-02-10",
    value: "$7,200",
  },
  {
    job: "Security Audit",
    date: "2024-01-05",
    status: "cancelled",
    submitter: "Grace Lee",
    url: "https://example.com/project5",
    assigned: "Henry Ford",
    priority: "low",
    due: "2024-01-25",
    value: "$2,800",
  },
]
