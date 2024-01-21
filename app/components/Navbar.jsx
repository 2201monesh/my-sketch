"use client"
import SaveBtn from "./SaveBtn";
import { useContext } from "react";
// import ShapeContext from "@/context/ShapeContext";
import ShapeContext from '../../context/ShapeContext.js'

function Navbar() {

  const {setImage} = useContext(ShapeContext);

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  }

  return (
    <nav className="flex justify-between items-center p-2 shadow sticky">
      <div className="flex">
        <h3 className="mr-7 text-blue-600 cursor-pointer">My-Sketch</h3>
        {/* <h3 className="cursor-pointer hover:text-gray-500">Insert images/files</h3> */}
        <input type="file" accept="image/*" id="fileInput" style={{display: 'none'}} onChange={handleImageUpload} />
        <label htmlFor="fileInput" className="cursor-pointer hover:text-gray-500">Insert images/files</label>
      </div>
      {/* <div className="flex justify-center items-center">
        <h3 className="mr-7 cursor-pointer hover:text-gray-500">Preview</h3>
        <SaveBtn />
      </div> */}
    </nav>
  )
}

export default Navbar;

