import React from "react";
import ProductItem from "./ProductItem";
import { IProduct } from "../interfaces/types";

interface Props {
  data: IProduct[];
}

const RelatedProducts: React.FC<Props> = ({ data }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {data.map((el) => (
              <ProductItem
                key={el.id}
                image={el.img}
                title={el.title}
                id={el.id}
                price={el.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
