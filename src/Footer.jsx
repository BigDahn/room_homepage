import React from "react";

function Footer() {
  return (
    <main className="grid lg:grid-cols-4 grid-row-[266px] gap-[3rem] lg:gap-1  lg:h-[20%] font-league-spartan pt-[3rem] lg:pt-0">
      <div className=" bg-[url(/image-about-dark.jpg)] bg-cover bg-no-repeat h-[238px] md:h-[400px] lg:h-full "></div>
      <div className=" lg:col-span-2  px-[2rem] lg:px-[3rem] py-7 flex flex-col gap-3">
        {" "}
        <h1 className="lg:text-[16px] text-[14px] font-bold tracking-[5.8px] lg:tracking-[7px] leading-[22px] uppercase">
          About Our Furniture
        </h1>
        <p className="text-[16px] font-medium tracking-tighter text-gray-400 leading-[140%] lg:max-w-[484px]">
          {" "}
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className=" bg-[url(/image-about-light.jpg)] bg-cover bg-no-repeat h-[227px] md:h-[400px] lg:h-full"></div>
    </main>
  );
}

export default Footer;
