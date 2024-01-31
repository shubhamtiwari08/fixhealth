import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import DoctorCard from "../Components/DoctorCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import SlotsModal from "../Components/SlotsModal";

function DoctosList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const city = queryParams.get('city');

  
  const [doctorList, setDoctorList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookModal,setBookModal] = useState(true);
  const [isOpen,setOpen] = useState(false);


  const onClose = () =>{
    setOpen(!isOpen)
  }

  
 
// const formatDate = (date) => {
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}-${month}-${year}`;
//   };
  
  const generateDates = () => {
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(today.getMonth() + 1);
  
    const dates = [];
    let currentDate = new Date(today);
  
    while (currentDate <= nextMonth) {
      const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
      dates.push(formattedDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dates;
  };
  

  const appointmentDates = generateDates()
  


  const getDoctorList = async () => {
    try {
      const data = await fetch(
        `https://fixhealth-p59u.onrender.com/doctors/${city}`
      );

      if(data){
        setLoading(false)
      }
      const list = await data.json();

      setDoctorList(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorList();
  }, [city]);

  return (
    <div className="h-screen bg-slate-800">
         {loading ? <LoadingSpinner/> :  doctorList.length === 0 ? (
        <div className="px-20 flex flex-col items-start text-white">
          <h1>No doctors in your city</h1>
        </div>
      ) : (
        <div className="px-20 flex flex-col items-start">
          <h1 className="text-xl text-gray-200">Doctos in {city}:</h1>{" "}
          <div className="flex flex-wrap gap-2">
            {doctorList.map((doctor) => (
              <DoctorCard data={doctor} onClose={onClose}  />
            ))}
          </div>
        </div>
      )}
      {bookModal && <SlotsModal isOpen={isOpen} onClose={onClose} availableDates={appointmentDates}/>}
      
    </div>
  );
}

export default DoctosList;
