import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
// aos  qurasdirlimasinda qaldiq

const Navbar = () => {
  const [barClick, setbarsClick] = useState(false);

  const BarsClickMenu = () => {
    setbarsClick(!barClick);
  };
  return (
    <header className="flex flex-col items-center">
      <div className="container mx-auto flex items-center justify-between pt-[20px] ">
        <div>
          <img
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1697234629/logo_xfev8c.png"
            alt=""
          />
        </div>
        <div className="w-[65%] flex justify-between items-center max-lg:hidden">
          <Link
            to="/"
            className="font-bold text-[#FFC800] hover:text-gray-950 transition-all	"
          >
            Home
          </Link>
          <Link
            to="/Events"
            className="font-bold text-[#FFC800] hover:text-gray-950 transition-all"
          >
            Events
          </Link>
          <Link
            to="/Abouts"
            className="font-bold text-[#FFC800] hover:text-gray-950 transition-all"
          >
            About
          </Link>
          <Link
            to="/Comment"
            className="font-bold text-[#FFC800] hover:text-gray-950 transition-all"
          >
            Blog
          </Link>
          <Link
            to="/Contact"
            className="font-bold text-[#FFC800] hover:text-gray-950 transition-all"
          >
            Contact
          </Link>
          <Link
            to="https://wa.me/+994703721780?text=Salam%20Tur%20haqda%20melumat%20almaq%20isteyirem"
            className="bg-[#FFC800] w-[210px] flex flex-row justify-center items-center h-[50px] rounded-md"
          >
            <i className="fa-solid fa-phone fa-beat pr-[10px] cursor-pointer"></i>
            <span>+994-70-372-17-80</span>{" "}
          </Link>
        </div>
        <div className="hidden max-lg:block ">
          <i
            onClick={BarsClickMenu}
            className="fa-solid fa-bars text-[24px] text-[#FFC800] cursor-pointer"
          ></i>
        </div>
      </div>
      <div className="hidden max-lg:block ">
        <div
          className={
            barClick
              ? " flex flex-col w-full items-center justify-between h-[400px] left-0 pt-[30px] transition-all"
              : "w-[0] overflow-hidden"
          }
        >
          <Link
            to="/"
            className="bg-gray-500 w-[300px] max-sm:w-[200px] p-[10px] hover:bg-[#FFC800] text-center font-bold text-[#FFC800] hover:text-gray-950 transition-all	"
          >
            Home
          </Link>
          <Link
            to="/Events"
            className=" bg-gray-500 w-[300px]  max-sm:w-[200px] p-[10px] hover:bg-[#FFC800] text-center font-bold text-[#FFC800] hover:text-gray-950 transition-all"
          >
            Events
          </Link>
          <Link
            to="/Abouts"
            className=" bg-gray-500 w-[300px] max-sm:w-[200px] p-[10px] hover:bg-[#FFC800] text-center font-bold text-[#FFC800] hover:text-gray-950 transition-all"
          >
            About
          </Link>
          <Link
            to="/Comment"
            className=" bg-gray-500 w-[300px] max-sm:w-[200px] p-[10px] hover:bg-[#FFC800] text-center font-bold text-[#FFC800] hover:text-gray-950 transition-all"
          >
            Blog
          </Link>
          <Link
            to="/Contact"
            className=" bg-gray-500 w-[300px] max-sm:w-[200px] p-[10px] hover:bg-[#FFC800] text-center font-bold text-[#FFC800] hover:text-gray-950 transition-all"
          >
            Contact
          </Link>
          <button className="bg-[#FFC800] w-[210px] h-[50px] rounded-md">
            <i className="fa-solid fa-phone fa-beat pr-[10px]"></i>
            +994-70-811-53-99
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
