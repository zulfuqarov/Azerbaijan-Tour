import React, { useState, CSSProperties } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
const override = CSSProperties;

const AdminRegister = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [color, setcolor] = useState("#00000");
  const [error, seterror] = useState(null);
  const [Register, setRegister] = useState([]);
  const [RegisterInput, setRegisterInput] = useState({
    UserName: "",
    UserEmail: "",
    UserPassword: "",
    UserPhoneNumber: "",
    UserImage: "",
  });

  const InputHandleChange = (e) => {
    const { name, value } = e.target;
    setRegisterInput({
      ...RegisterInput,
      [name]: value,
    });
  };
  const RegisterBtn = async (e) => {
    e.preventDefault();
    const NewPostAdminRegister = {
      InputName: RegisterInput.UserName,
      InputEmail: RegisterInput.UserEmail,
      InputPassword: RegisterInput.UserPassword,
      InputPhoneNumber: RegisterInput.UserPhoneNumber,
      InputAdminFoto: RegisterInput.UserImage,
    };
    await PostRegisterAdmin(NewPostAdminRegister);
  };

  const PostRegisterAdmin = async (Body) => {
    setloading(true);
    try {
      const PostRegister = await axios.post(
        "http://localhost:5555/Register-Admin",
        Body
      );
      console.log(PostRegister.data);
      if (PostRegister.status === 200) {
        console.log("You have successfully passed the registration.");
        navigate("/Admin-Sign");
      }
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(error);
    }
  };
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
  if (error) {
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center ">
        <p>An error occurred during the installation.</p>
        <h1>{error.response.data.message}</h1>
        <button
          className="w-[200px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-yellow-500"
          onClick={() => window.location.reload()}
        >
          Back
        </button>
      </div>
    );
  }
  return (
    <header>
      <section className="bg-gray-50 dark:bg-gray-900 pt-[70px] h-[130vh]">
        <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://th.bing.com/th/id/R.d94926ea4a91d1be53b522c45c61dadd?rik=c9k2B5b8Hk8SmQ&pid=ImgRaw&r=0"
              alt="logo"
            />
            ADMIN
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="UserName"
                    id="UserName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                    required=""
                    onChange={InputHandleChange}
                    value={RegisterInput.UserName}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="UserEmail"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={InputHandleChange}
                    value={RegisterInput.UserEmail}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="UserPassword"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={InputHandleChange}
                    value={RegisterInput.UserPassword}
                  />
                </div>
                <div>
                  <label
                    for="Number -tel"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Number -tel
                  </label>
                  <input
                    type="Number -tel"
                    name="UserPhoneNumber"
                    id="Number"
                    placeholder="XXX-XXX"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={InputHandleChange}
                    value={RegisterInput.UserPhoneNumber}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-yellow-500"
                  onClick={RegisterBtn}
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/Admin-Sign"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default AdminRegister;
