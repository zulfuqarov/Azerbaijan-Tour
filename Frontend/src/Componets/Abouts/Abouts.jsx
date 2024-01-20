import React, { useEffect } from "react";
import HeaderNavBottom from "../Events/Header/HeaderNavBottom";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Abouts = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <HeaderNavBottom
        CllasNameAny="bg-HeaderNavBottom-fon-Abouts w-full h-[440px]"
        H1="Abouts"
      />
      <div className="container mx-auto py-[100px]">
        <div className="flex flex-col items-center w-full ">
          <div className="flex flex-row max-md:flex-col w-full justify-evenly max-md:items-center">
            <div
              data-aos="fade-right"
              className="flex flex-col max-md:items-center"
            >
              <h1 className="text-[50px] max-lg:text-[40px] max-md:text-[30px] max-sm:text-[25px] font-semibold">
                Travelicious Abouts
              </h1>
              <span className="w-[500px] max-sm:text-[16px] max-lg:w-[400px] max-sm:w-[250px] max-md:text-center  pt-[30px] inline-block text-[18px]">
                Our tour is designed to take you on a fascinating journey. We
                share our passion for taking you to the most beautiful places in
                the world, and with this passion we want our tour to be{" "}
                <span className="w-full inline-block text-center">
                  unforgettable for you.
                </span>
              </span>
            </div>
            <div
              data-aos="fade-left"
              className="inline-block w-[200px] my-auto max-md:mt-[30px]"
            >
              <img
                className="w-[100%] rounded-xl"
                src="https://www.minddevelopmentanddesign.com/wp-content/uploads/2019/08/person-writing-on-notebook-next-to-a-laptop.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="pt-[50px] flex max-md:flex-col flex-row w-full justify-evenly max-md:items-center">
            <div
              data-aos="fade-right"
              className="inline-block w-[200px] my-auto"
            >
              <img
                className="w-[100%] rounded-xl"
                src="https://live.staticflickr.com/5325/8827515592_b907723129_z.jpg"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              className="flex flex-col max-md:items-center"
            >
              <h1 className="text-[50px] max-lg:text-[40px] max-md:text-[30px] max-sm:text-[25px] font-semibold">
                The Story of the Tour:
              </h1>
              <span className="w-[500px] max-sm:text-[16px] max-lg:w-[400px] max-sm:w-[250px] max-md:text-center pt-[30px] inline-block text-[18px]">
                Our tour began with the desire to discover the hidden treasures
                of Baku. The desire to share local culture and unique landscapes
                with more people is the cornerstone of this tour. Over the years
                we have grown and invited more{" "}
                <span className="w-full inline-block text-center">
                  people to these unique experiences.
                </span>
              </span>
            </div>
          </div>
          <div className="pt-[50px] flex max-md:flex-col flex-row w-full justify-evenly max-md:items-center">
            <div
              data-aos="fade-right"
              className="flex flex-col max-md:items-center"
            >
              <h1 className="text-[50px] max-lg:text-[40px] max-md:text-[30px] max-sm:text-[25px] font-semibold">
                Unique Experiences:
              </h1>
              <span className="w-[500px] max-sm:text-[16px] max-lg:w-[400px] max-sm:w-[250px] max-md:text-center pt-[30px] inline-block text-[18px]">
                Our tour offers you unforgettable experiences with Baku. During
                this tour, we will take you to exclusive places such as Yanar
                Dag, and and.... We offer you not just a tour, but an adventure.
                <span className="w-full inline-block text-center">
                  adventure.
                </span>
              </span>
            </div>
            <div
              data-aos="fade-left"
              className="inline-block w-[200px] my-auto"
            >
              <img
                className="w-[100%] rounded-xl"
                src="https://th.bing.com/th/id/R.9521a740b95024d14f60d393b8d049b8?rik=CI64brLt4X79mg&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
          </div>
          <div className="pt-[50px] flex max-md:flex-col flex-row w-full justify-evenly max-md:items-center">
            <div
              data-aos="fade-right"
              className="inline-block w-[200px] my-auto"
            >
              <img
                className="w-[100%] rounded-xl"
                src="https://th.bing.com/th/id/OIP.UL-1DMfhVszKjcYlgEespAD0D_?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div
              data-aos="flip-down"
              className="flex flex-col max-md:items-center"
            >
              <h1 className="text-[50px] max-lg:text-[40px] max-md:text-[30px] max-sm:text-[25px] font-semibold text-center">
                Guide Team
              </h1>
              <span className="w-[500px] max-sm:text-[16px] max-lg:w-[400px] max-sm:w-[250px] max-md:text-center pt-[30px] inline-block text-[18px]">
                Our tour is supported by our expert local guides. Our guides are
                experts in their fields such as Zulfuqarov.Ilkin, Aslan .....
                and will help you every step of the way.
                <span className="w-full inline-block text-center">
                  {/* adventure. */}
                </span>
              </span>
            </div>
            <div
              data-aos="fade-left"
              className="inline-block w-[200px] my-auto"
            >
              <img
                className="w-[100%] rounded-xl"
                src="https://th.bing.com/th/id/R.ee11b1745c822f0a1fa0bf2ecdd8683a?rik=qV0Q9gpeWlrA%2fw&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
          </div>
          <div className="pt-[50px] flex max-md:flex-col flex-row w-full justify-evenly max-md:items-center">
            <div
              data-aos="flip-down"
              className="flex flex-col items-start  max-md:items-center"
            >
              <h1 className="text-[50px] max-lg:text-[40px] max-md:text-[30px] max-sm:text-[25px] font-semibold">
                Frequently asked Questions
              </h1>
              <span className="w-[500px] max-sm:text-[16px] max-lg:w-[400px] max-sm:w-[250px] max-md:text-center pt-[30px] inline-block text-[18px] text-center">
                What is the duration of the tour? <br /> How much does the tour
                cost? <br />
                What is included in the tour price? <br /> What's not included?
              </span>
              <div className="w-[500px] max-sm:text-[16px] max-lg:w-[400px] max-sm:w-[250px] max-md:text-center pt-[30px] inline-block text-[18px] text-center">
                <Link
                  className="text-[16px] p-[10px] mt-[20px]    hover:bg-amber-500 transition-all bg-white rounded-xl text-[black]"
                  to="/Events"
                >
                  More Tour Info
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="inline-block w-[200px] my-auto"
            >
              <img
                className="w-[100%] rounded-xl"
                src="https://th.bing.com/th/id/R.c4c2997def293de043680831f37c834c?rik=ThqZDj41moexdQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fquestion-and-answer-session-iStock_000006988219Medium.jpg&ehk=ZKNmJ9qaXmeU5ewrtSt0Id12gEr3Gt9jepr2A2xRGXY%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
          </div>
          <div className="pt-[50px] flex max-md:flex-col flex-row w-full justify-evenly max-md:items-center">
            <div
              data-aos="fade-left"
              className="inline-block w-[200px] my-auto"
            >
              <img
                className="w-[100%] rounded-xl"
                src="https://th.bing.com/th/id/R.28be6740aebce6ce7b864289276c7095?rik=5f2W0y0xlN8wrQ&pid=ImgRaw&r=0&sres=1&sresct=1"
                alt=""
              />
            </div>
            <div
              data-aos="flip-down"
              className="flex flex-col items-start max-md:items-center"
            >
              <h1 className="text-[50px] max-lg:text-[40px] max-md:text-[30px] max-sm:text-[25px] font-semibold">
                Reservation Information:
              </h1>
              <span className="w-[500px] max-sm:text-[16px] max-lg:w-[400px] max-sm:w-[250px] max-md:text-center pt-[30px] inline-block text-[18px] text-center">
                Please contact us to book our tour or get more information.
              </span>
              <div className="w-[500px] max-sm:text-[16px] max-lg:w-[400px] max-sm:w-[250px] max-md:text-center pt-[30px] inline-block text-[18px] text-center">
                <Link
                  className="text-[16px] p-[10px] mt-[20px]    hover:bg-amber-500 transition-all bg-white rounded-xl text-[black]"
                  to="/Contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
