import React from 'react'
import SidebarOption from './SidebarOption'
import { IoIosImages } from "react-icons/io";
import { FaLeaf } from "react-icons/fa";

function Sidebar() {
  return (
    <div className='w-20 h-screen border-r pt-2'>
      <SidebarOption image={<IoIosImages fontSize={25} />} text="Elements" />
      {/* <SidebarOption image={<FaLeaf fontSize={25} />} text="Cartoons" /> */}
    </div>
  )
}

export default Sidebar
