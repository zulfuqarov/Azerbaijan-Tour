import React, { useEffect, useContext, useState, CSSProperties } from "react";
import HeaderNavBottom from "../Events/Header/HeaderNavBottom";
import { TravleContext } from "../../App";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const override = CSSProperties;

const Comment = () => {
  const context = useContext(TravleContext);
  const [display, setdisplay] = useState({});
  const [likeCounts, setLikeCounts] = useState({});
  const [AddComment, setAddComment] = useState({});
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
  const [color, setcolor] = useState("#00000");
  const [succes, setsucces] = useState(null);
  const [BlogComment, setBlogComment] = useState({
    Name: "",
    Comment: "",
    BlogId: "",
  });
  const [GetComment, setGetComment] = useState({});
  // paginations start
  const itemsPerPage = 2;
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
  // paginations end

  useEffect(() => {
    const fetchData = async () => {
      await context.getTravle();
      idgetir();
      setloading(false);
    }
    fetchData()
  }, []);

  const HandleChangeComment = (e) => {
    const { name, value } = e.target;
    setBlogComment({
      ...BlogComment,
      [name]: value,
    });
  };

  const sendCommentPost = async (body, id) => {
    try {
      const PostComment = await axios.post(
        `http://localhost:5555/Blog-Comment?Id=${id.BlogId}`,
        body
      );
      getCommentBtn(id.BlogId);
      if (PostComment.status === 200) {
        console.log("cooment ugurla gonderildi!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendCommentBtn = async (e, id) => {
    e.preventDefault();
    const updatedBlogComment = {
      ...BlogComment,
      BlogId: id,
    };

    const PostBody = {
      BlogCommentNama: BlogComment.Name,
      BlogCommentMessage: BlogComment.Comment,
    };
    await sendCommentPost(PostBody, updatedBlogComment);
  };

  const getCommentBtn = async (id) => {
    try {
      const GetCommentAxios = await axios.get(
        `http://localhost:5555/Blog-Comment?Id=${id}`
      );
      setGetComment((CopyGetComment) => ({
        ...CopyGetComment,
        [id]: GetCommentAxios.data,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const idgetir = () => {
    context.getTravleCard.map((Travle) => {
      console.log(Travle._id);
      getCommentBtn(Travle._id);
    });
  };

  const DisplayCommentBtn = (point) => {
    setdisplay((CopyDisplay) => ({
      ...CopyDisplay,
      [point]: !CopyDisplay[point],
    }));
  };

  const IncreaseCountLike = (index) => {
    setLikeCounts((prevCounts) => {
      const currentCount = prevCounts[index] || 0;
      if (currentCount === 0) {
        return {
          ...prevCounts,
          [index]: 1,
        };
      } else {
        return {
          ...prevCounts,
          [index]: currentCount - 1,
        };
      }
    });
  };

  const AddCommentBtn = (point) => {
    setAddComment((CopyAddComment) => ({
      ...CopyAddComment,
      [point]: !CopyAddComment[point],
    }));
  };




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
    <section>
      <HeaderNavBottom
        CllasNameAny="bg-HeaderNavBottom-fon-Blog w-full h-[440px]"
        H1="Comment"
      />
      <div className="py-[70px] container mx-auto ">
        <div className="flex flex-row max-lg:justify-center space-x-10">
          <div className="basis-3/6">
            <h1 className="text-[26px] text-gray-500 font-extrabold max-lg:text-center max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px]">
              You can share your thoughts and provide feedback about the tour,
              whether it was good or bad, by writing your comments here. Your
              opinions on what was good or bad are valuable to us, and your
              feedback matters to us.And, express what would make you happier in
              the future, like any new additions or features you would
              appreciate
            </h1>
          </div>
          <div className="Comment-bg-fon  basis-3/6 max-lg:hidden"></div>
        </div>
      </div>
      <div className="flex flex-row max-md:flex-col space-x-10 pb-[70px] container mx-auto">
        <div className=" basis-4/6">
          {currentItems &&
            currentItems.map((Travle, index) => (
              <div
                key={index}
                className="mb-[30px] border-solid border-[1px] border-gray-300 rounded-lg"
              >
                <div>
                  <img className="rounded-lg" src={Travle.TravleImg} alt="" />
                </div>
                <div className="py-[15px] px-[20px]">
                  <p className="text-[22px]  text-gray-800 font-semibold tracking-wide">
                    {Travle.TravleName}
                  </p>
                </div>
                <div className="flex flex-row w-[330px] px-[20px] justify-between items-center text-gray-500">
                  <span>14.08.2018</span>
                  <button onClick={() => IncreaseCountLike(index)}>
                    <i
                      className={`fa-regular  fa-heart pr-[3px] ${likeCounts[index] ? "text-[red]" : ""
                        }`}
                    ></i>
                    <span>{likeCounts[index] || 0}</span>
                  </button>
                  <button onClick={() => DisplayCommentBtn(index)}>
                    <i className="fa-regular fa-comment"></i>
                  </button>
                  <span>3</span>
                  <i className="fa-solid fa-tag"></i>
                  <span>Madina Tour</span>
                </div>
                {display[index] && (
                  <div className="pt-[20px] px-[20px] pb-[20px]">
                    {Travle.TravleComment}
                    <div className="px-[20px] py-[30px] flex flex-row border-solid border-[1px] border-gray-300 mt-[20px] rounded-lg">
                      <div className="w-[10%] flex flex-col justify-center items-center">
                        <img
                          className="w-full"
                          src="https://cdn.onlinewebfonts.com/svg/img_132207.png"
                          alt=""
                        />
                      </div>
                      <div className="w-[90%] px-[30px]">
                        <h1 className="text-[22px] font-bold">Craig Murphy</h1>
                        <span className="text-gray-600">
                          Lorem Ipsn gravida nibh vel velit auctor
                          aliquet.Aenean sollicitudin, lorem quis bibendum auci
                          elit consequat ipsutis sem nibh id elit. Duis sed odio
                          sit amet nibh vulputate cursus a sit amet mauris.
                        </span>
                      </div>
                    </div>
                    {GetComment[Travle._id] &&
                      GetComment[Travle._id].map((Comment, index) => (
                        <div
                          key={index}
                          className="px-[20px] py-[30px] flex flex-row border-solid border-[1px] border-gray-300 mt-[20px] rounded-lg"
                        >
                          <div className="w-[10%] flex flex-col justify-center items-center">
                            <img
                              className="w-full"
                              src="https://cdn.onlinewebfonts.com/svg/img_132207.png"
                              alt=""
                            />
                          </div>
                          <div className="w-[90%] px-[30px]">
                            <h1 className="text-[22px] font-bold">
                              {Comment.PersonName}
                            </h1>
                            <span className="text-gray-600">
                              {Comment.BlogComment}
                            </span>
                          </div>
                        </div>
                      ))}

                    <button
                      onClick={() => AddCommentBtn(index)}
                      className="p-[10px] mt-[20px] transition-all hover:bg-slate-300 hover:text-black bg-black text-white"
                    >
                      Add Comment
                    </button>
                    {AddComment[index] && (
                      <div className="flex w-full flex-col  gap-6 pt-[30px]">
                        <div className=" h-10 w-[230px] ">
                          <input
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder="Enter Name"
                            value={BlogComment.Name}
                            name="Name"
                            onChange={HandleChangeComment}
                          />
                        </div>
                        <div className="w-full">
                          <textarea
                            onChange={HandleChangeComment}
                            value={BlogComment.Comment}
                            placeholder="Travle Comment"
                            name="Comment"
                            id=""
                            cols="20"
                            rows="5"
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          ></textarea>
                        </div>
                        <button
                          onClick={(e) => sendCommentBtn(e, Travle._id)}
                          className="p-[10px] mt-[20px] transition-all hover:bg-slate-300 hover:text-black bg-black text-white"
                        >
                          Send
                        </button>
                      </div>
                    )}
                  </div>
                )}
                <div className="pt-[20px] px-[20px] pb-[20px]">
                  <span className="text-[18px] text-gray-900 ">
                    {Travle.TravleComment}
                  </span>
                </div>
              </div>
            ))}
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
        </div>
        <div className=" basis-2/6">
          <div><h3 className="text-center text-[20px] pb-[30px] text-black font-semibold">Popular Post</h3></div>
          <div className="flex flex-col h-[400px] justify-between">
            <div className="flex flex-row w-[300px]">
              <div className="w-[130px] "><img className="w-[full] h-[97px]" src={context.getTravleCard[0].TravleImg} alt="" /></div>
              <p className="w-[87px] mx-auto my-auto">
                Experiences Through Education
              </p>
            </div>
            <div className="flex flex-row w-[300px]">
              <div className="w-[130px] "><img className="w-[full] h-[97px]" src={context.getTravleCard[1].TravleImg} alt="" /></div>
              <p className="w-[87px] mx-auto my-auto">
                Experiences Through Education
              </p>
            </div>
            <div className="flex flex-row w-[300px] ">
              <div className="w-[130px] "><img className="w-[full] h-[97px]" src={context.getTravleCard[2].TravleImg} alt="" /></div>
              <p className="w-[87px] mx-auto my-auto">
                Experiences Through Education
              </p>
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <button className="text-gray-500 focus:outline-none">
                <img className="w-[20px]" src="https://th.bing.com/th/id/R.445f2174d9b978e9cb0e91bf192bb937?rik=L%2fhyk4tZUbzcVg&pid=ImgRaw&r=0" alt="" />
              </button>
              <input type="text" className="w-full ml-2 bg-transparent focus:outline-none" placeholder="Search by voice..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
