import React from "react";

const Cards = ({
  TravleName,
  TravlePrice,
  TravleDay,
  TravleComments,
  TravleOldPrice,
  TravleButton,
  TravleImg,
  TravleLink,
}) => {
  return (
    <div className="pt-[70px] w-full mx-auto">
      <div className="max-w-sm max-md:mx-auto  rounded overflow-hidden shadow-lg">
        <img
          className="w-[270px] h-[200px] mx-auto"
          src={TravleImg}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{TravleName}</div>
          <p className="text-gray-700 w-[227px] text-base h-[48px]">{TravleComments}</p>
        </div>
        <div className="px-6 pt-4 pb-2 h-[96px]">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {TravleDay}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${TravlePrice}
          </span>
          <span className="inline-block decoration-red-700 decoration-[3px] line-through bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${TravleOldPrice}
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="px-6 py-4 flex flex-row justify-end">
            {TravleLink}
          </div>
          <div className="px-6 py-4 flex flex-row justify-end">
            {TravleButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
