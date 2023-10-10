import React from "react";
import img1 from "../../assets/hamburger2.png";

function Dipp() {
  return (
    <div>
      <section className="md:flex md:flex-1 md:py-14 md:divide-x-2 bg-dcream text-dorange w-full h-full justify-around gap-2 font-burger">
        <div className="text-start justify-start md:px-10 mx-2">
          <h1 className="md:text-[25px] uppercase py-5">Sides</h1>
          <ul className="md:text-[20px]">
            <li className="py-4">
              <span className="text-mgreen">&hearts;</span> Supercrunchy fries
              -------------- $15
            </li>
            <li className="py-4">
              <span className="text-mgreen">&hearts;</span> Supercrunchy fries
              -------------- $15
            </li>
            <li className="py-4">
              <span className="text-mgreen">&hearts;</span> Supercrunchy fries
              -------------- $15
            </li>
            <li className="py-4">
              <span className="text-mgreen">&hearts;</span> Supercrunchy fries
              -------------- $15
            </li>
            <li className="py-4">
              <span className="text-mgreen">&hearts;</span> Supercrunchy fries
              -------------- $15
            </li>
            <li className="py-4">
              <span className="text-mgreen">&hearts;</span> Supercrunchy fries
              -------------- $15
            </li>
            <li className="py-4">
              <span className="text-mgreen">&hearts;</span> Supercrunchy fries
              -------------- $15
            </li>
          </ul>
          <div className="flex flex-row py-10 px-5">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="flex-col md:px-10 px-2 text-dorange">
          <div>
            <h1 className="py-5 md:text-[30px]">Dipping Sauces</h1>
            <ul className="md:text-[20px]">
              <li className="py-4">
                <span className="text-mgreen px-1">&hearts;</span>
                Coriander-Mayonneise ------------ $10
              </li>
              <li className="py-4">
                <span className="text-mgreen px-1">&hearts;</span>
                Coriander-Mayonneise ------------ $10
              </li>
              <li className="py-4">
                <span className="text-mgreen px-1">&hearts;</span>
                Coriander-Mayonneise ------------ $10
              </li>
              <li className="py-4">
                <span className="text-mgreen px-1">&hearts;</span>
                Coriander-Mayonneise ------------ $10
              </li>
              <li className="py-4">
                <span className="text-mgreen px-1">&hearts;</span>
                Coriander-Mayonneise ------------ $10
              </li>
              <li className="py-4">
                <span className="text-mgreen px-1">&hearts;</span>
                Coriander-Mayonneise ------------ $10
              </li>
              <li className="py-4">
                <span className="text-mgreen px-1">&hearts;</span>
                Coriander-Mayonneise ------------ $10
              </li>
            </ul>
          </div>
          <div>
            <h1 className="py-5 md:text-[30px]">Desserts</h1>
            <ul className="md:text-[20px] py-2 font-thin">
              <li className="py-4">
                <span className="text-mgreen px-1">&hearts;</span>
                Coriander-Mayonneise ------------ $10
              </li>
              <li className="py-4">
                <span className="text-mgreen px-1">&hearts;</span>
                Coriander-Mayonneise ------------ $10
              </li>
              <li className="py-4">
                <span className="text-mgreen px-1">&hearts;</span>
                Coriander-Mayonneise ------------ $10
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dipp;
