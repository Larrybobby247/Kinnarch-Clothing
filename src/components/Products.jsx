import {
  faArrowCircleRight,
  faArrowLeft,
  faArrowRight,
  faNairaSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { ProductLists } from "./ProductLists";

const Products = () => {
  return (
    <div id="store">
      <div className="flex flex-col gap-2 text-center mb-12">
        <h1 className="text-3xl font-bold">Recent Designs</h1>
        <p className="text-grey">View our collections of recent luxery designs</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {ProductLists.map((product) => {
          return (
            <div
              key={product.id}
              className="shadow-lg rounded-lg"
              data-aos="fade-right"
            >
              <img
                src={product.image}
                alt=""
                className="rounded-lg h-[360px] w-full object-cover"
              />
              <div className="flex flex-col gap-4 my-6 mx-2">
                {/* <h3 className="text-2xl font-bold">{product.name}</h3> */}
                {/* <p className="text-grey">{product.category}</p> */}
                <div className="flex gap-4">
                  <button className="btn-primary w-full text-center">
                    <a href="https://wa.me/2349020419489">Book For Design</a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
