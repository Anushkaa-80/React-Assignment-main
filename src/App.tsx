import ToolBar from "./components/layout/ToolBar";
import TopBar from "./components/layout/TopBar";
import SpreadsheetTable from "./components/table/SpreadsheetTable";
import BottomTabs from "./components/layout/BottomTabs";
import "./App.css"

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-white">
      <TopBar />
      <ToolBar />
      <div className="flex-1 overflow-auto px-4">
        <SpreadsheetTable />
      </div>
      <BottomTabs />
    </div>
  );
}

export default App;
