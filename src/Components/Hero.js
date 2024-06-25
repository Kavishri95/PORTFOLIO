import React from "react";
import heroimg from "../assets/images/hero.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-black text-6xl font-heroFont">
          Hi ,<br />I am <span>KAVISHRI S</span>
          <p className="text-2xl">I am a Front End Developer.<br/><br/>
          <span>Experience :</span> Project Engineer-Frontend<br/>
          <span>Company    :</span> WIPRO TECHNOLOGIES Limited, Bangalore<br/>
          <span>Period     :</span> October 2017- November 2018 </p>
        </h1>

        <div className="flex py-10 m-2 ">
          <a href="#" className="pr-10  hover:text-white">
            <FaLinkedin size={40} />
          </a>
          <a href="#" className="pr-10  hover:text-white">
            <FaGithub size={40} />
          </a>
          <a href="#" className="pr-10  hover:text-white">
            <IoMail size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3 " src={heroimg} alt="hero image" />
    </section>
  );
};

export default Hero;
