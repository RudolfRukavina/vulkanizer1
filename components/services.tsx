import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Zamjena guma",
    image: "/placeholder.webp",
    description: "Profesionalna zamjena svih vrsta i dimenzija guma.",
  },
  {
    title: "Balansiranje",
    image: "/placeholder.webp",
    description: "Precizno balansiranje kotača najmodernijom opremom.",
  },
  {
    title: "Popravak guma",
    image: "/placeholder.webp",
    description: "Brz i pouzdan popravak probušenih i oštećenih guma.",
  },
  {
    title: "Čuvanje guma",
    image: "/placeholder.webp",
    description: "Sigurno skladištenje vaših zimskih ili ljetnih guma.",
  },
];

export default function Services() {
  return (
    <section className="bg-light pb-40">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -translate-y-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white overflow-hidden p-2">
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
        <div
          id="about-us-section"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative my-20 pt-6"
        >
          <Image
            src="/circles-blue.png"
            width={200}
            height={200}
            alt="Decoration circles blue"
            className="absolute -top-44 -left-32 md:-left-44 z-0"
          />
          <div className="pt-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">O nama</h1>
            <p className="mb-4">
              Mi smo obiteljska vulkanizerska radionica s više od 15 godina
              iskustva u radu s gumama svih vrsta vozila. Naš tim stručnih
              vulkanizera pruža vrhunsku uslugu zamjene i održavanja guma uz
              pristupačne cijene i brzu uslugu.
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
                <span className="uppercase text-sm">
                  Zadovoljstvo klijenata
                </span>
              </div>
              <div className="border flex-1 border-gray-400 border-r-0 md:border-r md:border-b-0 p-4">
                <h3 className="font-bold">20000+</h3>
                <span className="uppercase text-sm">Zamijenjenih guma</span>
              </div>
              <div className="border flex-1 border-gray-400 p-4 md:pr-0">
                <h3 className="font-bold">15</h3>
                <span className="uppercase text-sm">Godina iskustva</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
