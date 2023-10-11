import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../assets/17.jpg";
import img2 from "../../assets/12.jpg";
import img3 from "../../assets/18.jpg";
import img4 from "../../assets/14.jpg";
import img5 from "../../assets/15.jpg";
import img6 from "../../assets/16.jpg";

const Card = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };
  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };
  const cardImages = [img1, img2, img3, img4, img5, img6];
  const cardDescriptions = [
    "this is a description, write whatever you need here,",
    "this is a description, write whatever you need here,",
    "this is a description, write whatever you need here,",
  ];
  return (
    <section className="py-4 pb-[100px] bg-dorange text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-burger text-dcream md:text-[30px] my-2">
          <h2 className="">
            - Feel the Taste of Happine<span className="text-claret">s</span>s -
          </h2>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-2 items-center align-middle text-center mx-5 ">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer md:h-[400px] bg-cover bg-center rounded-[20px] ${
              index === expandedIndex ? "expanded" : ""
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end gap-2 ">
              <div className="card-footer rounded-[20px] md:rounded-b-[20px] bg-claret bg-opacity-30 md:bg-opacity-50 min-h-[100px] flex flex-col items-center justify-center text-center align-middle drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                <h2 className="md:text-xl font-semibold text-dorange text-center ">
                  Special <span className="hidden">{index + 1}</span> $20
                </h2>
                <p
                  className={`border-[1px] text-dcream my-2 px-5  rounded-[10px] ${
                    index === expandedIndex ? "hidden" : ""
                  }
            `}
                >
                  More
                </p>
                {index === expandedIndex && (
                  <p className="mt-2 text-dcream  text-xs px-10 mx-2 ">
                    {cardDescriptions}
                  </p>
                )}
                {index === expandedIndex && (
                  <NavLink to="/Profile">
                    <div
                      href="#download"
                      className="px-8 py-2 my-2 text-dcream font-burger font-thin md:text-lg mb-5 border-2 border-dcream rounded-3xl"
                    >
                      Click Here
                    </div>
                  </NavLink>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Card;
