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
import image from "../images/computer.jpg";

const imageAltText = "desktop with coding laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "NUMBER GUESSING GAME",
    description:
      "This C++ program implements a number guessing game where the user guesses a randomly generated number between 1 and 10. The program provides feedback on each guess, indicating if it's too high or too low, and congratulates the user upon a correct guess, displaying the number of attempts made.",
    url: "https://github.com/zain-ul-abideen-5036/CodSoft_task_01.git",
  },
  {
    title: "SIMPLE CALCULATOR",
    description:
      "This C++ program defines template functions for basic arithmetic operations (addition, subtraction, multiplication, and division) and prompts the user to input two values and select an operation. It performs the chosen operation using the templates and displays the result, handling division by zero.",
    url: "https://github.com/zain-ul-abideen-5036/CodSoft_task_02.git",
  },
  {
    title: "STUDENT GRADING SYSTEM",
    description:
      "This C++ program allows users to input student names and corresponding grades. It calculates the average grade, identifies the highest and lowest grades, and displays a summary of the student grades. The program uses an array to store student names and grades, and it handles input termination when the user enters 'b'. The grades are processed numerically (e.g., A = 90, B = 80), and the results are presented in a clear summary at the end.",
    url: "https://github.com/zain-ul-abideen-5036/CodSoft_task_03.git",
  },
  {
    title: "WORD COUNT",
    description:
      "This C++ program calculates and displays the total count of words in a specified file. It prompts the user to enter the name of the file, reads the file, and counts the number of words using a simple loop. The program then outputs the total word count for the specified file. If there is an error in opening the file, it displays an appropriate error message.",
    url: "https://github.com/zain-ul-abideen-5036/CodSoft_task_04.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
