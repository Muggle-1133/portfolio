import React from "react";
import { useState } from "react";
import HeroImage from "../assets/portfolio/blue_profile.png";
import { TiArrowRight } from "react-icons/ti";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I want to be a Front-end developer.
          </h2>
          <p className="text-gray-500 py-4 px-1 max-w-md">
            개발에 대해 공부한 지 2년이 되었으며 리액트, Node.js 등의 기술을
            이용한 웹 애플리케이션 개발을 좋아합니다. 부족함이 없는 개발자가
            되기 위해 열심히 노력할 테니 앞으로 저의 행보에 많은 응원
            부탁드립니다 :)
          </p>

          <div>
            <Link
              to="project"
              smooth
              duration={500}
              className="group font-Medium text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  transition ease-in-out delay-500 duration-300"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              프로젝트 보기
              <span className="group-hover:transition-all">
                {hover ? (
                  <TiArrowRight size={25} className="ml-1" />
                ) : (
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                )}
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
