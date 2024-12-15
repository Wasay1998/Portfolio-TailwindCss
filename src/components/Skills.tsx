import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl">
            Skills & Technologies I Specialize In
          </h2>
          <p className="text-gray-500 pt-2">
            I have a strong foundation in web development, specializing in
            front-end technologies such as HTML, CSS, and JavaScript. My
            expertise extends to using modern frameworks like React and Next.js
            to build dynamic, responsive, and user-friendly applications. I am
            also proficient in Tailwind CSS, which allows me to create
            efficient, scalable, and visually appealing designs.
            <br />
            With a deep passion for continuous learning, I constantly explore
            the latest technologies to enhance my skills and stay at the
            forefront of the industry. This enables me to contribute effectively
            to projects, delivering high-quality work and exceptional user
            experiences.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>

            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
