import React, { useContext, useEffect, useState } from 'react'
import Searchbar from '../../components/student/Searchbar'
import { AppContext } from '../../context/AppContext'
import { useParams, useNavigate } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer' 

const Courseslist = () => {
  const { allCourses } = useContext(AppContext)
  const { input } = useParams()
  const navigate = useNavigate()

  const [filteredCourses, setFilteredCourses] = useState([])

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()
      input
        ? setFilteredCourses(
            tempCourses.filter(item =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourses(tempCourses)
    }
  }, [allCourses, input])

  return (
    <div className='relative md:px-36 px-8 pt-20 text-left'>
      {/* Header + breadcrumb + searchbar */}
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4'>
        <div>
          <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
          <p className='text-gray-500 mt-2'>
            <span
              className='text-blue-600 cursor-pointer'
              onClick={() => navigate('/')}
            >
              Home
            </span>{' '}
            /<span> Course List</span>
          </p>
        </div>
        <div className='w-full md:w-auto'>
          <Searchbar data={input} />
        </div>
        {input && (
          <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600'>
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              alt="clear"
              className='cursor-pointer'
              onClick={() => navigate('/course-list')}
            />
          </div>
        )}
      </div>

      {/* Courses list */}
      <div className='flex flex-wrap gap-6 mt-10'>
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* ✅ Footer inside main JSX */}
      <Footer />
    </div>
  )
}

export default Courseslist
