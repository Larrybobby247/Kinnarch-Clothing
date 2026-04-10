import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Img1 from "../assets/hero-img.jpeg";

const Hero = () => {
  return (
    <div className=" flex h-[95vh]  justify-center items-center relative">
      <div className="overlay w-full h-full">
        <img src={Img1} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="px-6 lg:px-24 xl:px-40 absolute flex flex-col text-white gap-3 justify-center items-center">
        <h1
          className="text-4xl lg:text-[52px] font-bold text-center"
          data-aos="fade-right"
        >
          Bespoke Luxury for Every Celebration
        </h1>
        <p
          className="text-lg text-center text-light mb-4"
          data-aos="fade-right"
        >
          Hand-crafted Asoebi and bridal reception dresses tailored to perfection. Experience the art of African luxury with intricate hand-beading and flawless fits, delivered worldwide from our atelier in Ibadan.
        </p>
        <div className="flex gap-4 " data-aos="fade-right">
          <button className="btn-primary">
            <a href="#store">Book Our Designs</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
