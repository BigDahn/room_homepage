import React from "react";

function Hero() {
  return (
    <main className="grid grid-cols-3 grid-row-[534px] h-[80%]  font-league-spartan">
      <div className=" col-span-2 bg-[url(/desktop-image-hero-1.jpg)] bg-cover ">
        1
      </div>
      <div className="  flex flex-col gap-9 items-start justify-between">
        <div className="flex flex-col gap-7 px-[1.3rem] justify-center h-full">
          <h1 className="text-[48px] leading-[90%] font-semibold font-league-spartan">
            {" "}
            Discover innovative ways to decorate
          </h1>
          <p className="text-[16px] leading-[140%] font-medium tracking-[-0.5px] ">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <div className="flex gap-3 items-center">
            <h3 className="tracking-[12.5px] leading-[100%] font-medium text-[15px]">
              SHOP NOW
            </h3>{" "}
            <img src="public/icon-arrow.svg" />
          </div>
        </div>
        <div className="flex items-end  justify-end">
          <button className="bg-black w-[80px] h-[80px] flex items-center justify-center">
            <img src="public/icon-angle-left.svg" />
          </button>
          <button className="bg-black w-[80px] h-[80px] flex items-center justify-center">
            <img src="public/icon-angle-right.svg" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
// relative right-[20px] top-[182px]
