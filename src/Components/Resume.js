import React from "react";
import resumeimg from "../assets/images/resume.png.png";

const Resume = () => {
  return (
    <section id='resume' className="flex flex-col md:flex-row  bg-secondary px-3">
         <h1 className="text-4xl font-heroFont mb-5 px-4 pt-6"> Resume</h1>
      <div className=" flex justify-center md:justify-end md:w-1/2 p-4 m-3 ">
        <img  className=" w-[300px]" src={resumeimg} alt="about image" />
      </div>

      <div className="md:w-1/2 flex justify-center font-heroFont">
        <div className="flex flex-col justify-center mb-2">
         
          <p className="text-2xl py-2 px-4">You can view my resume <a  className='btn hover:text-white'href='#'>DOWNLOAD</a></p>
         
        </div>
      </div>
    </section>
  )
}

export default Resume;