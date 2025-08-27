"use client";

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import projectData from "../data.json";

type Project = {
  title: string;
  description: string;
  imageURL: string;
};

type ProjectCategory = {
  name: string;
  projects: Project[];
};

const filters = [
  "Web Development",
  "Mobile Development",
  "Design & Branding",
  "AI Solutions",
];

const ProjectsCard = () => {
  const [activeFilter, setActiveFilter] = useState<string>(filters[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const selectedCategory = (
    projectData as { projectData: ProjectCategory[] }
  ).projectData.find((cat) => cat.name === activeFilter);

  const totalPages = selectedCategory?.projects.length || 0;
  const currentProject = selectedCategory?.projects[currentPage];

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Column */}
      <div className="flex flex-col w-full md:w-1/2 p-6">
        {/* Filter */}
        <ul className="space-y-2">
          {filters.map((filter) => (
            <li
              key={filter}
              className={`cursor-pointer text-md font-secular transition-colors border-l-2 pl-2 ${
                activeFilter === filter
                  ? "text-black border-black"
                  : "text-gray-400 border-transparent"
              }`}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentPage(0);
              }}
            >
              {filter}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 flex mr-12 flex-col h-[75vh] md:h-full">
        {/* Description at bottom right */}
        <div className="py-4 items-start">
          <h1 className="text-2xl font-secular">{currentProject?.title}</h1>
          <p className="text-[#A8A8A8] text-sm">
            {currentProject?.description}
          </p>
        </div>

        {/* Image with reserved space above */}
        <div className="relative">
          {currentProject && (
            <Image
              src={currentProject.imageURL}
              alt="Project Image"
              width={1200}
              height={50}
              className="rounded-2xl border-gray-300 border-2"
            />
          )}
        </div>

        {/* Pagination Positioned */}
        <div className="flex justify-center items-center space-x-4 px-4 py-2 mb-4 mt-4">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 text-white bg-[#292E3D] p-2 hover:text-gray-300 transition-transform duration-200 hover:-translate-x-1"
          >
            <FaArrowLeft /> Back
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {selectedCategory?.projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentPage === index ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 text-white bg-[#292E3D] p-2 hover:text-gray-300 transition-transform duration-200 hover:translate-x-1"
          >
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="space-y-4 mx-6">
      <div className="flex flex-col p-4 items-start">
        <h1 className="text-4xl font-secular mt-16">Our Previous Projects</h1>
        <p className="text-[#A8A8A8]">
          A glimpse into the successful software solutions we`&apos;ve delivered.
        </p>
      </div>
      <ProjectsCard />
    </section>
  );
};

export default Projects;
