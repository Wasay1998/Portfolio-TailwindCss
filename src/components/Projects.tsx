import React from "react";
import Heading from "./Heading";
import Card from "./Card";


const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A React & Typescript based app for managing and organization your tasks efficiently.",
    img: "/project_01.jpg",
    tags: ["React", "Node", "CSS", "Typescript"],
  },

  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.js & Typescript powered website to tract time with an interactive countdown feature.",
    img: "/project_02.jpg",
    tags: ["Next.js", "Node", "CSS", "Typescript"],
  },

  {
    id: 2,
    title: "Weather Widget",
    desc: "A Next.js & Typescript based tool for fetching and displaying real-time weather data.",
    img: "/project_03.jpg",
    tags: ["React", "Node", "CSS", "Typescript"],
  },

  {
    id: 3,
    title: "Currency Converter Project",
    desc: "A simple HTML and Typescript powered toor for converting currencies with real-time rates.",
    img: "/project_04.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },

  {
    id: 4,
    title: "Static Interactive Resume",
    desc: "A Typescript based interactive resume builtwith HTML and CSS, allowing users to showcase their skills dynamically.",
    img: "/project_05.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },

  {
    id: 5,
    title: "Simple Calculator Project",
    desc: "A basic HTML CSS and Typescript calculator for perfoming essential arithmetic operations.",
    img: "/project_06.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const project = () => {
  return (
    <div id="projects" className="container pt-32">
        <Heading title="My Projects" />
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            decs={el.desc}
            img={el.img}
            tags={el.tags}

            />))}
        </div>
    </div>
  )
}

export default project;
