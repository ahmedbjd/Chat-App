import React from 'react'
import SideBar from '../Components/SideBar/SideBar';
import MessagesContainer from '../Components/Messages/MessagesContainer';

const Home = () => {
  return (
    <main className='flex w-[900px] max-md:w-[95%] h-[600px] overflow-hidden mx-4 hover:cursor-pointer bg-gray-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
        <SideBar />
        <MessagesContainer />
    </main>
  )
}

export default Home
