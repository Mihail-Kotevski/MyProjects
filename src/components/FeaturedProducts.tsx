import React from "react";
import ProductItem from "./ProductItem";
import { IProduct } from "../interfaces/types";

interface Props {
  featuredProducts: IProduct[];
}

const FeaturedProducts: React.FC<Props> = ({ featuredProducts }) => {
  console.log(featuredProducts);
  return (
    <section className="sec-product bg0 p-t-100 p-b-50">
      <div className="container">
        <div className="p-b-32">
          <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
        </div>

        <div className="tab01">
          <div className="tab-content p-t-50">
            <div
              className="tab-pane fade show active"
              id="best-seller"
              role="tabpanel"
            >
              <div className="wrap-slick2">
                <div className="d-flex">
                  {featuredProducts.map((el) => (
                    <ProductItem
                      key={el.id}
                      id={el.id}
                      image={el.img}
                      title={el.title}
                      price={el.price}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
