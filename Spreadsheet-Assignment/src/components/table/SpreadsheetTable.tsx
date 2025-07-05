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
                <button className="flex items-center gap-1 bg-gray-100 px-2 py-[2px] rounded text-sm">
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

            <th className="border bg-[#D9EAD3] text-center px-4 py-2 text-gray-700 font-medium">
              <div className="flex justify-center items-center gap-2">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.50001 2C8.77616 2 9.00001 2.22386 9.00001 2.5V6.33333H10.6636C11.6762 6.33333 12.497 7.15414 12.497 8.16667V12.2944L13.6467 11.1462C13.8421 10.9511 14.1587 10.9513 14.3538 11.1467C14.5489 11.3421 14.5487 11.6587 14.3533 11.8538L12.3503 13.8541C12.155 14.0492 11.8386 14.0491 11.6434 13.8539L9.64308 11.8536C9.44782 11.6583 9.44782 11.3417 9.64308 11.1464C9.83834 10.9512 10.1549 10.9512 10.3502 11.1464L11.497 12.2932V8.16667C11.497 7.70643 11.1239 7.33333 10.6636 7.33333H6.33328C5.87304 7.33333 5.49995 7.70643 5.49995 8.16667V12.2932L6.64673 11.1464C6.84199 10.9512 7.15858 10.9512 7.35384 11.1464C7.5491 11.3417 7.5491 11.6583 7.35384 11.8536L5.3535 13.8539C5.15824 14.0492 4.84166 14.0492 4.6464 13.8539L2.64602 11.8536C2.45076 11.6583 2.45076 11.3417 2.64602 11.1465C2.84128 10.9512 3.15786 10.9512 3.35312 11.1464L4.49995 12.2932V8.16667C4.49995 7.15414 5.32076 6.33333 6.33328 6.33333H8.00001V2.5C8.00001 2.22386 8.22387 2 8.50001 2Z" fill="#A3ACA3"/>
                </svg>
                ABC
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.66665 10C7.66665 10.6443 7.14431 11.1667 6.49998 11.1667C5.85565 11.1667 5.33331 10.6443 5.33331 10C5.33331 9.35567 5.85565 8.83334 6.49998 8.83334C7.14431 8.83334 7.66665 9.35567 7.66665 10ZM11.6666 10C11.6666 10.6443 11.1443 11.1667 10.5 11.1667C9.85565 11.1667 9.33331 10.6443 9.33331 10C9.33331 9.35567 9.85565 8.83334 10.5 8.83334C11.1443 8.83334 11.6666 9.35567 11.6666 10ZM14.5 11.1667C15.1443 11.1667 15.6666 10.6443 15.6666 10C15.6666 9.35567 15.1443 8.83334 14.5 8.83334C13.8556 8.83334 13.3333 9.35567 13.3333 10C13.3333 10.6443 13.8556 11.1667 14.5 11.1667Z" fill="#AFAFAF"/>
</svg>

              </div>
            </th>
    
            <th colSpan={2} className="bg-[#D9D2E9] text-center px-4 py-2 text-[14px]text-gray-700 font-medium  tracking-[0]">
                <div className="flex justify-center items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 2C8.27616 2 8.50001 2.22386 8.50001 2.5V6.33333H10.1636C11.1762 6.33333 11.997 7.15414 11.997 8.16667V12.2944L13.1467 11.1462C13.3421 10.9511 13.6587 10.9513 13.8538 11.1467C14.0489 11.3421 14.0487 11.6587 13.8533 11.8538L11.8503 13.8541C11.655 14.0492 11.3386 14.0491 11.1434 13.8539L9.14308 11.8536C8.94782 11.6583 8.94782 11.3417 9.14308 11.1464C9.33834 10.9512 9.65492 10.9512 9.85018 11.1464L10.997 12.2932V8.16667C10.997 7.70643 10.6239 7.33333 10.1636 7.33333H5.83328C5.37304 7.33333 4.99995 7.70643 4.99995 8.16667V12.2932L6.14673 11.1464C6.34199 10.9512 6.65858 10.9512 6.85384 11.1464C7.0491 11.3417 7.0491 11.6583 6.85384 11.8536L4.8535 13.8539C4.65824 14.0492 4.34166 14.0492 4.1464 13.8539L2.14602 11.8536C1.95076 11.6583 1.95076 11.3417 2.14602 11.1465C2.34128 10.9512 2.65786 10.9512 2.85312 11.1464L3.99995 12.2932V8.16667C3.99995 7.15414 4.82076 6.33333 5.83328 6.33333H7.50001V2.5C7.50001 2.22386 7.72387 2 8.00001 2Z" fill="white"/>
