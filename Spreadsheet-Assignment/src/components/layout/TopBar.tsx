export default function TopBar() {
  return (
    <div className="w-full h-14 px-4 py-2 border-b flex justify-between items-center bg-white shadow-sm">
      {/* Left: Path with SVG Icon */}
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.75 0C18.5449 0 20 1.45507 20 3.25V12.75C20 14.5449 18.5449 16 16.75 16H3.25C1.45507 16 0 14.5449 0 12.75V3.25C0 1.45507 1.45507 0 3.25 0H16.75ZM3.25 1.5C2.2835 1.5 1.5 2.2835 1.5 3.25V12.75C1.5 13.7165 2.2835 14.5 3.25 14.5H12.5V1.5H3.25Z"
            fill="#618666"
          />
        </svg>

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
          <svg
            className="absolute left-2 top-1.5 text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.5 3C6.364 3 3 6.364 3 10.5C3 14.636 6.364 18 10.5 18C12.2368 18 13.8438 17.4156 15.125 16.4375L19.2812 20.5938L20.5938 19.2812L16.4375 15.125C17.4156 13.8438 18 12.2368 18 10.5C18 6.364 14.636 3 10.5 3ZM10.5 5C13.5376 5 16 7.46243 16 10.5C16 13.5376 13.5376 16 10.5 16C7.46243 16 5 13.5376 5 10.5C5 7.46243 7.46243 5 10.5 5Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* 🔔 Custom Bell SVG */}
        <button title="Notifications" className="w-10 h-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.99622C16.0499 1.99622 19.3567 5.19097 19.4958 9.24528L19.5 9.49622V13.5932L20.88 16.7492C20.949 16.9071 20.9847 17.0776 20.9847 17.25C20.9847 17.9404 20.425 18.5 19.7347 18.5L15 18.5015C15 20.1583 13.6568 21.5015 12 21.5015C10.4023 21.5015 9.09633 20.2526 9.00508 18.6778L8.99954 18.4992L4.27485 18.5C4.10351 18.5 3.93401 18.4648 3.77685 18.3965C3.14365 18.1215 2.8533 17.3852 3.12834 16.752L4.49999 13.5941V9.49612C4.50059 5.34132 7.85208 1.99622 12 1.99622ZM13.4995 18.4992L10.5 18.5015C10.5 19.3299 11.1716 20.0015 12 20.0015C12.7797 20.0015 13.4204 19.4066 13.4931 18.646L13.4995 18.4992ZM12 3.49622C8.67983 3.49622 6.00047 6.17048 5.99999 9.49622V13.9059L4.65601 17H19.3525L18 13.9068L18.0001 9.50908L17.9964 9.28388C17.8853 6.0504 15.2416 3.49622 12 3.49622Z" fill="#121212"/>
</svg>

        </button>

        {/* User Info */}
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
