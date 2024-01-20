import axios from "axios";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState, CSSProperties } from "react";
import { TravleContext } from "../../App";
import ClipLoader from "react-spinners/ClipLoader";
import Cards from "../Home/Header/Cards/Cards";
const override = CSSProperties;

const Admin = () => {
  const context = useContext(TravleContext);
  const [AdminData, setAdminData] = useState({});
  const [error, seterror] = useState(null);
  const [getLogin, setgetLogin] = useState();
  const [loading, setloading] = useState(false);
  const [color, setcolor] = useState("#00000");
  const [succes, setsucces] = useState(null);
  const [InputAddTravle, setInputAddTravle] = useState({
    Name: "",
    Comment: "",
    Price: "",
    OldPrice: "",
    Img: "",
  });
  const GetAdminData = async () => {
    setloading(true);
    try {
      const AdminData = await axios.get("http://localhost:5555/Admin");
      if (AdminData.status === 200) {
        setAdminData(AdminData.data);
        setloading(false);
      }
    } catch (error) {
      console.log(error);
      seterror("Certainly! You do not have the authority for this....");
      setgetLogin(
        <Link
          className="text-[blue] text-center"
          to="http://localhost:5173/Admin-Sign"
        >
          {" "}
          Back to Sign
        </Link>
      );
      setloading(false);
    }
  };
  useEffect(() => {
    GetAdminData();
    context.getTravle();
  }, []);

  // Add Travle Start
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInputAddTravle({
      ...InputAddTravle,
      [name]: value,
    });
  };

  const AddTravleBtn = async (e) => {
    e.preventDefault();
    const newTravle = {
      BodyTravleName: InputAddTravle.Name,
      BodyTravleComment: InputAddTravle.Comment,
      BodyTravlePrice: InputAddTravle.Price,
      BodyTravleOldPrice: InputAddTravle.OldPrice,
      BodyTravleImg: InputAddTravle.Img,
    };
    await AddData(newTravle);
  };

  const AddData = async (Body) => {
    setloading(true);
    setsucces("Travle elave olunur......");
    try {
      const AddDataAxios = await axios.post(
        "http://localhost:5555/Add-Travle",
        Body
      );
      console.log(AddDataAxios.data);
      setloading(false);
      setsucces("Our tour has been successfully added");
      context.getTravle();
    } catch (error) {
      console.log(error);
      seterror("Travle Elave olunmadi !! Yeniden deneyin....");
      setloading(false);
    }
  };
  // Add Travle End

  if (error) {
    return (
      <section className="w-full h-[70vh] flex flex-col items-center justify-center">
        <div>
          <h1 className="mb-[20px]">{error}</h1>
          {getLogin}
        </div>
      </section>
    );
  }
  if (loading) {
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center">
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  // console.log(context.getTravleCard);
  return (
    <section>
      {AdminData && (
        <header>
          <section className="container mx-auto flex flex-row max-md:flex-col pt-[70px] h-[85vh] max-md:h-[120vh]">
            <div className="w-[550px] h-[70vh] flex flex-col items-left justify-start  ">
              <div className="flex flex-row max-md:m-auto">
                <img
                  className="w-[70px] h-auto mr-2"
                  src="https://th.bing.com/th/id/R.d94926ea4a91d1be53b522c45c61dadd?rik=c9k2B5b8Hk8SmQ&pid=ImgRaw&r=0"
                  alt="logo"
                />
              </div>
              <div className=" pt-[30px] max-md:m-auto">
                <h1 className="inline-block">
                  Name:
                  <p className="pl-[10px] text-[22px] inline-block">
                    {AdminData.name}
                  </p>
                </h1>{" "}
                <br />
                <h3 className="inline-block">
                  Email:
                  <p className="pl-[10px] inline-block text-[22px]">
                    {AdminData.email}
                  </p>
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center max-md:pt-[30px]  w-full">
              <h1 className="text-[30px] font-bold">Add New Travle!!</h1>
              {succes && <p>{succes}</p>}
              <div className="flex flex-col items-center justify-between  w-full pt-[40px]">
                <div className="">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Travle Name
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      value={InputAddTravle.Name}
                      onChange={handleChangeInput}
                      type="text"
                      name="Name"
                      id="name"
                      className="block w-[255px] rounded-md border-0 py-1.5 pl-1 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Travle name"
                    />
                  </div>
                </div>
                <div className="pt-[20px]">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Travle Img
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      value={InputAddTravle.Img}
                      onChange={handleChangeInput}
                      type="text"
                      name="Img"
                      id="name"
                      className="block w-[255px] rounded-md border-0 py-1.5 pl-1 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Travle name"
                    />
                  </div>
                </div>
                <div className="pt-[20px]">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      value={InputAddTravle.Price}
                      onChange={handleChangeInput}
                      type="text"
                      name="Price"
                      id="price"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label htmlFor="currency" className="sr-only">
                        Currency
                      </label>
                      <select
                        id="currency"
                        name="currency"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option>USD</option>
                        <option>CAD</option>
                        <option>EUR</option>
                        <option>AZN</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="pt-[20px]">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Old Price
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      value={InputAddTravle.OldPrice}
                      onChange={handleChangeInput}
                      type="text"
                      name="OldPrice"
                      id="price"
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label htmlFor="currency" className="sr-only">
                        Currency
                      </label>
                      <select
                        id="currency"
                        name="currency"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option>USD</option>
                        <option>CAD</option>
                        <option>EUR</option>
                        <option>AZN</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="pt-[20px]">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Travle Comment
                  </label>
                  <textarea
                    value={InputAddTravle.Comment}
                    onChange={handleChangeInput}
                    placeholder="Travle Comment"
                    name="Comment"
                    id=""
                    cols="20"
                    rows="5"
                    className="block w-[255px] text-center rounded-md border-0   text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <div className="px-6 py-4 flex flex-row justify-end">
                  <button
                    onClick={AddTravleBtn}
                    className="bg-gray-700 hover:bg-[#FFC800]  hover:text-gray-800 text-[#ffffff] font-normal py-2 px-4 rounded transition-all"
                  >
                    Add Travle
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container mx-auto  grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 mt-[200px] max-lg:mt-[290px]">
              {context.getTravleCard &&
                context.getTravleCard.map((travleCard, index) => (
                  <Cards
                    key={index}
                    TravleName={travleCard.TravleName}
                    TravlePrice={travleCard.TravlePrice}
                    TravleDay="16.05.2002"
                    TravleComments={travleCard.TravleComment}
                    TravleOldPrice={travleCard.TravleOldPrice}
                    TravleImg={travleCard.TravleImg}
                    TravleButton={
                      <button
                        onClick={() => {
                          context.deleteTravle(
                            travleCard._id,
                            travleCard.TravleName
                          );
                        }}
                        className="bg-red-700 hover:bg-[#FFC800]  hover:text-gray-800 text-[#ffffff] font-normal py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                    }
                    TravleLink={
                      <Link
                        to={`/Admin-Travle-Info/${travleCard._id}`}
                        className="bg-gray-700 hover:bg-[#FFC800]  hover:text-gray-800 text-[#ffffff] font-normal py-2 px-4 rounded"
                      >
                        MoreInfo
                      </Link>
                    }
                  />
                ))}
            </div>
          </section>
        </header>
      )}
    </section>
  );
};

export default Admin;
