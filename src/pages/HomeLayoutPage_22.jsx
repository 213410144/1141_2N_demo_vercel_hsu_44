import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar_22 from '../components/Navbar_22';

const HomeLayoutPage_22 = () => {
  return (
    <>
      <Navbar_22 />
      <Outlet />
    </>
  );
};

export default HomeLayoutPage_22;
