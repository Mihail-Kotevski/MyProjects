import React from "react";
import Button from "./Button";
import { pricing } from "../constants";
import { check } from "../assets";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((el, i) => (
        <div
          key={i}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{el.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {el.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {el.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {el.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={el.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!el.price}
          >
            {el.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {el.features.map((feature, i) => (
              <li key={i} className="flex items-start py-5 border-t border-n-6">
                <img src={check} alt="Check" width={24} height={24} />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
