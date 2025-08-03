import { useWindowSize } from "@react-hook/window-size";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const hero = [
  {
    image: "bg-[url(/desktop-image-hero-1.jpg)]",
    heading: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: "bg-[url(/desktop-image-hero-2.jpg)]",
    heading: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: "bg-[url(/desktop-image-hero-3.jpg)]",
    heading: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const MobileHero = [
  {
    image: "bg-[url(/mobile-image-hero-1.jpg)]",
    heading: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: "bg-[url(/mobile-image-hero-2.jpg)]",
    heading: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: "bg-[url(/mobile-image-hero-3.jpg)]",
    heading: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
function Hero() {
  const [index, setIndex] = useState(0);
  const [HeroImage, setHeroImage] = useState(hero[index]);
  const { image, heading, description } = HeroImage;

  const [width] = useWindowSize();

  useEffect(() => {
    if (width <= 400) {
      setHeroImage(MobileHero[index]);
    }
  }, [width, index]);

  const increaseIndex = () => {
    setIndex((index) => (index === 2 ? 2 : index + 1));
    if (width <= 400) {
      setHeroImage(MobileHero[index]);
    } else {
      setHeroImage(hero[index]);
    }
  };

  const decreaseIndex = () => {
    setIndex((index) => (index === 0 ? 0 : index - 1));
    if (width <= 400) {
      setHeroImage(MobileHero[index]);
    } else {
      setHeroImage(hero[index]);
    }
  };

  return (
    <main className="grid lg:grid-cols-3  grid-row-[534px] lg:gap-0 gap-[3rem] lg:h-[80%]  font-league-spartan">
      <Modal>
        {" "}
        <div
          className={`lg:col-span-2  bg-cover bg-top-left lg:bg-center bg-no-repeat ${image} w-[100%] h-[360px] lg:h-full flex`}
        >
          <div className="flex items-start  lg:items-center gap-[7rem]  lg:gap-[4rem] py-[2.4rem] lg:py-[2rem] px-[2rem] lg:px-[4rem] lg:h-[30px] w-full ">
            <Modal.OpenModal opens="modal">
              <button className="flex items-start lg:hidden">
                <img src="/icon-hamburger.svg" />
              </button>
            </Modal.OpenModal>

            <div className="flex   w-full lg:w-fit justify-center lg:justify-start">
              <img src="/logo.svg" />
            </div>
            <ul className="text-[16px] font-semibold text-white hidden lg:flex gap-[2rem] items-center  h-[30px]">
              <li className=" hover:border-b-2  cursor-pointer  h-[27px]">
                <p> home</p>
                {/** <div className="border-b-2"></div> */}
              </li>
              <li className=" hover:border-b-2  cursor-pointer  h-[27px]">
                shop
              </li>
              <li className=" hover:border-b-2  cursor-pointer  h-[27px]">
                about
              </li>
              <li className=" hover:border-b-2  cursor-pointer  h-[27px]">
                contact
              </li>
            </ul>
          </div>
          <div className="flex justify-end items-end lg:hidden ">
            <button
              className="bg-black w-[56px] h-[56px] flex items-center justify-center cursor-pointer"
              onClick={decreaseIndex}
            >
              <img src="/icon-angle-left.svg" />
            </button>
            <button
              className="bg-black w-[56px] h-[56px] flex items-center justify-center cursor-pointer"
              onClick={increaseIndex}
            >
              <img src="/icon-angle-right.svg" />
            </button>
          </div>
        </div>
        <div className="  flex flex-col lg:gap-9 items-start justify-between">
          <div className="flex flex-col gap-6 lg:gap-7 items-start px-[2rem] lg:px-[1.3rem] justify-center h-full">
            <h1 className=" text-[30px] lg:text-[40px] leading-[100%] lg:leading-[90%] font-semibold font-league-spartan">
              {" "}
              {heading}
            </h1>
            <p className="text-[16px] leading-[140%] font-medium tracking-[-0.5px] ">
              {description}
            </p>
            <div className="flex gap-3 items-center">
              <h3 className="tracking-[12.5px] leading-[100%] font-medium text-[15px]">
                SHOP NOW
              </h3>{" "}
              <img src="/icon-arrow.svg" />
            </div>
          </div>
          <div className="hidden lg:flex lg:items-end  lg:justify-end">
            <button
              className="bg-black w-[80px] h-[80px] flex items-center justify-center cursor-pointer"
              onClick={decreaseIndex}
            >
              <img src="/icon-angle-left.svg" />
            </button>
            <button
              className="bg-black w-[80px] h-[80px] flex items-center justify-center cursor-pointer"
              onClick={increaseIndex}
            >
              <img src="/icon-angle-right.svg" />
            </button>
          </div>
        </div>
        <Modal.Window name="modal">
          <div>
            <ul className="text-[16px] font-semibold text-black flex gap-4 md:gap-[2rem] items-center  ">
              <li className=" hover:border-b-2  cursor-pointer  ">
                <p> home</p>
                {/** <div className="border-b-2"></div> */}
              </li>
              <li className=" hover:border-b-2  cursor-pointer  ">shop</li>
              <li className=" hover:border-b-2  cursor-pointer  ">about</li>
              <li className=" hover:border-b-2  cursor-pointer ">contact</li>
            </ul>
          </div>
        </Modal.Window>
      </Modal>
    </main>
  );
}

export default Hero;
// relative right-[20px] top-[182px]
