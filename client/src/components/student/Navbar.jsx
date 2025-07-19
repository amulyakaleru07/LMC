// import React from 'react'
// import { assets } from '../../assets/assets'
// import { Link, useLocation } from 'react-router-dom'
// import { useClerk, useUser, UserButton } from '@clerk/clerk-react'
// import { AppContext } from '../../context/AppContext'

// const Navbar = () => {
//   const {navigate}=useContext(AppContext)
//   const location = useLocation()
//   const isCourseListPage = location.pathname.includes('/course-list')
//   const { openSignIn } = useClerk()
//   const { user } = useUser()

//   // console.log('Current path:', location.pathname)

//   return (
//     <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-500'}`}>
//       {/* Logo */}
//       <img onClick={()=>navigate('/')}src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />

//       {/* Desktop Nav */}
//       <div className="hidden md:flex items-center gap-5 text-gray-800">
//         <div className="flex items-center gap-5">
//           {user && (
//             <>
//               <button className="hover:text-black">Become Educator</button>
//               <Link to="/my-enrollments" className="hover:text-black">My Enrollments</Link>
//             </>
//           )}
//         </div>
//         {user ? (
//           <UserButton />
//         ) : (
//           <button
//             onClick={() => openSignIn()}
//             className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
//           >
//             Create Account
//           </button>
//         )}
//       </div>

//       {/* Mobile Nav */}
//       <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-800">
//         <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
//           {user && (
//             <>
//               <button className="hover:text-black">Become Educator</button>
//               <Link to="/my-enrollments" className="hover:text-black">My Enrollments</Link>
//             </>
//           )}
//         </div>
//         {/* {user ? (
//           <UserButton />
//         ) : (
//           <button
//             onClick={() => openSignIn()}
//             className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
//           >
//             Create Account
//           </button>
//         )} */}
//         {
//           user ? <UserButton/>
//           : <button onClick={()=>openSignIn()}><img src={assets.user_icon} alt=""/></button>
//         }
//       </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const { navigate,isEducator} = useContext(AppContext);
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-500'}`}>
      {/* Logo */}
      <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-5 text-gray-800">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={()=>{navigate('/educator')}}>{isEducator ? 'Educator Dashboard':'Become Educator'}</button>
              <Link to="/my-enrollments" className="hover:text-black">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-800">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button onClick={()=>{navigate('/educator')}}>{isEducator ? 'Educator Dashboard':'Become Educator'}</button>
              <Link to="/my-enrollments" className="hover:text-black">My Enrollments</Link>
            </>
          )}
        </div>
        {
          user ? <UserButton />
          : <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="" /></button>
        }
      </div>
    </div>
  );
};

export default Navbar;
