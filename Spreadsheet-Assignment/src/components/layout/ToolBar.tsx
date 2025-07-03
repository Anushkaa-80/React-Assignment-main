export default function ToolBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b w-full">
      <div className="flex gap-4 text-sm text-gray-600">
        <button onClick={() => console.log("Sort clicked")}>Sort</button>
        <button onClick={() => console.log("Filter clicked")}>Filter</button>
        <button onClick={() => console.log("Cell View clicked")}>Cell View</button>
      </div>
      <div className="flex gap-4 text-sm text-gray-600">
        <button onClick={() => console.log("Import clicked")}>Import</button>
        <button onClick={() => console.log("Export clicked")}>Export</button>
        <button onClick={() => console.log("Share clicked")}>Share</button>
        <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={() => console.log("New Action")}>+ New Action</button>
      </div>
    </div>
  );
}
