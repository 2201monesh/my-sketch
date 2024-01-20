"use client"

import React from 'react'
import { useContext } from 'react';
import ShapeContext from '@/context/ShapeContext';
import { GoPencil } from "react-icons/go";
import { BsEraser } from "react-icons/bs";

function DrawElements() {

  const {drawPen, setDrawPen, eraser, setEraser} = useContext(ShapeContext);

  const handleDrawPen = () => {
    if(eraser){
      setEraser((prev) => !prev);
    }
    setDrawPen((prev) => !prev);
  }

  const handleEraser = () => {
    if(drawPen){
      setDrawPen((prev) => !prev);
    }
    setEraser((prev) => !prev);
  }

  return (
     <div className='pt-4'>
      <h3>Draw Elements</h3>
      <div className='flex pt-2'>
        <div onClick={handleDrawPen} className={`p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500 ${drawPen && 'text-blue-500'}`}>
            <span><GoPencil fontSize={25} /></span>
        </div>
        <div onClick={handleEraser} className={`p-2 bg-gray-100 w-12 mr-1 flex items-center justify-center cursor-pointer hover:text-blue-500 ${eraser && 'text-blue-500'}`}>
            <span><BsEraser fontSize={25} /></span>
        </div>
      </div>
    </div>
  )
}

export default DrawElements
