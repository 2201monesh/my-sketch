import React from 'react'
import { GoPencil } from "react-icons/go";
import { BsEraser } from "react-icons/bs";

function DrawElements() {
  return (
     <div className='pt-4'>
      <h3>Draw Elements</h3>
      <div className='flex pt-2'>
        <div className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><GoPencil fontSize={25} /></span>
        </div>
        <div className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><BsEraser fontSize={25} /></span>
        </div>
      </div>
    </div>
  )
}

export default DrawElements
