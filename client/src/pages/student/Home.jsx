import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import Courseslist from './Courseslist'
import Coursessection from '../../components/student/Coursessection'
import Testmonialsection from '../../components/student/Testmonialsection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y'>
        <Hero />
        <Companies/>
        <Coursessection/>
        <Testmonialsection/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Home