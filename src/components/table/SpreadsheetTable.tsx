import { useEffect } from "react"; 
import { tableData } from "../../data/tableData";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import {
  JobIcon,
  CalendarIcon,
  StatusIcon,
  UserIcon,
  LinkIcon,
  UserCheckIcon,
} from "./Icons";


function handleKeyDown(e: React.KeyboardEvent<HTMLTableCellElement>) {
  const cell = e.currentTarget;
  const cellIndex = Array.from(cell.parentElement?.children || []).indexOf(cell);
  const row = cell.parentElement as HTMLTableRowElement | null;

  if (!row) return;

  let target: HTMLElement | null = null;

  switch (e.key) {
    case "ArrowRight":
      target = row.children[cellIndex + 1] as HTMLElement;
      break;
    case "ArrowLeft":
      target = row.children[cellIndex - 1] as HTMLElement;
      break;
    case "ArrowDown": {
      const nextRow = row.nextElementSibling as HTMLTableRowElement;
      if (nextRow) target = nextRow.children[cellIndex] as HTMLElement;
      break;
    }
    case "ArrowUp": {
      const prevRow = row.previousElementSibling as HTMLTableRowElement;
      if (prevRow) target = prevRow.children[cellIndex] as HTMLElement;
      break;
    }
  }

  if (target && target.hasAttribute("tabindex")) {
    e.preventDefault();
    target.focus();
  }
}




