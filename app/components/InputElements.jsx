"use client"

import React, { useState } from 'react'
import { useContext } from 'react';
import ShapeContext from '../../context/ShapeContext.js'

function InputElements() {

    const {text, setText} = useContext(ShapeContext);

    const [textBox, setTextBox] = useState(text);

    const handleTextChange = (event) => {
        setTextBox(event.target.value);
    }

    const addText = () => {
        setText(textBox);
        setTextBox('');
    }

  return (
    <div className='pt-4'>
      <h3>Input Elements</h3>
      <div className='flex flex-col items-start pt-2'>
        <input type="text" value={textBox} onChange={handleTextChange} className='p-1 mb-2 border-2 border-gray-300 rounded hover:border-gray-500' />
        <button onClick={addText} className='bg-blue-500 text-white p-1 rounded hover:bg-blue-400 cursor-pointer'>Add text</button>
      </div>
    </div>
  )
}

export default InputElements;
