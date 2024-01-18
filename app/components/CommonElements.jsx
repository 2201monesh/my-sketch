import React from 'react'
import { IoTextOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import { RiPentagonLine } from "react-icons/ri";

function CommonElements() {
  return (
    <div>
      <h3>Common Elements</h3>
      <div className='flex pt-2'>
        <div className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><IoTextOutline fontSize={25} /></span>
        </div>
        <div className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><FaRegSquare fontSize={25} /></span>
        </div>
        <div className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><FaRegCircle fontSize={25} /></span>
        </div>
        <div className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><FiTriangle fontSize={25} /></span>
        </div>
        <div className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><RiPentagonLine fontSize={25} /></span>
        </div>
      </div>
    </div>
  )
}

export default CommonElements
