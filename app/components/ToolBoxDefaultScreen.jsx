import React from 'react'
import Scenary from '../tools/Scenary'

function ToolBoxDefaultScreen() {
  return (
    <div>
      <div className='size'>
        <h3>Size</h3>
        <div className='flex justify-between pt-2'>
          <div className='flex'>
            <h3 className='pr-2 text-gray-500 hover:text-blue-600'>Width</h3>
            <h3>Option</h3>   {/* edit this to options tab */}
          </div>
          <div className='flex'>
            <h3 className='pr-2 text-gray-500 hover:text-blue-600'>Height</h3>
            <h3>Option</h3>   {/* edit this to options tab */}
          </div>
        </div>
      </div>
      <div className='color pt-2 bg-bl bg-'>
        <h3>Color</h3>
        <div className='flex pt-2'>
          <h3 className='pr-2 text-gray-500 hover:text-blue-600'>color</h3>
          <h3>color box</h3>
        </div>
      </div>
      <div className='matching pt-2'>
        <h3>Matching</h3>
         <Scenary num={1} col1="bg-blue-300" col2="bg-blue-500" col3="bg-blue-700" col4="bg-blue-900" />
         <Scenary num={2} col1="bg-red-300" col2="bg-red-500" col3="bg-red-700" col4="bg-red-900" />
         <Scenary num={3} col1="bg-lime-300" col2="bg-yellow-300" col3="bg-yellow-500" col4="bg-lime-500" />
         <Scenary num={4} col1="bg-teal-400" col2="bg-teal-700" col3="bg-emerald-700" col4="bg-emerald-950" />
         <Scenary num={5} col1="bg-pink-500" col2="bg-indigo-500" col3="bg-violet-500" col4="bg-purple-800" />
      </div>
    </div>
  )
}

export default ToolBoxDefaultScreen
