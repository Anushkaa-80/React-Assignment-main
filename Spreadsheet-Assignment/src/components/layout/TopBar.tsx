import { Search, Bell } from "lucide-react"; 

export default function TopBar() {
  return (
    <div className="w-full h-14 px-4 py-2 border-b flex justify-between items-center bg-white shadow-sm">
      {/* Left: Path */}
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <div className="w-4 h-4 bg-green-200 rounded-sm"></div>
        <span className="text-gray-500">Workspace</span>
        <span className="text-gray-400">›</span>
        <span className="text-gray-500">Folder 2</span>
        <span className="text-gray-400">›</span>
        <span className="font-semibold text-gray-800">Spreadsheet 3</span>
      </div>

      {/* Right: Search + Bell + User */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <Search className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" />
        </div>

        {/* Bell */}
        <button title="Notifications">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/32?img=4"
            alt="John Doe"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <span className="text-sm text-gray-700">John Doe</span>
        </div>
      </div>
    </div>
  );
}
