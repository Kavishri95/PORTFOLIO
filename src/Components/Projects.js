import React from "react";

const Projects = () => {
  return (
    <section id='projects' className="py-5 px-5 bg-primary font-heroFont">
      <h1 className="text-4xl px-8 mb-5 pt-6 ">PROJECT DETAILS</h1>

      <>
        <h2 className="text-white">PROJECT NAME : Intern Portal</h2>
        <br />
        <h3>DESIGNATION : Junior Front End Developer | Wipro Ltd</h3>
        <br />
        <h4>Tech Stack: Reactjs</h4>
        <p>
          {" "}
          <br />
          Developed the UI and did API integration of a reactjs based website
          from scratch.
          <br /> The website is mainly a digital platform for employee self-
          service (ESS) which simplifies user related task that was handled by
          the resource team. <br /> Implimenting the JSX, components, state,
          props and integrated backend API’s to make the website dynamic. <br />
          This website provides a great user experience.{" "}
        </p>
        <br />
        <br />

        <h2>
          The following projects are developed for practice with the technolgies
          which I have mentioned earlier.
        </h2>
        <br />
        <h2 className="text-white">
          PROJECT NAME : MART-Ecommerce website | Achiever's It Academy
        </h2>
        <br />
        <h4>Tech Stack: Reactjs, Redux, ES6, Bootstrap 5</h4>
        <p>
          <br />
          Developed a responsive design in the E-commerce website by
          implementing the advanced concepts of the React JS technology such as
          states, props, jsx, redux, hooks, router etc,.
          <br />
          In ths website I mainly concentrated on how to use the ROUTER DOM for
          connecting the pages followed by creating the CARTSLICE by
          implementing the concepts of REDUCERS FOR adding and deleting the item
          in the cart page.
          <br />
          Here i learned how to import the react-icon whenever needed.This
          project made a major role in my learing path for understanding the
          React js concepts in detail.
        </p>

        <br />
        <br />
        <h2 className="text-white">PROJECT NAME : Portfolio</h2>
        <br />
        <h4>Tech Stack: Reactjs, Bootstrap 5,Tailwind CSS</h4>
        <p>
          <br />
          Created a colourful PORTFOLIO by implementing the TAILWIND CSS at the
          intermediate level. This project contains the the about section,
          coursework ,my skillset, contact details etc,. This website clearly
          shows my skillset of React js which i learned in the duration of 6
          months.This website provides the clear information about myself in the
          responsive manner.
        </p>
      </>
    </section>
  );
};

export default Projects;
