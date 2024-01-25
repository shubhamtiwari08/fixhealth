import React, { useState } from 'react'

function DoctorCard({data}) {

    const {specialty,name,Experience,Degree} = data

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md m-4">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:w-48"
          src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" // Add the actual image source or use a placeholder
          alt="Doctor"
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {specialty}
        </div>
        <h2 className="text-lg text-gray-800 font-semibold">{name}</h2>
        <p className="text-gray-600">Experience: {Experience} years</p>
        <p className="text-gray-600">Degree: {Degree}</p>
        <button className='bg-[#00ACC1] p-1 text-white rounded-md'>Book Now</button>
      </div>
    </div>
  </div>
  )
}

export default DoctorCard