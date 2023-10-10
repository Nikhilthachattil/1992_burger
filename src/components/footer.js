import React from "react";
import img13 from "../assets/whatsapp-2.png";
import img14 from "../assets/behance-orange2.png";
import img15 from "../assets/instagram-orange2.png";
import img16 from "../assets/linkedin-orange2.png";
import img12 from "../assets/facbooklogo2.png";
function footer() {
  return (
    <footer>
      <nav className=" cursor-pointer mx-auto flex text-xs md:text-[16px] min-h-full w-full justify-between py-2 bg-dorange ">
        <h3 className="text-dcream mx-5 py-2 my-3 md:my-6 ">
          &#169; NikhilbabuThachattil
        </h3>
        <div className="flex gap-2 mx-5 my-3">
          <a
            href="https://www.facebook.com/thachattilnikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer py-2"
          >
            <img
              className="w-3 h-3 md:w-8 md:h-8 rounded-full m-1"
              src={img12}
              alt=""
            />
          </a>

          <a
            href=" https://wa.me/+918907117188"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer py-2"
          >
            <img className="w-3 h-3 md:w-8 md:h-8 m-1" src={img13} alt="" />
          </a>
          <a
            href="https://www.behance.net/thachattilnikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer py-2"
          >
            <img className="w-3 h-3 md:w-8 md:h-8 m-1" src={img14} alt="" />
          </a>
          <a
            href="https://www.instagram.com/nikhilbabuthachattil/"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer py-2"
          >
            <img className="w-3 h-3 md:w-8 md:h-8 m-1" src={img15} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-babu-thachattil-058158284/"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer py-2"
          >
            <img className="w-3 h-3 md:w-8 md:h-8 m-1" src={img16} alt="" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default footer;
