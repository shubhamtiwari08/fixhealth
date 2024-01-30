import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DoctorCard from "../Components/DoctorCard";
import LoadingSpinner from "../Components/LoadingSpinner";

function DoctosList() {
  const { city } = useParams();

  const [doctorList, setDoctorList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDoctorList = async () => {
    try {
      const data = await fetch(
        `https://fixhealth-p59u.onrender.com/doctors/${city}`
      );

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
              <DoctorCard data={doctor} />
            ))}
          </div>
        </div>
      )}
      
    </div>
  );
}

export default DoctosList;
