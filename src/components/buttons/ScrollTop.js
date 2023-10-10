import React from "react";
import { useState, useEffect } from "react";
import img1 from "../../assets/menubar2.png";

function ScrollTop() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <div className="z-50 fixed h-[50px] w-[50px] md:h-[100px] md:w-[100px] p-1 md:p-3 border-2 border-dcream rounded-full mx-5 backdrop-blur-3xl right-1 bottom-28 cursor-pointer">
          <img src={img1} alt="" onClick={scrollUp} />
        </div>
      )}
    </div>
  );
}

export default ScrollTop;
