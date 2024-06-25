import React from "react";
import workimg from "../assets/images/work1.png";
import { LiaCertificateSolid } from "react-icons/lia";

const CourseWork = () => {
  return (
    <section id='coursework' className="flex flex-col md:flex-row py-15 px-10 justify-center bg-secondary font-heroFont">
      <div className="md:w-1/2 flex flex-col py-20 ">
        <span className="text-4xl font-bold">FRONT END DEVELOPMENT COURSE <LiaCertificateSolid className="py-1 bg-primary text-white"/></span>
        <br />
       <span className="text-2xl  border-b-4 border-[#794094] w-[450px]">ACHIEVER'S IT ACADEMY, BANGALORE</span> 
        <br />
        DECEMBER 2023 TO MAY 2024
      </div>
      <div className="md:w-1/3">
        <img src={workimg} />
      </div>
    </section>
  );
};

export default CourseWork;
