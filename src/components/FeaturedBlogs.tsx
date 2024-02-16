import React from "react";
import { IBlogs } from "../interfaces/types";
import BlogItem from "./BlogItem";
interface Props {
  data: IBlogs[];
}
const FeaturedBlogs: React.FC<Props> = ({ data }) => {
  return (
    <section className="sec-blog bg0 p-t-60 p-b-90">
      <div className="container">
        <div className="p-b-66">
          <h3 className="ltext-105 cl5 txt-center respon1">Our Blogs</h3>
        </div>
        <div className="row">
          {data.map((el) => (
            <BlogItem key={el.id} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
