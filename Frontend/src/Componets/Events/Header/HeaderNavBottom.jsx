import React from "react";

const HeaderNavBottom = ({ CllasNameAny, H1 }) => {
  return (
    <section
      className={`${CllasNameAny} flex flex-col items-center justify-center w-full`}
    >
      <h1 className=" text-[52px] text-[white] font-bold">{H1}</h1>
    </section>
  );
};

export default HeaderNavBottom;
