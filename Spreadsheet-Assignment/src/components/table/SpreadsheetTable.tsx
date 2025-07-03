
import { tableData } from "../../data/tableData";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

export default function SpreadsheetTable() {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto w-full border-collapse text-sm">
        <thead className="bg-gray-100">
          <tr>
            {["Job Request", "Submitted", "Status", "Submitter", "URL", "Assigned", "Priority", "Due Date", "Est. Value"].map((col, i) => (
              <th key={i} className="border px-4 py-2 font-medium text-gray-700 text-left">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{row.job}</td>
              <td className="border px-4 py-2">{row.date}</td>
              <td className="border px-4 py-2"><StatusBadge status={row.status} /></td>
              <td className="border px-4 py-2">{row.submitter}</td>
              <td className="border px-4 py-2 text-blue-600 underline cursor-pointer">{row.url}</td>
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
