import SaveBtn from "./SaveBtn";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 shadow">
      <div className="flex">
        <h3 className="mr-7 text-blue-600 cursor-pointer">My-Sketch</h3>
        <h3 className="cursor-pointer hover:text-gray-500">Insert images/files</h3>
      </div>
      <div className="flex justify-center items-center">
        <h3 className="mr-7 cursor-pointer hover:text-gray-500">Preview</h3>
        <SaveBtn />
      </div>
    </nav>
  )
}

export default Navbar;

