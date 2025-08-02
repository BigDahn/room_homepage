import React from "react";

function Footer() {
  return (
    <main className="grid grid-cols-4 grid-row-[266px]  h-[20%] font-league-spartan">
      <div className=" bg-[url(/image-about-dark.jpg)] bg-cover bg-no-repeat ">
        2
      </div>
      <div className=" col-span-2  px-[3rem] py-7 flex flex-col gap-3">
        {" "}
        <h1 className="text-[16px] font-bold tracking-[7px] leading-[22px] uppercase">
          About Our Furniture
        </h1>
        <p className="text-[16px] font-medium tracking-tighter text-gray-400 leading-[140%] max-w-[484px]">
          {" "}
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className=" bg-[url(/image-about-light.jpg)] bg-cover bg-no-repeat">
        2
      </div>
    </main>
  );
}

export default Footer;
