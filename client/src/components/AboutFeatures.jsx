import React from 'react'

function AboutFeature({image, title, description}) {
    const Icon=image;

  return (
     <div className='flex flex-col items-center justify-center gap-3 rounded-2xl shadow-3xl shadow-gray-900 w-[45%] md:w-[30%] shadow-2xl shadow-gray-900 text-white p-5 bg-[#006A71]'>
             <Icon size={33} className="text-[#E3E3E3] text-center" />
              <h1 className='text-[#E3E3E3] text-center text-3xl font-bold'>{title}</h1>
              <p className='text-[#E3E3E3] text-center '>{description}</p>
            </div>
  )
}

export default AboutFeature;