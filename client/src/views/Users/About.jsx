import React from 'react'
import Button from '../../components/Button';
import { useNavigate } from 'react-router';
import Aboutimg from "../../assets/aboutimg.jpg";
import AboutFeatures from "../../components/AboutFeatures.jsx"
import { FEATURES } from '../../data/AboutData.js';
import Navbar from '../../components/UserNavbar.jsx';
import Footer from '../../components/Footer.jsx';
function About() {
  const navigate = useNavigate();
  return (
    <div className='bg-[#F2EFE7] min-h-screen pt-16 p-[0.1px] box-border'>
     <div className="relative bg-cover mb-4 bg-[#F2EFE7] bg-center filter bg-blend-multiply bg-opacity-80 pt-8" style={{ backgroundImage: `url(https://via.placeholder.com/1920x400?text=About+MoveZone)` }}>
      <Navbar />
      <div className='flex items-center mt-[100px] flex-col gap-7 md:px-10 py-15 justify-center p-5 text-2xl text-white text-center' >
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-[#006A71]'>About MoveZone</h1>
        <p className='text-base md:text-lg lg:text-xl text-black mb-5 md:w-[60%] w-[90%]'>Your ultimate destination for seamless movie ticket booking. We bring the magic of cinema right to your fingertips.</p>
      </div></div>
      <div className='flex flex-wrap items-center justify-center md:flex-nowrap w-full mt-10 gap-5 p-3'>
        {
          FEATURES.map((item, index) => {
            return (
              <AboutFeatures {...item} key={index} />
            )
          })
        }
      </div>

     <div className='w-full p-5'>
       <div className='flex flex-col md:flex-row my-10 rounded-2xl shadow-2xl bg-[#006A71] w-full items-center justify-center shadow-gray-900 p-5 gap-5'>
        <div className='flex flex-col gap-5 items-start md:pl-5 text-white justify-start w-full md:w-1/2 '>
          <h1 className='text-2xl md:text-3xl font-bold'> Our Mission</h1>
          <p className='text-sm md:text-base text-[#D2E8E7]'> At MoveZone, we believe that everyone deserves easy access to the magic of movies. Our mission is to revolutionize the way you experience cinema by providing a seamless, intuitive, and delightful ticket booking experience.</p>
          <p className='text-sm md:text-base text-[#D2E8E7]'>Whether you're planning a date night, a family outing, or a solo adventure into the world of film, MoveZone is here to make your experience unforgettable from the moment you book to the final credits.</p>
          <Button title={"Start Booking"} variant='tertiary' size='large' onClick={() => navigate("/movies")} />
        </div>
        <div className='md:w-1/2 w-full py-5 flex items-center justify-center'>
          <img src={Aboutimg} alt="Mission Image" className='rounded-2xl w-full max-w-[500px] object-cover shadow-xl border border-white/20' />
        </div>
      </div>
     </div>
      <div className='my-15 mx-5 flex flex-col gap-6 text-2xl shadow-2xl shadow-gray-900 bg-[#48A6A7] items-center justify-center rounded-2xl p-10 text-white'>
        <h1 className='text-xl md:text-2xl lg:text-3xl text-center text-[#F2EFE7] font-bold'>Ready for Movie Magic?</h1>
        <p className='text-base md:text-lg lg:text-xl text-[#D2E8E7] md:w-[60%] text-center'>Join millions of movie lovers who trust MoveZone for their cinema experience. Start exploring now!</p>
        <Button title="Browse Movies" variant='tertiary' size='large' onClick={() => navigate("/movies")} />
      </div>
      <Footer />
    </div>
  )
}

export default About;