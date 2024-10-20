import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Carmen Henry",
    comment:
      "Great genuine mechanics! They generally get me in rapidly, the costs are sensible, and the holding up region is truly agreeable!",
    image: "/user.png",
  },
  {
    name: "Susan Cooper",
    comment:
      "Extraordinary spot to get your vehicle fixed. They are straightforward, reliable, and have serious valuing. I have taken.",
    image: "/user.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What clients say about us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 shadow-md">
              <p className="mb-4 italic">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <p className="font-bold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
