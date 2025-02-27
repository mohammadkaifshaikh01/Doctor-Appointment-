import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookingConfirmPage from "./pages/BookingConfirmPage"
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Signup from "./pages/Signup";
import Service from "./pages/Service";
const App = () => {
  
  return (
    <div className="mx-4 sm:mx-[10%]">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/service" element={<Service />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/bookingConfirm" element={<BookingConfirmPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/my-profile" element={<MyProfile />} /> */}
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/appointment/:docId" element={<Appointments />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
