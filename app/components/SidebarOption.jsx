import React from 'react'

function SidebarOption({image, text}) {
  return (
    <div className='flex flex-col justify-center items-center p-3 cursor-pointer'>
      <span>{image}</span>
      <h3 className='text-xs pt-1'>{text}</h3>
    </div>
  )
}

export default SidebarOption
