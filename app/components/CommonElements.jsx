"use client"

import React from 'react'
import { useContext } from 'react';
// import ShapeContext from '@/context/ShapeContext';
import ShapeContext from '../../context/ShapeContext.js'
import { IoTextOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import { RiPentagonLine } from "react-icons/ri";

function CommonElements() {

  const {setRect, setCircle, setTriangle, setPentagon} = useContext(ShapeContext);

  const handleRectClick = () => {
    setRect((prev) => prev + 1);
  }

  const handleCircleClick = () => {
    setCircle((prev) => prev + 1)
  }

  const handleTriangleClick = () => {
    setTriangle((prev) => prev + 1)
  }

  const handlePentagonClick = () => {
    setPentagon((prev) => prev + 1)
  }


  return (
    <div>
      <h3>Common Elements</h3>
      <div className='flex pt-2'>
        {/* <div className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><IoTextOutline fontSize={25} /></span>
        </div> */}
        <div onClick={handleRectClick} className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><FaRegSquare fontSize={25} /></span>
        </div>
        <div onClick={handleCircleClick} className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><FaRegCircle fontSize={25} /></span>
        </div>
        <div onClick={handleTriangleClick} className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><FiTriangle fontSize={25} /></span>
        </div>
        <div onClick={handlePentagonClick} className='p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500'>
            <span><RiPentagonLine fontSize={25} /></span>
        </div>
      </div>
    </div>
  )
}

export default CommonElements
