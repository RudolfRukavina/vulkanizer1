import React from "react";
import Image from "next/image";
import {
  TbSettingsCog,
  TbSettingsSearch,
  TbSettingsShare,
} from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";

function Hero() {
  return (
    <section className="bg-dark text-white px-4 md:px-0 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 mb-32 md:mb-0 md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-50 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trebate hitnu zamjenu ili popravak guma? Tu smo za vas!
            </h1>
            <p className="mb-6">
              Pružamo profesionalne vulkanizerske usluge već više od 15 godina.
              Kvaliteta i brzina su naš zaštitni znak, a zadovoljstvo naših
              klijenata nam je na prvom mjestu.
            </p>
            <button className="bg-accent hover:bg-accentLight text-white font-bold py-2 px-4">
              Nazovite odmah
            </button>
            <div className="mt-8 flex">
              <div className="px-8 border-x border-gray-600">
                <p className="text-3xl font-bold">15</p>
                <p className="text-sm">
                  Godina <br /> iskustva
                </p>
              </div>
              <div className="px-8 border-r border-gray-600">
                <p className="text-3xl font-bold">20000+</p>
                <p className="text-sm">
                  Zamijenjenih <br /> guma
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-0 pb-[66.67%]">
              <Image
                src="/placeholder.webp"
                alt="Mechanic working on a car"
                width={1000}
                height={667}
                className="absolute inset-0"
                style={{ zIndex: 1 }}
              />
            </div>
            <div
              className="bg-[#353c44] w-full h-2/3 absolute -bottom-10 -left-10"
              style={{ zIndex: 0 }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-44">
          <div className="border border-gray-600 p-6 pt-12 pb-12 md:pb-6 relative">
            <div className="absolute -top-8 left-6 rounded-full bg-dark border border-gray-600 p-4">
              <TbSettingsSearch className="h-8 w-8" />
            </div>
            <h2 className="mb-2 font-bold">Sve vrste guma</h2>
            <p>
              Radimo sa svim vrstama i dimenzijama guma - od osobnih automobila
              do dostavnih vozila i SUV-ova.
            </p>
          </div>
          <div className="border md:border-l-0 border-t-0 md:border-t pb-12 md:pb-6 border-gray-600 p-6 pt-12 relative">
            <div className="absolute -top-8 left-6 rounded-full bg-dark border border-gray-600 p-4">
              <TbSettingsCog className="h-8 w-8" />
            </div>
            <h2 className="mb-2 font-bold">Kompletna usluga</h2>
            <p>
              Nudimo zamjenu guma, balansiranje, krpanje probušenih guma i
              savjetovanje pri odabiru novih guma.
            </p>
          </div>
          <div className="border md:border-l-0 border-t-0 md:border-t border-gray-600 p-6 pt-12 relative">
            <div className="absolute -top-8 left-6 rounded-full bg-dark border border-gray-600 p-4">
              <TbSettingsShare className="h-8 w-8" />
            </div>
            <h2 className="mb-2 font-bold">Brza usluga</h2>
            <p>
              Većinu popravaka i zamjena obavimo unutar sat vremena. Također
              nudimo i hitne intervencije na cesti.
            </p>
          </div>
        </div>
        <div
          id="services-section"
          className="flex items-end justify-between flex-col md:flex-row gap-6 mt-40 mb-40 relative"
        >
          <Image
            src="/circles-gray.png"
            width={200}
            height={200}
            alt="Decoration circles gray"
            className="absolute -top-36 right-8 z-0"
          />
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Profesionalne vulkanizerske usluge
            </h2>
            <p>
              Kod nas možete pronaći široku ponudu guma vodećih proizvođača po
              najpovoljnijim cijenama. Naši stručnjaci će vam pomoći odabrati
              najbolje gume za vaše vozilo.
            </p>
          </div>
          <div className="flex items-center h-20 z-10">
            <p className="border px-4 h-full flex items-center border-gray-600 border-r-0">
              Nazovite nas za više informacija
            </p>
            <button className="flex min-w-fit items-center justify-center gap-2 bg-accent hover:bg-accentLight text-white font-bold h-full px-4">
              <FaPhoneVolume />
              <span>Nazovite odmah</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
