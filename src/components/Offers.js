import React from "react";
import data from "./Data/data";
import OfferCards from "./cards/offerCards";

function Offers() {
  return (
    <section>
      <div>
        {data.productData2.map((item, index) => {
          return (
            <OfferCards
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
    </section>
  );
}

export default Offers;
