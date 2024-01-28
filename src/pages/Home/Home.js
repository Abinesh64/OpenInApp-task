import React from 'react';
import './Home.css'
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {

  return (
    <div className='home'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Home