export default function SpreadsheetTable() {
  const TOTAL_ROWS = 25;
  useEffect(() => {
  const firstCell = document.querySelector("td[tabindex]") as HTMLElement;
  firstCell?.focus();
}, []);
   const renderCell = (content: React.ReactNode) => (
  <td
    tabIndex={0}
    onClick={(e) => (e.currentTarget as HTMLElement).focus()}
    onKeyDown={handleKeyDown}
    className="px-4 py-1 cursor-pointer focus:outline-2 focus:outline-blue-400 transition-colors duration-150"
  >
    {content}
  </td>
);



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
                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.16667 4.66666C6.44281 4.66666 6.66667 4.89052 6.66667 5.16666C6.66667 5.4177 6.48166 5.62553 6.24055 5.66124L6.16667 5.66666H4.66667C3.378 5.66666 2.33333 6.71133 2.33333 8C2.33333 9.24264 3.30471 10.2584 4.52956 10.3294L4.66667 10.3333H6.16667C6.44281 10.3333 6.66667 10.5572 6.66667 10.8333C6.66667 11.0844 6.48166 11.2922 6.24055 11.3279L6.16667 11.3333H4.66667C2.82572 11.3333 1.33333 9.84095 1.33333 8C1.33333 6.21483 2.73664 4.75743 4.5003 4.67074L4.66667 4.66666H6.16667ZM11.3333 4.66666C13.1743 4.66666 14.6667 6.15905 14.6667 8C14.6667 9.78516 13.2634 11.2426 11.4997 11.3293L11.3333 11.3333H9.83333C9.55719 11.3333 9.33333 11.1095 9.33333 10.8333C9.33333 10.5823 9.51834 10.3745 9.75945 10.3388L9.83333 10.3333H11.3333C12.622 10.3333 13.6667 9.28866 13.6667 8C13.6667 6.75736 12.6953 5.74159 11.4704 5.67062L11.3333 5.66666H9.83333C9.55719 5.66666 9.33333 5.44281 9.33333 5.16666C9.33333 4.91563 9.51834 4.7078 9.75945 4.67209L9.83333 4.66666H11.3333ZM4.66667 7.5H11.3333C11.6095 7.5 11.8333 7.72385 11.8333 8C11.8333 8.25313 11.6452 8.46232 11.4012 8.49543L11.3333 8.5H4.66667C4.39052 8.5 4.16667 8.27614 4.16667 8C4.16667 7.74687 4.35477 7.53767 4.59882 7.50456L4.66667 7.5H11.3333H4.66667Z" fill="#1A8CFF"/>
</svg>

                  <span>Q3 Financial Overview</span>
                </button>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8337 3.45341C10.6663 3.67298 10.7085 3.98673 10.9281 4.15419C12.1203 5.06343 12.8333 6.47214 12.8333 8C12.8333 10.4907 10.9494 12.5413 8.52888 12.8047L8.97978 12.3536C9.17505 12.1583 9.17505 11.8417 8.97978 11.6464C8.80227 11.4689 8.5245 11.4528 8.32876 11.598L8.27268 11.6464L6.93934 12.9798C6.76183 13.1573 6.7457 13.4351 6.89093 13.6308L6.93934 13.6869L8.27268 15.0202C8.46794 15.2155 8.78452 15.2155 8.97978 15.0202C9.1573 14.8427 9.17343 14.5649 9.0282 14.3692L8.97978 14.3131L8.47963 13.8139C11.4769 13.57 13.8333 11.0602 13.8333 8C13.8333 6.15685 12.9721 4.45548 11.5345 3.35905C11.3149 3.19159 11.0012 3.23384 10.8337 3.45341ZM7.02022 0.979782C6.82496 1.17504 6.82496 1.49163 7.02022 1.68689L7.51972 2.18616C4.52273 2.4304 2.16667 4.94006 2.16667 8C2.16667 9.76297 2.95418 11.3983 4.28721 12.4994C4.50011 12.6753 4.81527 12.6452 4.99113 12.4323C5.16699 12.2194 5.13697 11.9043 4.92407 11.7284C3.81863 10.8153 3.16667 9.46147 3.16667 8C3.16667 5.50958 5.05022 3.45908 7.47047 3.19535L7.02022 3.64645C6.82496 3.84171 6.82496 4.15829 7.02022 4.35356C7.21549 4.54882 7.53207 4.54882 7.72733 4.35356L9.06066 3.02022C9.25593 2.82496 9.25593 2.50838 9.06066 2.31312L7.72733 0.979782C7.53207 0.78452 7.21549 0.78452 7.02022 0.979782Z" fill="#FA6736"/>
</svg>

              </div>
            </th>

            <th colSpan={1}>
              <div className="w-[124px] h-[36px] px-2 py-2"></div>
            </th>

            <th className=" hover:bg-[#cbf1bb] border bg-[#D9EAD3] text-center px-4 py-2 text-gray-700 font-medium">
              <div className=" flex justify-center items-center gap-2">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.50001 2C8.77616 2 9.00001 2.22386 9.00001 2.5V6.33333H10.6636C11.6762 6.33333 12.497 7.15414 12.497 8.16667V12.2944L13.6467 11.1462C13.8421 10.9511 14.1587 10.9513 14.3538 11.1467C14.5489 11.3421 14.5487 11.6587 14.3533 11.8538L12.3503 13.8541C12.155 14.0492 11.8386 14.0491 11.6434 13.8539L9.64308 11.8536C9.44782 11.6583 9.44782 11.3417 9.64308 11.1464C9.83834 10.9512 10.1549 10.9512 10.3502 11.1464L11.497 12.2932V8.16667C11.497 7.70643 11.1239 7.33333 10.6636 7.33333H6.33328C5.87304 7.33333 5.49995 7.70643 5.49995 8.16667V12.2932L6.64673 11.1464C6.84199 10.9512 7.15858 10.9512 7.35384 11.1464C7.5491 11.3417 7.5491 11.6583 7.35384 11.8536L5.3535 13.8539C5.15824 14.0492 4.84166 14.0492 4.6464 13.8539L2.64602 11.8536C2.45076 11.6583 2.45076 11.3417 2.64602 11.1465C2.84128 10.9512 3.15786 10.9512 3.35312 11.1464L4.49995 12.2932V8.16667C4.49995 7.15414 5.32076 6.33333 6.33328 6.33333H8.00001V2.5C8.00001 2.22386 8.22387 2 8.50001 2Z" fill="#A3ACA3"/>
                </svg>
                ABC
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.66665 10C7.66665 10.6443 7.14431 11.1667 6.49998 11.1667C5.85565 11.1667 5.33331 10.6443 5.33331 10C5.33331 9.35567 5.85565 8.83334 6.49998 8.83334C7.14431 8.83334 7.66665 9.35567 7.66665 10ZM11.6666 10C11.6666 10.6443 11.1443 11.1667 10.5 11.1667C9.85565 11.1667 9.33331 10.6443 9.33331 10C9.33331 9.35567 9.85565 8.83334 10.5 8.83334C11.1443 8.83334 11.6666 9.35567 11.6666 10ZM14.5 11.1667C15.1443 11.1667 15.6666 10.6443 15.6666 10C15.6666 9.35567 15.1443 8.83334 14.5 8.83334C13.8556 8.83334 13.3333 9.35567 13.3333 10C13.3333 10.6443 13.8556 11.1667 14.5 11.1667Z" fill="#AFAFAF"/>
</svg>

              </div>
            </th>
    
            <th colSpan={2} className="hover:bg-[#cec2eb] bg-[#D9D2E9] text-center px-4 py-2 text-[14px]text-gray-700 font-medium  tracking-[0]">
                <div className="  flex justify-center items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 2C8.27616 2 8.50001 2.22386 8.50001 2.5V6.33333H10.1636C11.1762 6.33333 11.997 7.15414 11.997 8.16667V12.2944L13.1467 11.1462C13.3421 10.9511 13.6587 10.9513 13.8538 11.1467C14.0489 11.3421 14.0487 11.6587 13.8533 11.8538L11.8503 13.8541C11.655 14.0492 11.3386 14.0491 11.1434 13.8539L9.14308 11.8536C8.94782 11.6583 8.94782 11.3417 9.14308 11.1464C9.33834 10.9512 9.65492 10.9512 9.85018 11.1464L10.997 12.2932V8.16667C10.997 7.70643 10.6239 7.33333 10.1636 7.33333H5.83328C5.37304 7.33333 4.99995 7.70643 4.99995 8.16667V12.2932L6.14673 11.1464C6.34199 10.9512 6.65858 10.9512 6.85384 11.1464C7.0491 11.3417 7.0491 11.6583 6.85384 11.8536L4.8535 13.8539C4.65824 14.0492 4.34166 14.0492 4.1464 13.8539L2.14602 11.8536C1.95076 11.6583 1.95076 11.3417 2.14602 11.1465C2.34128 10.9512 2.65786 10.9512 2.85312 11.1464L3.99995 12.2932V8.16667C3.99995 7.15414 4.82076 6.33333 5.83328 6.33333H7.50001V2.5C7.50001 2.22386 7.72387 2 8.00001 2Z" fill="white"/>
</svg>

                Answer a question
                
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.66665 10C7.66665 10.6443 7.14431 11.1667 6.49998 11.1667C5.85565 11.1667 5.33331 10.6443 5.33331 10C5.33331 9.35567 5.85565 8.83334 6.49998 8.83334C7.14431 8.83334 7.66665 9.35567 7.66665 10ZM11.6666 10C11.6666 10.6443 11.1443 11.1667 10.5 11.1667C9.85565 11.1667 9.33331 10.6443 9.33331 10C9.33331 9.35567 9.85565 8.83334 10.5 8.83334C11.1443 8.83334 11.6666 9.35567 11.6666 10ZM14.5 11.1667C15.1443 11.1667 15.6666 10.6443 15.6666 10C15.6666 9.35567 15.1443 8.83334 14.5 8.83334C13.8556 8.83334 13.3333 9.35567 13.3333 10C13.3333 10.6443 13.8556 11.1667 14.5 11.1667Z" fill="#AFAFAF"/>
</svg>

                </div>
                
                </th>
            <th colSpan={1} className=" hover:bg-[#fab8a1]   bg-[#FAC2AF] text-center px-4 py-2 text-[14px]text-gray-700 font-medium">
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
    { label: "#", svg: null },
    { label: "Job Request", svg: <JobIcon /> },
    { label: "Submitted", svg: <CalendarIcon /> },
    { label: "Status", svg: <StatusIcon /> },
    { label: "Submitter", svg: <UserIcon /> },
    { label: "URL", svg: <LinkIcon /> },
    { label: "Assigned", svg: <UserCheckIcon /> },
    { label: "Priority" },
    { label: "Due Date" },
    { label: "Est. Value", },
    { label: "", svg: null }
  ].map((col, index) => (
    <th
      key={index}
      className={`px-4 py-2 text-left text-[#757575] border border-gray-300 transition-colors duration-200
        ${col.label !== "#" && col.label !== "" ? "hover:bg-gray-100 cursor-pointer" : ""}
        ${col.label === "#" ? "w-[32px] text-center text-gray-500" : ""}
        ${col.label === "Priority" ? "bg-[#EAE3FC]" : ""}
        ${col.label === "Due Date" ? "bg-[#EAE3FC]" : ""}
        ${col.label === "Est. Value" ? "bg-[#FFE9E0]" : ""}
      `}
    >
      <div className="flex items-center justify-between gap-1">
        {/* Left side: Icon + Label */}
        <div className="flex items-center gap-2">
          {col.svg}
          {col.label}
        </div>

        {/* Right side: Sort Arrow */}
        {col.label !== "#" && col.label !== "" && (
          <svg
            width="12"
            height="12"
            fill="currentColor"
            className="opacity-50"
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
          {/* ✅ Filled Rows */}
          {tableData.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 text-[12px] leading-[16px] font-normal tracking-normal"
            >
              <td className="text-center px-2 py-1">{idx + 1}</td>
              {renderCell(row.job)}
              {renderCell(row.date)}
              {renderCell(<StatusBadge status={row.status} />)}
              {renderCell(row.submitter)}
              {renderCell(row.url)}
              {renderCell(row.assigned)}
              {renderCell(<PriorityBadge priority={row.priority} />)}
              {renderCell(row.due)}
              {renderCell(row.value)}
              <td className="px-4 py-1"></td>
            </tr>
          ))}

          {/* ✅ Empty Rows */}
          {Array.from({ length: TOTAL_ROWS - tableData.length }).map((_, i) => {
            const sno = tableData.length + i + 1;
            return (
              <tr key={`empty-${sno}`} className="hover:bg-gray-100">
                <td className="text-center px-2 py-1 text-gray-400">{sno}</td>
                {Array.from({ length: 10 }).map((_, cellIdx) => (
                  <td
                    key={cellIdx}
                    tabIndex={0}
                    onClick={(e) => (e.currentTarget as HTMLElement).focus()}
                    onKeyDown={handleKeyDown}
                    className="px-4 py-1 text-gray-300 outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
                  ></td>
                ))}
                {/* <td className="px-4 py-1"></td> */}
              </tr>
            );
          })}
        </tbody>
 
      </table>
    </div>
  );
}
