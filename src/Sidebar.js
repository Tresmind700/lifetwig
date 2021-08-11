import React from 'react'
import  "./Sidebar.css"
import SidebarRow from './SidebarRow'



function Sidebar() {

    return (
      
      <div className='sidebar'>
        <SidebarRow src='/images/Group 29.png' title='Simmon Bradley' />

        <SidebarRow title='Home Feed' />

        <SidebarRow title='Photo' />

        <SidebarRow title='Feed' />

        <SidebarRow title='Chat' />

        <SidebarRow title='Settings' />
      </div>
    );
}

export default Sidebar
