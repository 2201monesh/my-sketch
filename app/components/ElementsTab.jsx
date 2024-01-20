import React from 'react'
import CommonElements from './CommonElements'
import DrawElements from './DrawElements'
import InputElements from './InputElements'

function ElementsTab() {
  return (
    <div className='w-80 h-screen border-r pt-2 p-5'>
      <CommonElements /> 
      <DrawElements />
      <InputElements />
    </div>
  )
}

export default ElementsTab
