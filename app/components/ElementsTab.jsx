import React from 'react'
import CommonElements from './CommonElements'
import DrawElements from './DrawElements'

function ElementsTab() {
  return (
    <div className='w-80 h-screen border-r pt-2 p-5'>
      <CommonElements />
      <DrawElements />
    </div>
  )
}

export default ElementsTab
