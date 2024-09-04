/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/adrien-olichon-RCAhiGJsUUE-unsplash.jpg";




/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AutoMax-Hit🎉",
    description:
      "AutoMax-Hit is a Web Application Based on Django Framework this a car listing Application. ",
    url: "https://github.com/HiteshSharma04/Automax_hit",
  },
  {
    title: "React-Home-Page",
    description:
      "React-Home_page is a Frontend Website that is Based on original React Page made with the help of React Js Framework.",
    url: "https://github.com/HiteshSharma04/react-home-page-",
  },
  {
    title: "MyResume",
    description:
      "This is My Resume With Complete Information About Me and My Projects",
    url: "https://github.com/HiteshSharma04/Resume",
  },
  {
    title: "GitHub",
    description:
      "This is My GitHub Link where You can Check My Personal Projects That I have Made Through All My Learnigs.",
    url: "https://github.com/HiteshSharma04",
  },
  {
    title: "Certifications",
    description:
      "These are My Certificates That I Have Earned Through All My Learnings.",
    url: "https://github.com/HiteshSharma04/Certificates",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" >
      <h2 style={{ textAlign: "center",color:"black",fontSize:"50px" }}><b><u>PORTFOLIO</u></b></h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a style={{color:"Green"}} href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p style={{fontWeight:"500"}} className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;