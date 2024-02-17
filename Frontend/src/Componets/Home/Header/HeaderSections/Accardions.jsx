import React, { useState } from "react";

const Accardions = () => {
  const [Accardions, setAccardions] = useState(false);
  const [Accardions2, setAccardions2] = useState(false);
  const [Accardions3, setAccardions3] = useState(false);
  const [Accardions4, setAccardions4] = useState(false);

  const AccardionsClick = (options) => {
    if (options === 1) {
      setAccardions(!Accardions);
      setAccardions2(false);
      setAccardions3(false);
      setAccardions4(false);
    }
    if (options === 2) {
      setAccardions(false);
      setAccardions2(!Accardions2);
      setAccardions3(false);
      setAccardions4(false);
    }
    if (options === 3) {
      setAccardions(false);
      setAccardions2(false);
      setAccardions3(!Accardions3);
      setAccardions4(false);
    }
    if (options === 4) {
      setAccardions(false);
      setAccardions2(false);
      setAccardions3(false);
      setAccardions4(!Accardions4);
    }
  };
  return (
    <section className="pt-[70px]">
      <div className="text-center">
        <span className="text-[#00095E]">FAQ</span>
        <h1 className="text-[#00095E] text-[50px] font-bold pb-[30px] max-md:text-[29px] pt-[10px] max-[500px]:text-[24px]">
          Full range of travel service
        </h1>
      </div>
      <div className="container mx-auto justify-between w-full max-lg:items-center space-x-10 flex flex-row max-lg:flex-col">
        <div className="basis-3/6  flex flex-col justify-center max-lg:pb-[50px] ">
          <div
            className={`pb-[25px] mb-[25px]   h-[0] overflow-x-hidden overflow-y-hidden transition-all duration-700 ${Accardions ? "h-[155px] transition-all" : " "
              }"`}
          >
            <p
              onClick={() => AccardionsClick(1)}
              className="text-gray-600 text-[19px] cursor-pointer"
            >
              <i class="fa-solid fa-plus text-[18px] text-blue-500 pr-[15px]"></i>
              Starts the automated process.
            </p>
            <span className="pl-[30px] pt-[30px] inline-block text-stone-500">
              The automated process starts as <br /> soon as your clothes go
              into the machine. Duis <br /> cursus, mi quis viverra ornare
            </span>
          </div>
          <div
            className={`pb-[25px] mb-[25px] h-[0] overflow-x-hidden overflow-y-hidden transition-all duration-700 ${Accardions2 ? "h-[155px] transition-all" : ""
              }`}
          >
            <p
              onClick={() => AccardionsClick(2)}
              className="text-gray-600 text-[19px] cursor-pointer"
            >
              <i class="fa-solid fa-plus text-[18px] text-blue-500 pr-[15px]"></i>
              The automated process starts.
            </p>
            <span className="pl-[30px] pt-[30px] inline-block text-stone-500">
              The automated process starts as <br /> soon as your clothes go
              into the machine. Duis <br /> cursus, mi quis viverra ornare
            </span>{" "}
          </div>
          <div
            className={`pb-[25px] mb-[25px] h-[0] overflow-x-hidden overflow-y-hidden transition-all duration-700 ${Accardions3 ? "h-[155px] transition-all" : ""
              }`}
          >
            <p
              onClick={() => AccardionsClick(3)}
              className="text-gray-600 text-[19px] cursor-pointer"
            >
              <i className="fa-solid fa-plus text-[18px] text-blue-500 pr-[15px]"></i>
              Automated process starts.
            </p>
            <span className="pl-[30px] pt-[30px] inline-block text-stone-500">
              The automated process starts as <br /> soon as your clothes go
              into the machine. Duis <br /> cursus, mi quis viverra ornare
            </span>
          </div>
          <div
            className={`pb-[25px] mb-[25px] h-[0] overflow-x-hidden overflow-y-hidden transition-all duration-700 ${Accardions4 ? "h-[155px] transition-all" : ""
              }`}
          >
            {" "}
            <p
              onClick={() => AccardionsClick(4)}
              className="text-gray-600 text-[19px] cursor-pointer"
            >
              <i className="fa-solid fa-plus text-[18px] text-blue-500 pr-[15px]"></i>
              Process the automated magic.
            </p>
            <span className="pl-[30px] pt-[30px] inline-block text-stone-500">
              The automated process starts as <br /> soon as your clothes go
              into the machine. Duis <br /> cursus, mi quis viverra ornare
            </span>
          </div>{" "}
        </div>
        <div className="basis-3/6">
          <img
            src="https://res.cloudinary.com/dviivhiqd/image/upload/v1697234610/about2_q1t0ub.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-row justify-center w-full">
        <button className="  bg-[#00096e] w-[270px] h-[70px] text-white text-[16px] font-[500] mt-[50px] transition-all hover:bg-[#FFC800] hover:text-[#00096e]">
          Book Your Destination
        </button>
      </div>
    </section>
  );
};

export default Accardions;
