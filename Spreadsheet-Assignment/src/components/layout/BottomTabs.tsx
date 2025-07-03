const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

export default function BottomTabs() {
  return (
    <div className="flex gap-4 px-4 py-2 border-t bg-white text-sm">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded ${
            index === 0 ? "bg-green-600 text-white" : "text-gray-600"
          }`}
          onClick={() => console.log(`${tab} clicked`)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
