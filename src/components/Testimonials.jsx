import React from "react";
import { Testimonies } from "./TestimonialLists";
// import Pfp from "../../assets/pfp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold lg:text-4xl ">Testimonials</h1>
        <p>What our top clients are saying of our meals</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Testimonies.map((testimony) => {
          return (
            <div
              key={testimony.id}
              className="flex flex-col gap-4 bg-white shadow-md hover:shadow-xl px-4 py-6 rounded-lg hover:bg-light transition duration-300"
              data-aos="fade-right"
            >
              <p className="text-grey text-center">{testimony.text}</p>
              <div className="flex gap-4 items-center justify-center">
                <div className="flex flex-col gap-1 items-center">
                  <h3 className="text-lg text-center font-medium">{testimony.clientName}</h3>
                  <div className="flex gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-600"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-600"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-600"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-600"/>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-600"/>
                  </div>
                  <p>{testimony.location}</p>
                  <p>{testimony.outfitType}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
