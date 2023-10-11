import React from "react";

import img2 from "../../assets/slide2.png";
import img3 from "../../assets/slide3.png";
import img4 from "../../assets/slide4.png";
import img5 from "../../assets/slide5.png";
import img6 from "../../assets/slide6.png";

function slide() {
  return (
    <main className="relative flex flex-col justify-center bg-dorange overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-6 py-5">
        <div className="text-center">
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li>
                <img src={img2} alt="" />
              </li>
              <li>
                <img src={img3} alt="" />
              </li>
              <li>
                <img src={img4} alt="" />
              </li>
              <li>
                <img src={img5} alt="" />
              </li>
              <li>
                <img src={img6} alt="" />
              </li>

              <li>
                <img src={img2} alt="" />
              </li>
              <li>
                <img src={img3} alt="" />
              </li>
              <li>
                <img src={img4} alt="" />
              </li>
              <li>
                <img src={img5} alt="" />
              </li>
              <li>
                <img src={img6} alt="" />
              </li>
            </ul>
            <ul
              x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li>
                <img src={img2} alt="" />
              </li>
              <li>
                <img src={img3} alt="" />
              </li>
              <li>
                <img src={img4} alt="" />
              </li>
              <li>
                <img src={img5} alt="" />
              </li>
              <li>
                <img src={img6} alt="" />
              </li>

              <li>
                <img src={img2} alt="" />
              </li>
              <li>
                <img src={img3} alt="" />
              </li>
              <li>
                <img src={img4} alt="" />
              </li>
              <li>
                <img src={img5} alt="" />
              </li>
              <li>
                <img src={img6} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default slide;
