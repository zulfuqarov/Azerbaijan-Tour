import React, { useState } from "react";
import HeaderNavBottom from "../Events/Header/HeaderNavBottom";
import { Link } from "react-router-dom";
import axios from "axios";

const Contacts = () => {
  const [SentMailInput, setSentMailInput] = useState({
    Comment: "",
    Name: "",
    Email: "",
    Subjet: "",
  });
  const [subjectSend, setsubjectSend] = useState(false);
  // start validations
  const [NameValid, setNameValid] = useState(false);
  const [CommentValid, setCommentValid] = useState(false);
  const [EmailValid, setEmailValid] = useState(false);
  const [SubjectValid, setSubjectValid] = useState(false);

  const [Erros, setErros] = useState({
    Comment: "Enter a valid value",
    Name: "Enter a valid value",
    Email: "Enter a valid value",
    Subjet: "Enter a valid value",
  });

  const CheckValidations = (name, input) => {
    let CheckValidationsBolen = false;
    switch (name) {
      case "Name":
        if (input.length >= 4 && input.length < 20) {
          setNameValid(true);
          setErros({
            ...Erros,
            Name: "",
          });
        } else {
          setErros({
            ...Erros,
            Name: "Should not be less than 4, should be greater than 20",
          });
          setNameValid(false);
          return false;
        }
        break;
      case "Email":
        const regularExpresions =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regularExpresions.test(input.trim())) {
          setEmailValid(true);
          setErros({
            ...Erros,
            Email: "",
          });
        } else {
          setErros({
            ...Erros,
            Email: "Please enter a valid email address",
          });
          setEmailValid(false);
          return false;
        }
        break;
      case "Comment":
        if (input.length >= 10) {
          setCommentValid(true);
          setErros({
            ...Erros,
            Comment: "",
          });
        } else {
          setErros({
            ...Erros,
            Comment: "Comment Should not be less than 10",
          });
          setCommentValid(false);
          return false;
        }
        break;
      case "Subjet":
        if (input.length >= 10) {
          setSubjectValid(true);
          setErros({
            ...Erros,
            Subjet: "",
          });
        } else {
          setErros({
            ...Erros,
            Subjet: "Subject Should not be less than 10",
          });
          setSubjectValid(false);
          return false;
        }
        break;
      default:
        console.log("duzgun alan secilmeyib");
    }
    CheckValidationsBolen = true;
    return CheckValidationsBolen;
  };

  // end validations
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setSentMailInput({
      ...SentMailInput,
      [name]: value,
    });
    CheckValidations(name, value);
  };

  const SendMailAxios = async () => {
    try {
      const sendMail = await axios.get(
        `http://localhost:5555/send-Email?comment=${SentMailInput.Comment}&name=${SentMailInput.Name}&email=${SentMailInput.Email}&subject=${SentMailInput.Subjet}`
      );
      if (sendMail.status === 200) {
        setsubjectSend(true);
        setTimeout(() => {
          setsubjectSend(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ClickBtnSend = async (e) => {
    e.preventDefault();
    CheckValidations("Name", SentMailInput.Name);
    CheckValidations("Comment", SentMailInput.Comment);
    CheckValidations("Email", SentMailInput.Email);
    CheckValidations("Subjet", SentMailInput.Subjet);

    const isAnyError =
      Erros.Name || Erros.Comment || Erros.Email || Erros.Subjet;

    if (!isAnyError) {
      SendMailAxios();
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <section>
      <HeaderNavBottom
        CllasNameAny="bg-HeaderNavBottom-fon-Contacts w-full h-[440px]"
        H1="Contacts"
      />
      <div className="py-[100px] container mx-auto">
        <div className="flex flex-row justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-71.1234567!3d42.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a77eb0eef5%3A0x39b81f6720fe5072!2sSample%20Location!5e0!3m2!1sen!2sus!4v1234567890123"
            className="h-[480px] w-[100%]"
          ></iframe>
        </div>
        <div className="pt-[60px]">
          <h4 className="text-[#00095E] text-[27px] font-semibold">
            Get in Touch
          </h4>
          <div className="flex flex-row max-md:flex-col max-md:items-center justify-between space-x-40 max-md:space-x-0">
            <div className="basis-4/6 ">
              <div className="pt-[20px]">
                <textarea
                  value={SentMailInput.Comment}
                  onChange={handleChangeInput}
                  placeholder="Travle Comment"
                  name="Comment"
                  id="Comment"
                  cols="20"
                  rows="5"
                  className={`block w-full h-[200px] p-[10px] rounded-md    text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400    sm:text-sm sm:leading-6 ${
                    CommentValid
                      ? "border-[2px] border-green-700 shadow-lg shadow-green-500/50"
                      : "border-[2px] border-red-700 "
                  }`}
                ></textarea>
                {Erros.Comment && (
                  <div className="text-red-500 pt-[10px]">{Erros.Comment}</div>
                )}
              </div>
              <div className="pt-[30px] space-x-4 flex flex-row ">
                <div className="basis-3/6">
                  <input
                    value={SentMailInput.Name}
                    onChange={handleChangeInput}
                    type="text"
                    name="Name"
                    id="Name"
                    className={`block w-full  p-[10px] rounded-md border-0   text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 
                    ${
                      NameValid
                        ? "border-[2px] border-green-700 shadow-lg shadow-green-500/50"
                        : ""
                    } 
                    `}
                    placeholder="Ener Your Name"
                    required=""
                  />
                  {Erros.Name && (
                    <div className="text-red-500 pt-[10px]">{Erros.Name}</div>
                  )}
                </div>
                <div className="basis-3/6">
                  <input
                    value={SentMailInput.Email}
                    onChange={handleChangeInput}
                    type="email"
                    name="Email"
                    id="Email"
                    className={`block w-full  p-[10px] rounded-md border-0   text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                      EmailValid
                        ? "border-[2px] border-green-700 shadow-lg shadow-green-500/50"
                        : ""
                    }`}
                    placeholder="Ener Your Email"
                    required=""
                  />
                  {Erros.Email && (
                    <div className="text-red-500 pt-[10px]">{Erros.Email}</div>
                  )}
                </div>
              </div>
              <div className="pt-[30px]">
                <div className="basis-3/6">
                  <input
                    onChange={handleChangeInput}
                    type="text"
                    name="Subjet"
                    id="Subjet"
                    className={`block w-full  p-[10px] rounded-md border-0   text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                      SubjectValid
                        ? "border-[2px] border-green-700 shadow-lg shadow-green-500/50"
                        : ""
                    }`}
                    placeholder="Ener Subjet"
                    required=""
                    value={SentMailInput.Subjet}
                  />
                  {Erros.Subjet && (
                    <div className="text-red-500 pt-[10px]">{Erros.Subjet}</div>
                  )}
                </div>
              </div>
              <div className="pt-[30px]">
                <button
                  onClick={ClickBtnSend}
                  className="text-[18px] tracking-[4px] bg-transparent hover:bg-blue-300 text-blue-700  transition-all hover:text-white py-[20px] px-[40px] border border-blue-500 hover:border-transparent rounded"
                >
                  Send
                </button>
              </div>
            </div>
            <div className="basis-2/6 flex flex-col max-md:pt-[50px]">
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
                  <span className="text-slate-400">Mon to Fri 9am to 6pm</span>
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
      </div>
      {subjectSend && (
        <div className="absolute w-[100%] h-[100%] flex flex-col justify-center items-center top-0">
          <div className="fixed z-50  w-[50%] h-[50%] flex flex-col justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9840/9840917.png"
              alt=""
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contacts;
