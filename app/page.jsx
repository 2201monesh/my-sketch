import ElementsTab from "./components/ElementsTab";
import Sidebar from "./components/Sidebar";
import ToolBox from "./components/ToolBox";

export default function Home() {
  return (
    <div className="flex justify-between">
     <div className="flex">
      <Sidebar />
      <ElementsTab />
     </div>
     <div>
      <ToolBox />
     </div>
    </div>
  )
}
