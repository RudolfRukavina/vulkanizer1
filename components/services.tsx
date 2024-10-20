import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Transmission",
    image: "/placeholder.webp",
    description: "Expert transmission repair and maintenance.",
  },
  {
    title: "Computer diagnostics",
    image: "/placeholder.webp",
    description:
      "State-of-the-art computer diagnostics for all makes and models.",
  },
  {
    title: "A/C repairs",
    image: "/placeholder.webp",
    description: "Keep cool with our professional A/C repair services.",
  },
  {
    title: "Engine repair",
    image: "/placeholder.webp",
    description: "Comprehensive engine repair and rebuilding services.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-light pb-40">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -translate-y-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white overflow-hidden p-2 shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="pt-8 flex flex-col justify-between p-2">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-xl">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="pt-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About us</h1>
            <p className="mb-4">
              We are a family-owned and operated business with over 30 years of
              experience in the auto repair industry. Our team of experienced
              and certified technicians provide expert auto repair services for
              all makes and models.
            </p>
            <button className="bg-accent hover:bg-accentLight text-white font-bold py-2 px-4">
              +(385) 91-453-3298
            </button>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-custom gap-6">
            <Image
              src="/placeholder.webp"
              alt="Our workshop"
              width={600}
              height={400}
              className="w-full h-full"
            />
            <div className="flex md:flex-col h-full">
              <div className="border flex-1 border-gray-400 border-r-0 md:border-r md:border-b-0 p-4">
                <h3 className="font-bold">100%</h3>
                <span className="uppercase text-sm">Transparency matters</span>
              </div>
              <div className="border flex-1 border-gray-400 border-r-0 md:border-r md:border-b-0 p-4">
                <h3 className="font-bold">3561</h3>
                <span className="uppercase text-sm">Completed projects</span>
              </div>
              <div className="border flex-1 border-gray-400 p-4 md:pr-0">
                <h3 className="font-bold">320</h3>
                <span className="uppercase text-sm">Experienced technicians</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
