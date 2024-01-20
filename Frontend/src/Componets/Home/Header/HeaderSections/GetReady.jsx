import React from "react";

const GetReady = () => {
  return (
    <section className="container mx-auto max-lg:   pt-[70px] flex flex-row justify-evenly   max-md:flex-col ">
      <div className=" max-lg:mx-auto max-lg:w-[400px] max-sm:w-[300px]">
        <img
          src="https://res.cloudinary.com/dviivhiqd/image/upload/v1697234622/about_onnuyo.png"
          alt=""
        />
      </div>
      <div className=" flex flex-col ">
        <h1 className="max-lg:ml-[30px] max-sm:ml-[0px] max-md:text-center text-[50px] text-[#00095E] font-semibold  max-lg:text-[40px] max-md:pt-[50px]">
          Get ready for real <br /> time adventure
        </h1>
        <span className="max-lg:pl-[30px] max-sm:pl-[0px] mt-[20px] w-[450px] max-sm:w-[250px] max-sm:mx-auto   mb-[40px] text-[#6c757d] text-[19px] max-md:text-[16px] max-md:w-[440px]">
          Let’s start your journey with us, your dream will come true. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam quis nostrud exercitation.
        </span>
        <button className=" bg-[#00096e] w-[270px] h-[70px] text-white text-[16px] font-[500] mt-[50px] transition-all hover:bg-[#FFC800] hover:text-[#00096e]">
          Book Your Destination
        </button>
      </div>
    </section>
  );
};

export default GetReady;
