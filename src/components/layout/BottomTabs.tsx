import { useState } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived", "+"];

export default function BottomTabs() {
  const [activeTab, setActiveTab] = useState("All Orders");

   return (
    <div className="w-full bg-white border-t border-gray-300">
      <div className="flex space-x-4 px-4 pt-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative px-3 py-1.5 text-sm transition-colors duration-200
                ${isActive
                  ? "text-[#2F4F34] font-semibold bg-[#E9F0EA] border-t-2 border-[#2F4F34]"
                  : "text-[#757575] hover:text-[#2F4F34]"}
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
