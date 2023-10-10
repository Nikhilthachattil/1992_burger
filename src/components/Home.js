import React from "react";
import img3 from "../assets/20.png";
import Card from "./cards/card";
import Dipp from "./cards/Dipp";
import ScrollTop from "./buttons/ScrollTop";
import Slide from "./pages/slide";
import ItemCards from "./cards/itemCards";
import data from "./Data/data";
import TheMenu from "./pages/theMenu";
import Slide2 from "./pages/slide2";
import img4 from "../assets/leftchevron.png";
import img5 from "../assets/rightchevron.png";

function Home() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="   bg-dorange ">
      <div className="relative md:flex lg:flex-1 md:justify-between md:mb-20 ">
        <div className="hidden md:flex w-full h-full md:py-20 md:mx-10 md:mb-4 animate-seesaw">
          <img className=" " src={img3} alt="" />
        </div>
        <div className="md:mx-15  ">
          <div className="relative md:mx-12 px-10 md:pt-20 md:py-20 text-center justify-center items-center md:rounded-full">
            <h1 className="drop-shadow-inner  text-dcream text-center text-[50px] md:text-[90px] font-thin font-burger ">
              1992
            </h1>
            <h2 className="font-burger text-dcream md:text-[16px] text-[15px] ">
              - Feel Happiness -
            </h2>
            <h1 className="drop-shadow-inner  text-dcream text-[40px] md:text-[90px] font-thin font-burger ">
              BURG<span className="text-claret">E</span>R
            </h1>
          </div>
        </div>
        <div className="md:w-full px-10 h-full py-20 md:mx-10 md:mb-4 md:animate-seesaw">
          <img className=" md:rounded-full" src={img3} alt="" />
        </div>
      </div>
      <div className="text-center bg-dorange">
        <h1 className="font-burger text-dcream my-5 mx-5 text-[50px] md:text-[60px]">
          --The Me<span className="text-claret ">n</span>u--
        </h1>
      </div>
      <div className="relative flex items-center cursor-pointer  ">
        <img
          src={img4}
          alt="left"
          className="absolute z-50 w-[50px] p-1 md:w-[70px] md:h-[70px] bg-none left-2 md:p-3 border-2 border-dcream rounded-full mx-5 backdrop-blur-3xl"
          onClick={slideLeft}
        />
        <div
          id="slider"
          className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          <TheMenu />
        </div>
        <img
          src={img5}
          alt="right"
          className="absolute z-50 w-[50px] p-1 md:w-[70px] md:h-[70px] right-2 md:p-3 border-2 border-dcream rounded-full mx-5 backdrop-blur-3xl"
          onClick={slideRight}
        />
      </div>
      <div className="relative text-[50px] md:text-[60px] font-thin font-Poppins justify-center text-center text-dcream bg-dorange">
        <h1 className="font-burger my-2 mx-5 ">
          Special Offe<span className="text-claret">r</span>s
        </h1>
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Slide />
      </div>
      <div>
        <Dipp />
      </div>
      <div>
        <ScrollTop />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3">
        {data.productData.map((item, index) => {
          return (
            <ItemCards
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index}
            />
          );
        })}
      </div>
      <div>
        <Slide2 />
      </div>
    </div>
  );
}

export default Home;
