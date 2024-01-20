import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper max-md:!hidden"
      >
        <SwiperSlide>
          <img
            className="w-[100%] h-[240px]"
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1697234612/instra5_nyldm7.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[240px]"
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1697234599/instra1_vrlg8r.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[240px]"
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1697234585/services2_dmtaky.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[240px]"
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1695134735/rome_01-800x533_xsmwlk.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[240px]"
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1697234593/instra4_rykmzc.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[240px]"
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1695134724/destination-puerto-rico-01-1280x1280_allmzq.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[240px]"
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1695134715/destination-netherlands-01-1280x1280_gc5mok.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[240px]"
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1695134709/destination-kyoto-01-1280x1280_eyxwpt.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[240px]"
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1695134722/venice-01-800x533_gvmyg4.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="bg-[#1a2d6d] pt-[70px]">
        <div className="container mx-auto ">
          <div className="flex flex-row justify-between max-lg:flex-wrap">
            <div className="flex flex-col justify-between h-[250px]">
              <div className="w-[165px]">
                <img
                  className="w-[100%]"
                  src="https://res.cloudinary.com/dviivhiqd/image/upload/v1697234615/logo2_footer_hwhjwj.png"
                  alt=""
                />
              </div>
              <span className="w-[370px] max-md:w-[300px] max-sm:w-[230px] text-[17px] text-[#8A8FBE]">
                Land behold it created good saw after she'd Our set living.
                Signs midst dominion creepeth morning laboris nisi ufsit
                aliquip.
              </span>
              <div className="w-[150px] flex flex-row justify-between">
                <i className="fa-brands fa-instagram text-[22px] text-[#8A8FBE]"></i>
                <i className="fa-brands fa-twitter text-[22px] text-[#8A8FBE]"></i>
                <i className="fa-brands fa-facebook text-[22px] text-[#8A8FBE]"></i>
                <i className="fa-brands fa-linkedin-in text-[22px] text-[#8A8FBE]"></i>
              </div>
            </div>
            <div className="flex flex-col justify-between h-[220px]  max-sm:mt-[50px]">
              <p className="text-[white] text-[19px] font-bold">Navigation</p>
              <Link
                className="text-[#8A8FBE] text-[19px] hover:text-[#ffffff] transition-all"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-[#8A8FBE] text-[19px] hover:text-[#ffffff] transition-all"
                to=""
              >
                About
              </Link>
              <Link
                className="text-[#8A8FBE] text-[19px] hover:text-[#ffffff] transition-all"
                to=""
              >
                Services
              </Link>
              <Link
                className="text-[#8A8FBE] text-[19px] hover:text-[#ffffff] transition-all"
                to=""
              >
                Blog
              </Link>
              <Link
                className="text-[#8A8FBE] text-[19px] hover:text-[#ffffff] transition-all"
                to=""
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col justify-between h-[220px] max-sm:mt-[50px]">
              <p className="text-[white] text-[19px] font-bold">Services</p>
              <Link
                className="text-[#8A8FBE] text-[19px] hover:text-[#ffffff] transition-all"
                to=""
              >
                Blackforest
              </Link>
              <Link
                className="text-[#8A8FBE] text-[19px] hover:text-[#ffffff] transition-all"
                to=""
              >
                Bodhubon
              </Link>
              <Link
                className="text-[#8A8FBE] text-[19px] hover:text-[#ffffff] transition-all"
                to=""
              >
                Services
              </Link>
              <Link
                className="text-[#8A8FBE] text-[19px] hover:text-[#ffffff] transition-all"
                to=""
              >
                Rongdhonu
              </Link>
              <Link
                className="text-[#8A8FBE] text-[19px] hover:text-[#ffffff] transition-all"
                to=""
              >
                Meghrong
              </Link>
            </div>
            <div className="flex flex-col justify-between h-[160px] max-lg:mt-[50px]">
              <p className="text-[white] text-[19px] font-bold">Contact Us</p>
              <span className="w-[370px] max-md:w-[300px] max-sm:w-[230px] text-[17px] text-[#8A8FBE]">
                76/A, Green Lane, Dhanmondi, NYC demomail89@gmail.com
              </span>
              <p className="text-[28px] text-amber-400">+994-70-372-17-80</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <span className="text-[17px] text-[#8A8FBE] text-center inline-block w-full pt-[50px] pb-[10px]">
            Copyright ©2023 All rights reserved | This template is made with by
            Colorlib
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
