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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.45832 12C8.45832 12.8054 7.80541 13.4583 6.99999 13.4583C6.19457 13.4583 5.54166 12.8054 5.54166 12C5.54166 11.1946 6.19457 10.5417 6.99999 10.5417C7.80541 10.5417 8.45832 11.1946 8.45832 12ZM13.4583 12C13.4583 12.8054 12.8054 13.4583 12 13.4583C11.1946 13.4583 10.5417 12.8054 10.5417 12C10.5417 11.1946 11.1946 10.5417 12 10.5417C12.8054 10.5417 13.4583 11.1946 13.4583 12ZM17 13.4583C17.8054 13.4583 18.4583 12.8054 18.4583 12C18.4583 11.1946 17.8054 10.5417 17 10.5417C16.1946 10.5417 15.5417 11.1946 15.5417 12C15.5417 12.8054 16.1946 13.4583 17 13.4583Z" fill="#AFAFAF"/>
</svg>
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
       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="8" fill="white"/>
<path d="M20 9.99622C24.0499 9.99622 27.3567 13.191 27.4958 17.2453L27.5 17.4962V21.5932L28.88 24.7492C28.949 24.9071 28.9847 25.0776 28.9847 25.25C28.9847 25.9404 28.425 26.5 27.7347 26.5L23 26.5015C23 28.1583 21.6568 29.5015 20 29.5015C18.4023 29.5015 17.0963 28.2526 17.0051 26.6778L16.9995 26.4992L12.2749 26.5C12.1035 26.5 11.934 26.4648 11.7769 26.3965C11.1436 26.1215 10.8533 25.3852 11.1283 24.752L12.5 21.5941V17.4961C12.5006 13.3413 15.8521 9.99622 20 9.99622ZM21.4995 26.4992L18.5 26.5015C18.5 27.3299 19.1716 28.0015 20 28.0015C20.7797 28.0015 21.4204 27.4066 21.4931 26.646L21.4995 26.4992ZM20 11.4962C16.6798 11.4962 14.0005 14.1705 14 17.4962V21.9059L12.656 25H27.3525L26 21.9068L26.0001 17.5091L25.9964 17.2839C25.8853 14.0504 23.2416 11.4962 20 11.4962Z" fill="#121212"/>
<rect x="21" y="1" width="18" height="18" rx="9" fill="#4B6A4F"/>
<rect x="21" y="1" width="18" height="18" rx="9" stroke="white" stroke-width="2"/>
<path d="M27.7 13V12.22C28.3333 11.7667 28.8633 11.3667 29.29 11.02C29.7233 10.6733 30.07 10.3533 30.33 10.06C30.59 9.76667 30.7767 9.49 30.89 9.23C31.01 8.96333 31.07 8.69333 31.07 8.42C31.07 8.06667 30.96 7.78 30.74 7.56C30.52 7.34 30.2133 7.23 29.82 7.23C29.4067 7.23 29.0767 7.37 28.83 7.65C28.59 7.92333 28.4533 8.3 28.42 8.78L27.49 8.35C27.5367 7.93 27.66 7.56667 27.86 7.26C28.06 6.95333 28.33 6.71667 28.67 6.55C29.0167 6.38333 29.4167 6.3 29.87 6.3C30.2433 6.3 30.57 6.35333 30.85 6.46C31.1367 6.56667 31.3767 6.71667 31.57 6.91C31.7633 7.09667 31.91 7.31667 32.01 7.57C32.1167 7.82333 32.17 8.09333 32.17 8.38C32.17 8.8 32.0667 9.20667 31.86 9.6C31.6533 9.98667 31.3267 10.3833 30.88 10.79C30.4333 11.1967 29.8467 11.6333 29.12 12.1V12.12C29.2 12.1067 29.31 12.1 29.45 12.1C29.59 12.0933 29.73 12.09 29.87 12.09C30.01 12.0833 30.1233 12.08 30.21 12.08H32.29V13H27.7Z" fill="#F6F6F6"/>
</svg>



        </button>

        {/* User Info */}
        <div className="flex items-center gap-2">
         <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmosLNK6eZsFlzbb51QtgxOXgHBW0SsLFUqQ&s"
            alt="John Doe"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <span className="text-sm text-gray-700">John Doe</span>
        </div>
      </div>
    </div>
  );
}
