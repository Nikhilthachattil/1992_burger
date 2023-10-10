import React from "react";
import img1 from "../assets/15.jpg";
import img2 from "../assets/burgermenucontact.png";
import img7 from "../assets/facbooklogoorange.png";
import img8 from "../assets/whatsapp-orange.png";
import img9 from "../assets/behance-orange.png";
import img10 from "../assets/instagram-orange.png";
import img11 from "../assets/linkedin-orange.png";

function contact() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("submited");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxOtlAL6fO3FFw1FfN6IhMWoZ41Jt8G-RTIRUI2FxE8ZDAFaoY-_FtmBzOjly7AcSoa/exec",
      { method: "POST", body: formData }
    );
  }
  return (
    <section className="flex flex-col place-content-center mb-10">
      <div className="font-thin font-burger text-2xl text-dorange py-2">
        <h1 className="px-5">Contact : </h1>
      </div>
      <div className="relative block text-xs py-5 mx-5  md:m-1 md:mx-5 md:flex md:flex-wrap md:gap-5  text-dgreen backdrop-blur-lg place-content-center bg-claret lg:mx-12 rounded-xl md:rounded-[50px]">
        <div className="text-center align-middle  justify-center flex py-5">
          {" "}
          <img src={img2} alt="" className="h-12" />
        </div>
        <div className="md:flex-col mx-5  md:w-2/6 gap-2 md:px-6  bg-dcream shadow-inner backdrop-blur-lg rounded-xl">
          <h1 className="text-claret py-5 md:text-2xl mx-5">THANK YOU</h1>
          <img src={img1} alt="" className="rounded-3xl p-5" />
        </div>
        <div className="bg-dcream my-2 md:py-9 xs:m-5 md:m-1 flex md:flex-col justify-between md:gap-10 px-2 w-fit mx-auto lg:mx-5 text-justify place-content-center rounded-xl">
          <a
            href="https://www.facebook.com/thachattilnikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream rounded-full shadow-2xl p-1"
              src={img7}
              alt=""
            />
          </a>

          <a
            href=" https://wa.me/+918907117188"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
              src={img8}
              alt=""
            />
          </a>
          <a
            href="https://www.behance.net/thachattilnikhil"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
              src={img9}
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/nikhilbabuthachattil/"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
              src={img10}
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-babu-thachattil-058158284/"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              className="w-10 h-10 bg-dcream  shadow-2xl p-1"
              src={img11}
              alt=""
            />
          </a>
        </div>
        <form
          className="text-dcream bg-dcream block rounded-2xl py-2 px-10 mx-5 justify-center text-md text-center"
          onSubmit={(e) => Submit(e)}
        >
          <div class="flex flex-wrap text-justify md:gap-6 justify-between">
            <label htmlfor="name" class="py-4 text-dblack">
              Name:
            </label>
            <input
              name="your-name"
              type="text"
              id="number"
              placeholder="Full Name"
              class=" rounded-[20px] place-content-end  bg-claret py-2 my-2 px-4  outline-none "
            />
          </div>
          <div class="flex flex-wrap text-justify justify-between">
            <label htmlfor="name" class="py-4 text-dblack">
              Phone:
            </label>
            <input
              type="phonenumber"
              name="your-number"
              id="name"
              placeholder="Phone Number"
              class=" rounded-[20px] place-content-end  bg-claret py-2 my-2 px-4  outline-none "
            />
          </div>
          <div class="flex flex-wrap text-justify justify-between">
            <label htmlfor="name" class="py-4 text-dblack">
              Email:
            </label>
            <input
              type="text"
              name="your-email"
              id="name"
              placeholder="username@domain.com"
              class=" rounded-[20px] place-content-end bg-claret py-2 my-2 px-4  outline-none "
            />
          </div>
          <div class="flex flex-wrap text-justify justify-between">
            <label htmlfor="name" class="py-4 text-dblack">
              Subject:
            </label>
            <input
              type="text"
              name="your-subject"
              id="name"
              placeholder="Subject"
              class=" rounded-[20px] place-content-end bg-claret py-2 my-2 px-4  outline-none "
            />
          </div>

          <div class="relative mb-2">
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Your Message"
              class="md:w-full w-full my-2 bg-claret rounded-xl text-center resize-none"
              required
            ></textarea>
          </div>
          <div className="">
            <button
              class="bg-claret hover:bg-blue-700 text-dcream font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div>
            <h1 className="text-dorange py-4 md:text-2xl mx-5 font-burger">
              1992 Burger
            </h1>
            <p className="text-claret py-2">
              Phone: +971551227158, +918907117188
            </p>
            <a
              href="mailto:thachattilnikhil@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer text-claret py-2"
            >
              1992burger@gmail.com
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default contact;
