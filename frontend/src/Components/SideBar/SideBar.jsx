import React from 'react';
import Search from './Search';
import LogOut from './LogOut';
import Conversations from './Conversations';

const SideBar = () => {
  return (
    <div className='w-1/3 flex flex-col border-r-2 border-gray-500 px-3 py-4'>
      <Search />
        <Conversations />
      <LogOut />
    </div>
  )
}

export default SideBar
