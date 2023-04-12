import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/su-yeonn",
    },
    {
      id: 2,
      child: (
        <>
          Mail <FiMail size={30} />
        </>
      ),
      href: "mailto:flyyangsy@ync.ac.kr",
    },
    {
      id: 3,
      child: (
        <>
          Instagram <BsInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/may7_berry/",
    },
  ];
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center w-40 h-14 px-5 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"
          >
            <a
              href={item.href}
              className="flex justify-between items-center w-full text-white text-lg"
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
