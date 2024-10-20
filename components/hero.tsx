import React from "react";
import Image from "next/image";
import {
  TbSettingsCog,
  TbSettingsSearch,
  TbSettingsShare,
} from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-dark text-white px-4 md:px-0 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-50 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              In need of tire replacement? We can help.
            </h1>
            <p className="mb-6">
              Delivering the highest quality auto repair is the way we forge
              relationships with our customers and the way we've always done
              business.
            </p>
            <button className="bg-accent hover:bg-accentLight text-white font-bold py-2 px-4">
              Contact Now
            </button>
            <div className="mt-8 flex">
              <div className="px-8 border-x border-gray-600">
                <p className="text-3xl font-bold">320</p>
                <p className="text-sm">
                  Experienced <br /> Technicians
                </p>
              </div>
              <div className="px-8 border-r border-gray-600">
                <p className="text-3xl font-bold">3561</p>
                <p className="text-sm">
                  Projects <br /> Completed
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-0 pb-[66.67%]">
              <Image
                src="/placeholder.webp"
                alt="Mechanic working on a car"
                layout="fill"
                objectFit="cover"
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
            <h2>All car marks</h2>
            <p>
              We give an assortment of fix and support administrations for all
              vehicle marks and models.
            </p>
          </div>
          <div className="border md:border-l-0 border-t-0 md:border-t pb-12 md:pb-6 border-gray-600 p-6 pt-12 relative">
            <div className="absolute -top-8 left-6 rounded-full bg-dark border border-gray-600 p-4">
              <TbSettingsCog className="h-8 w-8" />
            </div>
            <h2>Variety of services</h2>
            <p>
              The main principle of our work is to offer a wide scope of value
              quality car repair services.
            </p>
          </div>
          <div className="border md:border-l-0 border-t-0 md:border-t border-gray-600 p-6 pt-12 relative">
            <div className="absolute -top-8 left-6 rounded-full bg-dark border border-gray-600 p-4">
              <TbSettingsShare className="h-8 w-8" />
            </div>
            <h2>Quality support</h2>
            <p>
              We offer quality support programs for any vehicle that allows them
              to always stay fully functional.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row gap-6 mt-20 mb-40">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our vulcanizer service</h2>
            <p>
              We offer a wide range of services to meet all your tire needs. Our
              experienced staff will help you find the best tires for your
              vehicle and driving style.
            </p>
          </div>
          <div className="flex items-center h-20">
            <p className="border px-4 h-full flex items-center border-gray-600 border-r-0">Please call us to obtain our services</p>
            <button className="flex min-w-fit items-center justify-center gap-2 bg-accent hover:bg-accentLight text-white font-bold h-full px-4">
              <FaPhoneVolume />
              <span>Call us now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
