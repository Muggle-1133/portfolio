import React from "react";
import board from "../assets/portfolio/board_img.PNG";
import notebook from "../assets/portfolio/notebook_img.PNG";
import osint from "../assets/portfolio/osint_img.PNG";

const Project = () => {
  const project = [
    {
      id: 1,
      src: board,
      link: "https://github.com/Muggle-1133/simple_board",
    },
    {
      id: 2,
      src: notebook,
      link: "https://github.com/Muggle-1133/php_project",
    },
    {
      id: 3,
      src: osint,
      link: "https://github.com/Muggle-1133/osint_project",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">개발했던 프로젝트들입니다.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {project.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                  <a
                    className="flex justify-center items-center w-full
                    text-white text-base"
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    코드 보기
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
