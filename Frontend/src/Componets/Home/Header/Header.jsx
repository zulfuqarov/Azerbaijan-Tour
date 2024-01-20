import React, { useState, useRef, useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import Cards from "./Cards/Cards";
import { TravleContext } from "../../../App";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import GetReady from "./HeaderSections/GetReady";
import Accardions from "./HeaderSections/Accardions";

const Header = () => {
  const context = useContext(TravleContext);

  useEffect(() => {
    AOS.init();
    context.getTravle();
  }, []);

  return (
    <header>
      <div className="flex flex-col items-center">
        <div className="text-center flex flex-col h-[80vh] justify-center w-[750px] max-md:w-[470px] max-sm:w-[270px] ">
          <h1
            data-aos="zoom-in-down"
            className="text-[60px] font-black text-[#00096e] leading-[70px] max-md:text-[30px] max-sm:text-[20px]"
          >
            <Typewriter
              words={[
                `Lifelong memories just a 
            few seconds away`,
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
            />
          </h1>
          <p
            data-aos="zoom-in-down"
            className="text-[20px] font-normal text-[#00096e] font-sans mt-[20px]"
          >
            Let’s start your journey with us, your dream will come true
          </p>
          <button
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="mx-auto bg-[#00096e] w-[270px] h-[70px] text-white text-[16px] font-[500] mt-[50px] transition-all hover:bg-[#FFC800] hover:text-[#00096e]"
          >
            Explore Destinations
          </button>
        </div>
      </div>
      <div className="bg-fon-header w-full h-[100vh]">
        <div className="flex flex-col items-center justify-center h-[100%]">
          <img
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1697234567/car_sjefoo.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center pt-[80px]">
        <p className="text-[#7EA0FF] text-[18px] tracking-[1px]">
          Check Our Best Promotional Tour
        </p>
        <h1 className="text-[#00095E] text-[50px] font-extrabold pt-[10px]">
          Upcoming Events
        </h1>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper container"
      >
        {context.getTravleCard &&
          context.getTravleCard.map((travleCard, index) => (
            <SwiperSlide key={index} className="pb-[80px]">
              <Cards
                TravleName={travleCard.TravleName}
                TravlePrice={travleCard.TravlePrice}
                TravleDay="16.05.2002"
                TravleComments={travleCard.TravleComment}
                TravleOldPrice={travleCard.TravleOldPrice}
                TravleImg={travleCard.TravleImg}
                TravleButton={
                  <Link
                    to={`/Info-Travle/${travleCard._id}`}
                    className="bg-gray-700 hover:bg-[#FFC800]  hover:text-gray-800 text-[#ffffff] font-normal py-2 px-4 rounded"
                  >
                    Info Tour
                  </Link>
                }
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <GetReady />
      <div className="bg-fon-header2 w-full h-[580px] mt-[80px]">
        <div className="container flex flex-col items-center mx-auto pt-[80px] pb-[100px] text-center">
          <h1 className="text-white text-[50px] font-bold pb-[30px] max-md:text-[29px]">
            What customers say
          </h1>
          <p className="text-[26px] w-[890px] max-lg:w-[750px] max-md:w-[485px] max-sm:w-[320px]  text-white max-md:text-[15px] px-[10px]">
            "Lets`s start your jorney with us, your dream will come true. lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labor et dolore magna aliqua.
          </p>
          <div className=" flex flex-row justify-center pt-[30px]">
            <div>
              {" "}
              <img
                className=""
                src="https://res.cloudinary.com/dviivhiqd/image/upload/v1697234620/founder-img_ibedfz.png"
                alt=""
              />
            </div>
            <p className="pl-[15px] text-white my-auto text-[17px] ">
              Ilkin Zulfuqarov <br />
              CEO of Colorlib
            </p>
          </div>
        </div>
      </div>
      <Accardions />
      <div className="container mx-auto bg-header-fon-3 w-full h-[560px] rounded-[50px]  mt-[70px] mb-[70px]"></div>
    </header>
  );
};

export default Header;
