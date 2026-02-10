import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Navbar/Footer';

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
