import { tableData } from "../../data/tableData";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

// Filler Cell Component
function FillerCell() {
  return (
    <div className="flex items-center justify-between w-full h-[32px] bg-gray-100 rounded px-2 mb-2">
      {/* Left: Icon and Title */}
      <div className="flex items-center gap-1 text-sm text-gray-700">
        {/* Link Icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.66667 9.33333C6.31333 9.68 6.16 10.0933 6.16 10.58C6.16 11.0667 6.31333 11.4733 6.66667 11.8C7.02 12.1467 7.44 12.32 7.92667 12.32C8.41333 12.32 8.82 12.1467 9.14667 11.8L11.6867 9.26C12.02 8.92667 12.1867 8.52 12.1867 8.04C12.1867 7.56 12.02 7.15333 11.6867 6.82C11.3533 6.48667 10.9467 6.32 10.4667 6.32C9.98667 6.32 9.58 6.48667 9.24667 6.82L8.94 7.12667" stroke="#4B6A4F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.33333 6.66667C9.68667 6.32 9.84 5.90667 9.84 5.42C9.84 4.93333 9.68667 4.52667 9.33333 4.2C8.98 3.85333 8.56 3.68 8.07333 3.68C7.58667 3.68 7.18 3.85333 6.85333 4.2L4.31333 6.74C3.98 7.07333 3.81333 7.48 3.81333 7.96C3.81333 8.44 3.98 8.84667 4.31333 9.18C4.64667 9.51333 5.05333 9.68 5.53333 9.68C6.01333 9.68 6.42 9.51333 6.75333 9.18L7.06 8.87333" stroke="#4B6A4F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <span>Q3 Financial Overview</span>
      </div>

      {/* Right: Refresh Icon */}
      <div className="text-orange-500 cursor-pointer">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.00004 1.16666C3.78004 1.16666 1.16671 3.78 1.16671 7C1.16671 10.22 3.78004 12.8333 7.00004 12.8333C9.11671 12.8333 10.9867 11.6067 12.0067 9.75333C12.1467 9.5 12.0467 9.18 11.7934 9.04C11.5401 8.9 11.2201 9 11.0801 9.25333C10.2934 10.7 8.72671 11.6667 7.00004 11.6667C4.42004 11.6667 2.33337 9.58 2.33337 7C2.33337 4.42 4.42004 2.33333 7.00004 2.33333C7.91337 2.33333 8.77337 2.60666 9.48671 3.10666L8.75004 3.84333C8.54004 4.05333 8.54004 4.40666 8.75004 4.61666C8.96004 4.82666 9.31337 4.82666 9.52337 4.61666L11.2234 2.91666C11.4334 2.70666 11.4334 2.35333 11.2234 2.14333L9.52337 0.443326C9.31337 0.233326 8.96004 0.233326 8.75004 0.443326C8.54004 0.653326 8.54004 1.00666 8.75004 1.21666L9.65004 2.11666C8.74004 1.50333 7.71671 1.16666 7.00004 1.16666Z" fill="#F97316" />
        </svg>
      </div>
    </div>
  );
}

export default function SpreadsheetTable() {
  return (
    <div className="overflow-x-auto w-full border rounded-lg p-2">
      
      {/* Filler Cell Above Table */}
      <FillerCell />

      <table className="min-w-full text-sm border-collapse mt-2">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {["Job Request", "Submitted", "Status", "Submitter", "URL", "Assigned", "Priority", "Due Date", "Est. Value"].map((col, i) => (
              <th key={i} className="border px-4 py-2 font-medium text-left">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="border px-4 py-2">{row.job}</td>
              <td className="border px-4 py-2">{row.date}</td>
              <td className="border px-4 py-2"><StatusBadge status={row.status} /></td>
              <td className="border px-4 py-2">{row.submitter}</td>
              <td className="border px-4 py-2">
                <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  {row.url}
                </a>
              </td>
              <td className="border px-4 py-2">{row.assigned}</td>
              <td className="border px-4 py-2"><PriorityBadge priority={row.priority} /></td>
              <td className="border px-4 py-2">{row.due}</td>
              <td className="border px-4 py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