</svg>

                Answer a question
                
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.66665 10C7.66665 10.6443 7.14431 11.1667 6.49998 11.1667C5.85565 11.1667 5.33331 10.6443 5.33331 10C5.33331 9.35567 5.85565 8.83334 6.49998 8.83334C7.14431 8.83334 7.66665 9.35567 7.66665 10ZM11.6666 10C11.6666 10.6443 11.1443 11.1667 10.5 11.1667C9.85565 11.1667 9.33331 10.6443 9.33331 10C9.33331 9.35567 9.85565 8.83334 10.5 8.83334C11.1443 8.83334 11.6666 9.35567 11.6666 10ZM14.5 11.1667C15.1443 11.1667 15.6666 10.6443 15.6666 10C15.6666 9.35567 15.1443 8.83334 14.5 8.83334C13.8556 8.83334 13.3333 9.35567 13.3333 10C13.3333 10.6443 13.8556 11.1667 14.5 11.1667Z" fill="#AFAFAF"/>
</svg>

                </div>
                
                </th>
            <th colSpan={1} className="bg-[#FAC2AF] text-center px-4 py-2 text-[14px]text-gray-700 font-medium">
                <div className="flex justify-center items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 2C8.27616 2 8.50001 2.22386 8.50001 2.5V6.33333H10.1636C11.1762 6.33333 11.997 7.15414 11.997 8.16667V12.2944L13.1467 11.1462C13.3421 10.9511 13.6587 10.9513 13.8538 11.1467C14.0489 11.3421 14.0487 11.6587 13.8533 11.8538L11.8503 13.8541C11.655 14.0492 11.3386 14.0491 11.1434 13.8539L9.14308 11.8536C8.94782 11.6583 8.94782 11.3417 9.14308 11.1464C9.33834 10.9512 9.65492 10.9512 9.85018 11.1464L10.997 12.2932V8.16667C10.997 7.70643 10.6239 7.33333 10.1636 7.33333H5.83328C5.37304 7.33333 4.99995 7.70643 4.99995 8.16667V12.2932L6.14673 11.1464C6.34199 10.9512 6.65858 10.9512 6.85384 11.1464C7.0491 11.3417 7.0491 11.6583 6.85384 11.8536L4.8535 13.8539C4.65824 14.0492 4.34166 14.0492 4.1464 13.8539L2.14602 11.8536C1.95076 11.6583 1.95076 11.3417 2.14602 11.1465C2.34128 10.9512 2.65786 10.9512 2.85312 11.1464L3.99995 12.2932V8.16667C3.99995 7.15414 4.82076 6.33333 5.83328 6.33333H7.50001V2.5C7.50001 2.22386 7.72387 2 8.00001 2Z" fill="white"/>
</svg>

                Extract
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.16671 8C5.16671 8.64433 4.64437 9.16667 4.00004 9.16667C3.35571 9.16667 2.83337 8.64433 2.83337 8C2.83337 7.35567 3.35571 6.83334 4.00004 6.83334C4.64437 6.83334 5.16671 7.35567 5.16671 8ZM9.16671 8C9.16671 8.64433 8.64437 9.16667 8.00004 9.16667C7.35571 9.16667 6.83337 8.64433 6.83337 8C6.83337 7.35567 7.35571 6.83334 8.00004 6.83334C8.64437 6.83334 9.16671 7.35567 9.16671 8ZM12 9.16667C12.6444 9.16667 13.1667 8.64433 13.1667 8C13.1667 7.35567 12.6444 6.83334 12 6.83334C11.3557 6.83334 10.8334 7.35567 10.8334 8C10.8334 8.64433 11.3557 9.16667 12 9.16667Z" fill="#AFAFAF"/>
</svg>

                
                </div>
                </th>
            <th className="w-[40px] px-2 text-center text-[14px]cursor-pointer">
              <div className="flex justify-center items-center bg-white rounded hover:bg-gray-100 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4V10M10 10V16M10 10H16M10 10H4" stroke="#04071E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </th>
          </tr>

          {/* Column Header Row */}
<tr className="bg-[#EEEEEE] work-sans font-semibold text-[12px] leading-[16px] tracking-[0]">
  {[
    "#", "Job Request", "Submitted", "Status", "Submitter",
    "URL", "Assigned", "Priority", "Due Date", "Est. Value", ""
  ].map((col, index) => (
    <th
      key={index}
      className={`px-4 py-2 text-left text-[#757575] border border-gray-300 transition-colors duration-200
        ${col !== "#" && col !== "" ? "hover:bg-gray-100 cursor-pointer" : ""}
        ${col === "#" ? "w-[32px] text-center text-gray-500" : ""}
        ${col ==="Priority" ? "bg-[#EAE3FC]":""}
        ${col ==="Due Date" ? "bg-[#EAE3FC]":""}
        ${col ==="Est. Value" ? "bg-[#FFE9E0]":""}
           

        
      `}
    >
      <div className="flex items-center justify-between">
        {col}
        
        {col !== "#" && col !== "" && (
          <svg
            width="12"
            height="12"
            fill="currentColor"
            className="ml-1 opacity-50"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.14645 4.14645C2.34171 3.95118 2.65829 3.95118 2.85355 4.14645L6 7.29289L9.14645 4.14645C9.34171 3.95118 9.65829 3.95118 9.85355 4.14645C10.0488 4.34171 10.0488 4.65829 9.85355 4.85355L6.35355 8.35355C6.15829 8.54882 5.84171 8.54882 5.64645 8.35355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645Z" fill="#AFAFAF"/>
          </svg>

          
        )}
        
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
    <td className="px-4 py-1  ">
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
