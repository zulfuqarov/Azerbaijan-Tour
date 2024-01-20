import React, { useContext, useEffect, useState } from "react";
import Cards from "../Home/Header/Cards/Cards";
import { Link } from "react-router-dom"; // Link bileşenini ekleyin
import { TravleContext } from "../../App";
import HeaderNavBottom from "./Header/HeaderNavBottom";

const Events = () => {
  const context = useContext(TravleContext);
  const itemsPerPage = 6;
  const [currentPage, setcurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = context.getTravleCard.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const pageNumber = [];

  for (
    let i = 1;
    i <= Math.ceil(context.getTravleCard.length / itemsPerPage);
    i++
  ) {
    pageNumber.push(i);
  }
  const handlePageChange = (pageNumber) => {
    setcurrentPage(pageNumber);
  };



  const [Search, setSearch] = useState('');
  const [ErrorSearch, setErrorSearch] = useState(false);

  const HandlChangeSerach = (e) => {
    setSearch(e.target.value)
  }

  const searchFunction = (item) => {
    const filteredResults = context.getTravleCard.filter((filter) =>
      filter.TravleName.toLowerCase().includes(item.toLowerCase())
    );


    if (filteredResults.length === 0 && !ErrorSearch) {
      setErrorSearch(true);
    } else if (filteredResults.length > 0 && ErrorSearch) {
      setErrorSearch(false);
    }

    return filteredResults;
  };





  return (
    <section>
      <HeaderNavBottom
        CllasNameAny="bg-HeaderNavBottom-fon w-full h-[440px]"
        H1="All Events"
      />
      <div className="flex flex-col items-center justify-center w-full pt-[80px] ">
        <span className="text-[#7EA0FF]">Check Our Best Promotional Tour</span>
        <h1 className="text-[#00095E] text-[50px] font-bold">
          Upcoming Events
        </h1>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
          <button className="text-gray-500 focus:outline-none">
            <img className="w-[20px]" src="https://th.bing.com/th/id/R.445f2174d9b978e9cb0e91bf192bb937?rik=L%2fhyk4tZUbzcVg&pid=ImgRaw&r=0" alt="" />
          </button>
          <input onChange={HandlChangeSerach} value={Search} type="text" className="w-full ml-2 bg-transparent focus:outline-none" placeholder="Search by voice..." />
        </div>
        {ErrorSearch &&
          <div className="pt-[40px]"><p className="text-[20px] text-red-500">Travle Not Found !!</p></div>
        }
      </div>
      {Search &&
        <div className=" flex flex-row justify-evenly flex-wrap">
          {
            searchFunction(Search).map((travle) => (
              <div className="pt-[20px]">
                <Cards
                  TravleName={travle.TravleName}
                  TravlePrice={travle.TravlePrice}
                  TravleDay="16.05.2002"
                  TravleComments={travle.TravleComment}
                  TravleOldPrice={travle.TravleOldPrice}
                  TravleImg={travle.TravleImg}
                  TravleButton={
                    <Link
                      to={`/Info-Travle/${travle._id}`}
                      className="bg-gray-700 hover:bg-[#FFC800]  hover:text-gray-800 text-[#ffffff] font-normal py-2 px-4 rounded"
                    >
                      Info Tour
                    </Link>
                  }
                />
              </div>
            ))}
        </div>
      }

      <div className="container mx-auto  grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 mt-[70px] mb-[40px] ">
        {currentItems &&
          currentItems.map((travleCard) => (
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
          ))}
      </div>

      <div className="flex flex-row justify-center mb-[60px]">
        {pageNumber.map((number) => (
          <span
            className="p-[5px] cursor-pointer text-[18] hover:text-[blue] "
            onClick={() => handlePageChange(number)}
          >
            {number}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Events;
