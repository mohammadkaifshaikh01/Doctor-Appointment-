import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctor from "../components/RelatedDoctor";

const Appointments = () => {
  const navigate = useNavigate();
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [appointmentTime, setAppointmentTime] = useState("");
 
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailable = () => {
    const dummyAppointments = [
      ["10:00 AM", "10:30 AM", "11:00 AM"],
      ["1:00 PM", "1:30 PM", "2:00 PM"],
      ["3:00 PM", "3:30 PM", "4:00 PM"],
      ["5:00 PM", "5:30 PM", "6:00 PM"],
      ["7:00 PM", "7:30 PM", "8:00 PM"],
      ["9:00 AM", "9:30 AM", "10:00 AM"],
      ["11:00 AM", "11:30 AM", "12:00 PM"],
    ];
    setAppointments(dummyAppointments);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  useEffect(() => {
    getAvailable();
  }, [docInfo]);

  

  return (
    docInfo && (
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img className="bg-orange-500 w-full sm:max-w-72 rounded-2xl" src={docInfo.image} alt="" />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-gray-100 mx-2 sm:mx-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-blue-900">
              {docInfo.name} <img className="w-4" src={assets.verified_icon} alt="verified" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-700">
              <p>{docInfo.specialization} - {docInfo.degree}</p>
              <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
            </div>
            <p className="text-blue-800 font-medium mt-4">About:</p>
            <p className="text-black-400 font-medium">{docInfo.about}</p>
            <p className="text-orange-400 font-medium mt-4">
              Appointment Fee: {currencySymbol} {docInfo.fees}
            </p>
          </div>
        </div>

        <div className="mt-6 font-medium text-gray-700">
          <p className="text-lg font-semibold">Booking Slots</p>
          <div className="flex gap-4 items-center w-full overflow-x-scroll mt-4">
            {appointments.length > 0 &&
              appointments.map((_, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-4 px-6 min-w-16 rounded-lg cursor-pointer transition-all ${
                    slotIndex === index ? "bg-orange-500 text-white" : "border border-gray-300"
                  }`}
                  key={index}
                >
                  <p>{daysOfWeek[index]}</p>
                  <p>{index + 1}</p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {appointments.length > 0 &&
              appointments[slotIndex].map((time, index) => (
                <p
                  onClick={() => setAppointmentTime(time)}
                  className={`text-sm font-medium flex-shrink-0 px-6 py-3 rounded-md cursor-pointer transition-all ${
                    time === appointmentTime ? "bg-orange-500 text-white" : "border border-gray-300"
                  }`}
                  key={index}
                >
                  {time}
                </p>
              ))}
          </div>
        </div>

        <div className="flex flex-col items-left justify-center mt-10">
          <div className="w-full max-w-md bg-white rounded-lg border p-6">
            <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">Book Your Appointment</h2>
            <form className="flex flex-col">
            
              <button
                type="submit"
                onClick={()=>navigate("/service")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-md mt-4 hover:from-orange-600 hover:to-red-600 transition duration-200"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>

        <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointments;
