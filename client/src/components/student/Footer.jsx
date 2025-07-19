
import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 px-4 md:px-36 w-full mt-10'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 md:gap-32 py-10 border-b border-white/30'>
          
          {/* Logo and Text */}
          <div className='flex flex-col md:items-start items-center w-full md:w-1/3'>
            <img src={assets.logo} alt="logo" className="w-28 md:w-36 " />
            <p className='mt-6 text-center md:text-left text-sm text-white/80'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          {/* Company Links */}
          <div className='flex flex-col md:items-start items-center w-full md:w-1/3'>
            <h2 className='font-semibold text-white mb-5'>Company</h2>
            <ul className='flex md:flex-col flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-white/80'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className='hidden md:flex flex-col items-start w-full md:w-1/3'>
            <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
            <p className='text-sm text-white/60 leading-relaxed'>
              The latest news, articles and resources, sent to your inbox weekly
            </p>
            <div className='flex items-center gap-2 pt-4 text-white'>
              <input type="email" placeholder='Enter your email'
              className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder=gray-500
              outline-none w-64 h-9 rounded px-2 text-sm'/>
              <button className='bg-blue-600 w-24 h-9 text-white rounded'>Subcribe</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <p className='py-4 text-center text-xs md:text-sm text-white/50 tracking-wide'>
          Copyright 2025 @ GreatStack All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
