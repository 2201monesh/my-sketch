import React from 'react'

function Scenary({num, col1, col2, col3, col4}) {
  return (
    <div className='pt-2 flex items-center'>
      <div className='pr-3 w-24'><h3 className='text-gray-500 hover:text-blue-600'>Scenary {num} </h3></div>
      <div className='flex'>
       <div className={`${col1} w-8 h-8 mr-1`}></div>
       <div className={`${col2} w-8 h-8 mr-1`}></div>
       <div className={`${col3} w-8 h-8 mr-1`}></div>
       <div className={`${col4} w-8 h-8 mr-1`}></div>
      </div>
    </div>
  )
}

export default Scenary
