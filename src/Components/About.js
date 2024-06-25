import React from "react";
import aboutimg from "../assets/images/about (3).png";
import { FaRegHandPointRight } from "react-icons/fa";

const About = () => {
  return (
    <section id='about' className="flex flex-col md:flex-row  bg-primary px-3" >
      <div className="md:w-1/2 p-4 m-3 ">
        <img  className="md:flex-row" src={aboutimg} alt="about image" />
      </div>
      <div className="md:w-1/2 flex justify-center font-heroFont">
        <div className="flex flex-col justify-center mb-2">
          <h1 className="text-4xl text-white px-8 border-b-4 border-[#794094] mb-5 pt-6">
            About me
          </h1>
          <p className="text-2xl py-2 px-4">
            Hi, My name is KAVISHRI.<br/> <br/>   I have 1 Year of experience in the field of Front-End Development.<br/>
            I am a certified REACT JS developer.Designed single web page applications using HTML, CSS, Javascript and ReactJS libraries.  Identified web based user interactions and developed highly responsive user interface via react components. Building reusable components and frontend libraries for future use. 
          </p>
          <div>
            <p className="text-2xl py-2 px-4">My skill sets are,</p>
            <ul className="text-2xl px-4">
              <li className="flex">
                <FaRegHandPointRight
                  size={15}
                  className="text-white mt-2 pr-1"
                />
                React JS
              </li>
              <li className="flex">
                <FaRegHandPointRight
                  size={15}
                  className="text-white  mt-2 pr-1"
                />
                Redux
              </li>
              <li className="flex">
                <FaRegHandPointRight
                  size={15}
                  className="text-white  mt-2 pr-1"
                />
                React Router
              </li>
              <li className="flex">
                <FaRegHandPointRight
                  size={15}
                  className="text-white  mt-2 pr-1"
                />
                JSX, ES6
              </li>
              <li className="flex">
                <FaRegHandPointRight
                  size={15}
                  className="text-white  mt-2 pr-1"
                />
                Responsive UI
              </li>
              <li className="flex">
                <FaRegHandPointRight
                  size={15}
                  className="text-white  mt-2 pr-1"
                />
                Bootstrap 5
              </li>
              <li className="flex">
                <FaRegHandPointRight
                  size={15}
                  className="text-white  mt-2 pr-1"
                />
                Javascript
              </li>
              <li className="flex">
                <FaRegHandPointRight
                  size={15}
                  className="text-white  mt-2 pr-1"
                />
                CSS
              </li>
              <li className="flex">
                <FaRegHandPointRight
                  size={15}
                  className="text-white  mt-2 pr-1"
                />
                Tailwind CSS
              </li>
              <li className="flex">
                <FaRegHandPointRight
                  size={15}
                  className="text-white  mt-2 pr-1"
                />
                HTML 5
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
