import React, { useState } from "react";
import TestimonialCarousel from "../Components/TestimonialCarousel";
import { useNavigate } from "react-router";
 



function Home() {

  
  const [formData, setFormData] = useState({
     name:"",
     phoneNumber:"",
     city: "",
     Age: "",
     Company: "",
     Complaints: "",
     previousPhsiotherapy: "", //

  });

  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault()
    console.log("submit")
    console.log(formData)
    if(formData.city === '' && formData.phoneNumber === '' && formData.Company === '' && formData.Age === '' && formData.Complaints === '' && formData.name === '') {
        setError("please fill all the details")
        return 
    }

    
    navigate(`/doctors/${formData.city}`)
  };

  

  return (
    <div className="w-full bg-slate-800">
      {/* hero section */}
      <div className="w-[90%] h-[40rem] overflow-hidden mx-auto  bg-cover bg-top custom-background mix-blend-multiply relative"></div>
      <div className="absolute top-36 left-20 w-96 ">
        <h2 className="text-lg font-semibold text-white">
          Book Free Appointment
        </h2>

        <form className="bg-slate-700 text-white flex flex-col  gap-2 px-4 py-6 text-[12px] rounded-lg shadow-sm shadow-[#00ACC1] ">
          <label htmlFor="name">Name:</label>
          <input onChange={handleInputChange} value={formData.name}
            type="text"
            name="name"
            id="name"
            className="bg-slate-400 p-2 outline-none rounded-sm"

          />
          <label htmlFor="phoneNumber">Phone number:</label>
              <input onChange={handleInputChange} value={formData.phoneNumber}
                type="Number"
                name="phoneNumber"
                id="phoneNumber"
                className="bg-slate-400 p-2 outline-none rounded-sm"
              />

          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              {" "}
              <label htmlFor="city">City:</label>
              <input onChange={handleInputChange} value={formData.city}
                type="text"
                name="city"
                id="city"
                placeholder="eg:bangalore,indore"
                className="bg-slate-400 p-2 outline-none rounded-sm"
              />
              
            </div>
            <div className="flex flex-col">
              <label htmlFor="Age">Age:</label>
              <input onChange={handleInputChange} value={formData.Age}
                type="number"
                name="Age"
                id="Age"
                className="bg-slate-400 p-2 w-36 outline-none rounded-sm"
              />
            </div>
          </div>
          <label htmlFor="Company">Company:</label>
          <input onChange={handleInputChange} value={formData.Company}
            type="text"
            name="Company"
            id="Company"
            className="bg-slate-400 p-2 outline-none rounded-sm"
          />
          <label htmlFor="Complaints">Cheif Complaints:</label>
          <input onChange={handleInputChange} value={formData.Complaints}
            type="text"
            name="Complaints"
            id="Complaints"
            className="bg-slate-400 p-2 outline-none rounded-sm"
          />
          {formData.Age < 40 ?"":<label htmlFor="previousPhysiotherapy">
            Any previous Experience with Physiotherapy{" "}
            <input onChange={handleInputChange} value={formData.previousPhsiotherapy}
              type="checkbox"
              name="previousPhysiotherapy"
              id="previousPhysiotherapy"
              className=" w-4"
            />
          </label>}

          <button className="p-2 bg-[#00ACC1] rounded-sm font-semibold text-lg" onClick={handleSubmit}>
            Find Doctors
          </button>
          <p className="text-[10px] text-yellow-400">{error}</p>
        </form>
      </div>
      {/* testimonial */}
     <div className="w-full bg-slate-900 ">
        <h1 className="text-2xl font-bold text-center text-gray-300 tracking-wider py-10">TESTIMONIALS</h1>
        <TestimonialCarousel/>

     </div>
    </div>
  );
}

export default Home;
