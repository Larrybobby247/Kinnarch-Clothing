import { icon } from "@fortawesome/fontawesome-svg-core";
import { faArrowsSpin, faAward, faGlobe, faHandSparkles, faHeart, faMoneyBill, faRuler } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const Services = () => {
  const ServiceLists = [
  {
    id: 1,
    title: "Expert Remote Tailoring",
    description: "Our signature 'Virtual Fit' process ensures your garment fits perfectly without a single in-person visit, serving clients globally from the USA to the UK.",
    icon: faRuler
  },
  {
    id: 2,
    title: "Intricate Hand-Beading",
    description: "Every piece is a work of art, featuring meticulous hand-applied stones, beads, and luxury embellishments that define the Kinnarh aesthetic.",
    icon: faHandSparkles
  },
  {
    id: 3,
    title: "Premium Asoebi Curation",
    description: "We specialize in high-end wedding guest and bridal reception looks that blend traditional African heritage with modern luxury silhouettes.",
    icon: faHeart
  },
  {
    id: 4,
    title: "Worldwide Express Delivery",
    description: "Based in Ibadan, but reaching the world. We offer reliable international shipping to ensure your outfit arrives in time for your big event.",
    icon: faGlobe
  },
  {
    id: 5,
    title: "Customized Elegance",
    description: "We don't just sew; we design. Each outfit is tailored to your unique personality, body type, and the specific theme of your occasion.",
    icon: faAward
  }
];

  return (
    <div id="services">
      <div className="flex flex-col gap-2 text-center mb-12">
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p className="text-grey">Making your purchase seamless with no delay</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6" id="services">
        {ServiceLists.map((service) => {
          return (
            <div
              className="bg-primary hover:bg-secondary transition duration-300 rounded-lg p-6 text-white flex flex-col  gap-4"
              key={service.id}
              data-aos="fade-right"
            >
              <FontAwesomeIcon
                className="text-3xl bg-secondary p-2 w-fit rounded-lg border border-primary "
                icon={service.icon}
              />
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-light">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
