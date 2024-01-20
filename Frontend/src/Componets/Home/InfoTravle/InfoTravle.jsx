import React, { useRef, useEffect, useState, CSSProperties } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const override = CSSProperties;

const InfoTravle = () => {
  const mapRef = useRef();
  const mapRef2 = useRef();
  const { id } = useParams();
  const [getTravleMoreInfo, setgetTravleMoreInfo] = useState([]);
  const [Info, setInfo] = useState([]); // Başlangıç değeri uygun bir şekilde ayarlandı
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
  const [color, setcolor] = useState("#00000");
  const [succes, setsucces] = useState(null);
  const [VisibleInfo, setVisibleInfo] = useState(false);
  const [VisibleInfo2, setVisibleInfo2] = useState(false);
  const [VisibleInfo3, setVisibleInfo3] = useState(false);
  const [VisibleInfo4, setVisibleInfo4] = useState(false);

  const ClickVisible = (visible) => {
    if (visible === 1) {
      setVisibleInfo(true);
      setVisibleInfo2(false);
      setVisibleInfo3(false);
      setVisibleInfo4(false);
    }
    if (visible === 2) {
      setVisibleInfo2(true);
      setVisibleInfo(false);
      setVisibleInfo3(false);
      setVisibleInfo4(false);
      handleSearch2();
    }
    if (visible === 3) {
      setVisibleInfo3(true);
      setVisibleInfo(false);
      setVisibleInfo2(false);
      setVisibleInfo4(false);
    }
    if (visible === 4) {
      setVisibleInfo4(true);
      setVisibleInfo3(false);
      setVisibleInfo(false);
      setVisibleInfo2(false);
    }
  };

  const getTravleInfo = async () => {
    try {
      const axiosGetTravleInfo = await axios.get(
        `http://localhost:5555/More-Travle-Info/${id}`
      );
      setgetTravleMoreInfo(axiosGetTravleInfo.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  const GetInfo = async () => {
    try {
      const GetInfosAxios = await axios.get(
        `http://localhost:5555/Travle-Info/${id}`
      );
      setInfo(GetInfosAxios.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  const handleSearch2 = async () => {
    try {
      const response2 = await axios.get(`http://localhost:5555/Map/${id}`);
      const data2 = await response2.data;
      if (data2 && data2.length > 0) {
        const firstResult2 = data2[0];
        const newPosition2 = [
          parseFloat(firstResult2.lat),
          parseFloat(firstResult2.lon),
        ];
        const marker = L.marker(newPosition2).addTo(mapRef2.current);
        marker.bindPopup("Konum Etiketi").openPopup();

        // Haritayı yeni konuma odaklamak için `flyTo` yöntemini kullanabiliriz.
        mapRef2.current.flyTo(newPosition2, 7);
      } else {
        console.log("Konum bulunamadı.");
      }
    } catch (error) {
      console.error("Konum araması sırasında bir hata oluştu: " + error);
    }
  };
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/Map/${id}`);
      const data = await response.data;
      if (data && data.length > 0) {
        const firstResult = data[0];
        const newPosition = [
          parseFloat(firstResult.lat),
          parseFloat(firstResult.lon),
        ];
        const marker = L.marker(newPosition).addTo(mapRef.current);
        marker.bindPopup("Konum Etiketi").openPopup();

        // Haritayı yeni konuma odaklamak için `flyTo` yöntemini kullanabiliriz.
        mapRef.current.flyTo(newPosition, 7);
      } else {
        console.log("Konum bulunamadı.");
      }
    } catch (error) {
      console.error("Konum araması sırasında bir hata oluştu: " + error);
    }
  };
  useEffect(() => {
    setloading(true);
    getTravleInfo();
    GetInfo();
    handleSearch();
  }, []);

  if (error) {
    return (
      <section className="w-full h-[70vh] flex flex-col items-center justify-center">
        <div>
          <h1 className="mb-[20px]">{error}</h1>
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

  return (
    <section className="py-[50px]">
      {Info && (
        <header className="">
          <div className="container mx-auto pt-[70px] ">
            <div className="flex flex-row max-md:flex-col">
              <div className=" flex flex-row justify-center ">
                <img
                  src={Info.TravleImg}
                  alt=""
                  className="w-[400px]  max-sm:w-[200px] max-sm:h-[200px] rounded-lg"
                />
              </div>
              <div className="pl-[50px] flex flex-col w-full max-md:pl-[0] max-md:pt-[70px]">
                <h1 className="inline-block text-[30px] max-md:text-[22px]">
                  Tour-Name:{" "}
                  <p className="pl-[15px] inline-block text-[30px] max-md:text-[22px] font-semibold">
                    {Info.TravleName}
                  </p>
                </h1>
                <h1 className="inline-block text-[30px] max-md:text-[22px]">
                  Tour-Price:{" "}
                  <p className="pl-[15px] inline-block text-[30px] max-md:text-[22px] font-semibold">
                    {Info.TravlePrice}$
                  </p>
                </h1>
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  style={{ width: "100%", height: "240px" }}
                  ref={mapRef}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
              </div>
            </div>
            <div className="flex flex-row justify-between relative  max-lg:flex-col">
              <div className="w-full">
                <div className="flex flex-row justify-between  w-[70%] pt-[50px] max-md:w-[100%]">
                  <div
                    onClick={() => ClickVisible(1)}
                    className="cursor-pointer border-[2px] w-[120px] max-md:w-[90px] h-[40px] flex flex-row items-center justify-center "
                  >
                    {" "}
                    <span className="cursor-pointer text-[18px] max-md:text-[16px]  font-semibold">
                      Tour Plan
                    </span>
                  </div>
                  <div
                    onClick={() => ClickVisible(2)}
                    className="cursor-pointer border-[2px] w-[120px] max-md:w-[90px] h-[40px] flex flex-row items-center justify-center"
                  >
                    {" "}
                    <span className="cursor-pointer text-[18px] max-md:text-[16px] font-semibold">
                      Location
                    </span>
                  </div>
                  <div
                    onClick={() => ClickVisible(3)}
                    className="cursor-pointer border-[2px] w-[120px] max-md:w-[90px] h-[40px] flex flex-row items-center justify-center"
                  >
                    {" "}
                    <span className="cursor-pointer text-[18px] max-md:text-[16px] font-semibold">
                      Gallery
                    </span>
                  </div>
                  <div
                    onClick={() => ClickVisible(4)}
                    className="cursor-pointer border-[2px] w-[120px] max-md:w-[90px] h-[40px] flex flex-row items-center justify-center"
                  >
                    {" "}
                    <span className="cursor-pointer text-[18px] max-md:text-[16px] font-semibold">
                      Informations
                    </span>
                  </div>
                </div>
                <div className="w-[70%] max-lg:w-[100%] pt-[50px] max-md:w-[100%]">
                  {VisibleInfo && (
                    <div className="max-sm:w-[340px] max-sm:mx-auto">
                      <h1 className="text-center pb-[40px] text-gray-700 text-[24px] font-bold">
                        Tour Plan
                      </h1>
                      <span className="text-[20px] text-gray-800 tracking-[1px] font-serif leading-[35px]">
                        {getTravleMoreInfo.TourPlan}
                      </span>
                    </div>
                  )}
                  {VisibleInfo2 && (
                    <div>
                      <h1 className="text-center pb-[40px] text-gray-700 text-[24px] font-bold">
                        Tour Location
                      </h1>
                      <div>
                        <MapContainer
                          center={[51.505, -0.09]}
                          zoom={13}
                          style={{ width: "100%", height: "240px" }}
                          ref={mapRef2}
                        >
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        </MapContainer>
                      </div>
                    </div>
                  )}
                  {VisibleInfo3 && (
                    <div>
                      <h1 className="text-center pb-[40px] text-gray-700 text-[24px] font-bold">
                        Tour Gallery
                      </h1>

                      <div>
                        <Swiper
                          slidesPerView={4}
                          spaceBetween={10}
                          className="mySwiper"
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          modules={[Autoplay]}
                        >
                          {getTravleMoreInfo.Gallery.map((img, index) => (
                            <SwiperSlide key={index}>
                              <div>
                                <img
                                  className="w-full aspect-[4/3] h-full  rounded-xl "
                                  src={img}
                                  alt=""
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <div>
                        <div className="py-[30px]">
                          <div className=" flex flex-wrap ">
                            <div className="flex w-1/2 flex-wrap">
                              <div className="w-1/2 p-1 md:p-2">
                                <img
                                  alt="gallery"
                                  className="block h-full w-full rounded-lg object-cover object-center"
                                  src={getTravleMoreInfo.Gallery[5]}
                                />
                              </div>
                              <div className="w-1/2 p-1 md:p-2">
                                <img
                                  alt="gallery"
                                  className="block h-full w-full rounded-lg object-cover object-center"
                                  src={getTravleMoreInfo.Gallery[3]}
                                />
                              </div>
                              <div className="w-full p-1 md:p-2">
                                <img
                                  alt="gallery"
                                  className="block h-full w-full rounded-lg object-cover object-center"
                                  src={getTravleMoreInfo.Gallery[2]}
                                />
                              </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                              <div className="w-full p-1 md:p-2">
                                <img
                                  alt="gallery"
                                  className="block h-full w-full rounded-lg object-cover object-center"
                                  src={getTravleMoreInfo.Gallery[1]}
                                />
                              </div>
                              <div className="w-1/2 p-1 md:p-2">
                                <img
                                  alt="gallery"
                                  className="block h-full w-full rounded-lg object-cover object-center"
                                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                                />
                              </div>
                              <div className="w-1/2 p-1 md:p-2">
                                <img
                                  alt="gallery"
                                  className="block h-full w-full rounded-lg object-cover object-center"
                                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {VisibleInfo4 && (
                    <div className="max-sm:w-[340px] max-sm:mx-auto">
                      <h1 className="text-center pb-[40px] text-gray-700 text-[24px] font-bold">
                        Tour Information
                      </h1>
                      <span className="text-[20px] max-sm::text-[16px]  text-gray-800 tracking-[1px] font-serif leading-[35px]">
                        {getTravleMoreInfo.Information}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-[40px] absolute right-0 top-0 max-lg:mx-auto max-lg:static">
                <div className="py-[15px] flex flex-row justify-between w-[230px]">
                  <div className="flex flex-col justify-center">
                    <i className="text-[22px] fa-solid fa-house"></i>{" "}
                  </div>
                  <div>
                    <p>Buttonwood, California.</p>
                    <span className="text-slate-400">Rosemead, CA 91770</span>
                  </div>
                </div>
                <div className="py-[15px] flex flex-row justify-between w-[230px]">
                  <div className="flex flex-col justify-center">
                    <i className="text-[22px] fa-solid fa-mobile-screen"></i>{" "}
                  </div>
                  <div>
                    <p>+994-70-372-17-80</p>
                    <span className="text-slate-400">
                      Mon to Fri 9am to 6pm
                    </span>
                  </div>
                </div>
                <div className="py-[15px] flex flex-row justify-between w-[265px]">
                  <div className="flex flex-col justify-center">
                    <i className="text-[22px] fa-regular fa-envelope"></i>
                  </div>
                  <div>
                    <p>zulfuqarov.nebi@inbox.ru</p>
                    <span className="text-slate-400">
                      Send us your query anytime!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </section>
  );
};

export default InfoTravle;
