import React from 'react';
import SingleProject from './SingleProject';

const projects = [
  {
    name: "Easy Workout Planner",
    type: "Android App",
    status: "Completed",
    alignment: "right",
    description: "WGU Capstone project",
    image: "/images/dumbbell.png",
    link: "#"
  },
  {
    name: "Bakery Website",
    type: "Website",
    status: "Work in progress",
    alignment: "left",
    description: "Client website",
    image: "/images/muffin.png",
    link: "#"
  },
  {
    name: "Vacation Planning App",
    type: "Android App",
    status: "Completed",
    alignment: "right",
    description: "WGU Android project",
    image: "/images/plane.png",
    link: "#"
  }
//   {
//     name: "Test",
//     type: "Website",
//     status: "Work in progress",
//     alignment: "left",
//     description: "Client website",
//     image: "#",
//     link: "#"
//   }
];

function AllProjects() {
  return (
    <div className="flex flex-col gap-12 w-full">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`flex flex-col md:flex-row items-center gap-8 ${
            project.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          <SingleProject project={project} />
        </div>
      ))}
    </div>
  );
}

export default AllProjects;
