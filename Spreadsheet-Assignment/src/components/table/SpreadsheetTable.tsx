import { tableData } from "../../data/tableData";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

export default function SpreadsheetTable() {
  const TOTAL_ROWS = 25;

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-max border-collapse w-full border border-gray-300 [&_td]:border [&_td]:border-gray-300 [&_th]:border [&_th]:border-gray-300">
        <thead className="text-sm">
          {/* Group Header Row */}
          <tr>
            <th className="bg-white w-[32px]"></th>

            <th colSpan={4} className="bg-[#E2E2E2] text-left text-gray-700 font-medium">
              <div className="flex items-center gap-2 px-2 py-1">
                <button className="flex items-center gap-1 bg-white px-2 py-[2px] rounded text-sm">
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path
                      d="M6.66667 9.33333C6.31333 9.68 6.16 10.0933 6.16 10.58C6.16 11.0667 6.31333 11.4733 6.66667 11.8C7.02 12.1467 7.44 12.32 7.92667 12.32C8.41333 12.32 8.82 12.1467 9.14667 11.8L11.6867 9.26C12.02 8.92667 12.1867 8.52 12.1867 8.04C12.1867 7.56 12.02 7.15333 11.6867 6.82C11.3533 6.48667 10.9467 6.32 10.4667 6.32C9.98667 6.32 9.58 6.48667 9.24667 6.82L8.94 7.12667"
                      stroke="#4B6A4F"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.33333 6.66667C9.68667 6.32 9.84 5.90667 9.84 5.42C9.84 4.93333 9.68667 4.52667 9.33333 4.2C8.98 3.85333 8.56 3.68 8.07333 3.68C7.58667 3.68 7.18 3.85333 6.85333 4.2L4.31333 6.74C3.98 7.07333 3.81333 7.48 3.81333 7.96C3.81333 8.44 3.98 8.84667 4.31333 9.18C4.64667 9.51333 5.05333 9.68 5.53333 9.68C6.01333 9.68 6.42 9.51333 6.75333 9.18L7.06 8.87333"
                      stroke="#4B6A4F"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Q3 Financial Overview</span>
                </button>

                <svg width="14" height="14" fill="none" viewBox="0 0 14 14" className="text-orange-500 cursor-pointer">
                  <path
                    d="M7 1.17C3.78 1.17 1.17 3.78 1.17 7s2.61 5.83 5.83 5.83c2.12 0 3.99-1.23 5.01-3.08.14-.25.04-.57-.22-.71-.25-.14-.57-.04-.71.22A4.84 4.84 0 017 11.67c-2.58 0-4.67-2.09-4.67-4.67S4.42 2.33 7 2.33c.91 0 1.77.27 2.49.77l-.74.74c-.21.21-.21.55 0 .76.21.21.55.21.76 0l1.7-1.7c.21-.21.21-.55 0-.76L9.51.44a.54.54 0 00-.76 0c-.21.21-.21.55 0 .76L9.65 2.12c-.91-.61-1.93-.95-2.65-.95z"
                    fill="#F97316"
                  />
                </svg>
              </div>
            </th>

            <th colSpan={1}>
              <div className="w-[124px] h-[36px] px-2 py-2"></div>
            </th>

            <th colSpan={1} className="bg-[#D9EAD3] text-center px-4 py-2 text-gray-700 font-medium">ABC</th>
            <th colSpan={2} className="bg-[#D9D2E9] text-center px-4 py-2 text-gray-700 font-medium">Answer a question</th>
            <th colSpan={1} className="bg-[#F4CCCC] text-center px-4 py-2 text-gray-700 font-medium">Extract</th>
            <th className="w-[40px] px-2 text-center cursor-pointer">
              <div className="flex justify-center items-center bg-white rounded hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4V10M10 10V16M10 10H16M10 10H4" stroke="#04071E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </th>
          </tr>

          {/* Column Header Row */}
          <tr className="bg-[#EEEEEE]">
            {[
              "#", 
              
              
              "Job Request", "Submitted", "Status", "Submitter",
              "URL", "Assigned", "Priority", "Due Date", "Est. Value", ""
            ].map((col, index) => (
              <th key={index} className={`px-4 py-2 text-left text-gray-700 ${col === "#" ? "w-[32px] text-center text-gray-500" : ""}`}>
                <div className="flex items-center">
                  {col}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.14645 8.14645C6.34171 7.95118 6.65829 7.95118 6.85355 8.14645L10 11.2929L13.1464 8.14645C13.3417 7.95118 13.6583 7.95118 13.8536 8.14645C14.0488 8.34171 14.0488 8.65829 13.8536 8.85355L10.3536 12.3536C10.1583 12.5488 9.84171 12.5488 9.64645 12.3536L6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645Z" fill="#AFAFAF"/>
</svg>

                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* Actual filled data rows */}
          {tableData.map((row, idx) => (
  <tr
    key={idx}
    className="hover:bg-gray-50 text-[12px] leading-[16px] font-normal tracking-normal"
  >
    <td className="text-center px-2 py-1">{idx + 1}</td>
    <td className="px-4 py-1">{row.job}</td>
    <td className="px-4 py-1">{row.date}</td>
    <td className="px-4 py-1">
      <StatusBadge status={row.status} />
    </td>
    <td className="px-4 py-1">{row.submitter}</td>
    <td className="px-4 py-1">{row.url}</td>
    <td className="px-4 py-1">{row.assigned}</td>
    <td className="px-4 py-1">
      <PriorityBadge priority={row.priority} />
    </td>
    <td className="px-4 py-1">{row.due}</td>
    <td className="px-4 py-1">{row.value}</td>
    <td className="px-4 py-1"></td>
  </tr>
))}


          {/* Empty rows */}
          {Array.from({ length: TOTAL_ROWS - tableData.length }).map((_, i) => {
            const sno = tableData.length + i + 1;
            return (
              <tr key={`empty-${sno}`} className="hover:bg-gray-50">
                <td className="text-center px-2 py-1 text-gray-400">{sno}</td>
                {Array.from({ length: 10 }).map((_, cellIdx) => (
                  <td key={cellIdx} className="px-4 py-1 text-gray-300">—</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
