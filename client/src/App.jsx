import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/student/Home'
import Courseslist from './pages/student/Courseslist'
import Coursedetail from './pages/student/Coursedetail'
import Myenrollments from './pages/student/Myenrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import Addcourse from './pages/educator/Addcourse'
import Mycourses from './pages/educator/Mycourses'
import Studentenrolled from './pages/educator/Studentenrolled'
import Navbar from './components/student/Navbar'; 
import { AppContext } from './context/AppContext';
import "quill/dist/quill.snow.css";

const App = () => {
  const location = useLocation()
  const isEducatorRoute = location.pathname.startsWith('/educator')

  return (
    <div className='text-default min-h-screen'>
      {!isEducatorRoute && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<Courseslist />} />
        <Route path='/course-list/:input' element={<Courseslist />} />
        <Route path='/course/:id' element={<Coursedetail />} />
        <Route path='/my-enrollments' element={<Myenrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />

        <Route path='/educator' element={<Educator />}>
          <Route index element={<Dashboard />} />

          <Route path='add-course' element={<Addcourse />} />
          <Route path='my-courses' element={<Mycourses />} />
          <Route path='student-enrolled' element={<Studentenrolled />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
