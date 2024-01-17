import ElementsTab from "./components/ElementsTab";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <ElementsTab />
    </div>
  )
}
