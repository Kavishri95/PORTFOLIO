import React from "react";

const Contact = () => {
  return (
    <section id='contact'className="flex flex-col  bg-primary px-5 py-32 font-heroFont">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl  mb-5 px-4 pt-6 text-white">Contact</h1>
        <p className="py-5 ">If you want to discuss in detail,contact me</p>
        <p className="py-2 "><span className="font-bold  text-white">Email : </span>skavishri@gmail.com</p>
        <p className="py-2"><span className="font-bold  text-white">Github : </span>github.com/Kavishri95</p>
        <p className="py-2"><span className="font-bold  text-white">Linkedin : </span>linkedin/in/kavishrisampath</p>
        <p ><span className="font-bold  text-white">Phone : </span>+91-7598201005</p>
      </div>
    </section>
  );
};

export default Contact;
