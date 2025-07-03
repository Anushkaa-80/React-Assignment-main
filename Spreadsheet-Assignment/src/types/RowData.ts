export interface RowData {
  job: string;
  date: string;
  status: "In-process" | "Need to start" | "Complete" | "Blocked";
  submitter: string;
  url: string;
  assigned: string;
  priority: "Low" | "Medium" | "High";
  due: string;
  value: string;
}

