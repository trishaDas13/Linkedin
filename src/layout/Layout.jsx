import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/common/topbar/Topbar';


const Layout = () => {
  return (
    <div>
        <Topbar />
        <Outlet/>
    </div>
  )
}

export default Layout