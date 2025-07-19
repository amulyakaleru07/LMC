import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar'; // ✅ You forgot this!
import Footer from '../../components/student/Footer';

const Educator = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Outlet /> {/* ✅ Correct way */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Educator;
