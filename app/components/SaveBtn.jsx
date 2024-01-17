import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

function SaveBtn() {
  return (
    <div>
      <button className='flex justify-center items-center bg-blue-500 p-1 pl-3 rounded text-white cursor-pointer hover:bg-blue-400'>Save <span><RiArrowDropDownLine fontSize={25} /></span></button>
    </div>
  )
}

export default SaveBtn;
