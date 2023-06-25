import Image from "next/image";
import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin, FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-[1580px] mx-auto">
      <div className="-mb-10">
        <h1 className="text-ct-grey-1000 font-bold text-5xl font-sora">
          Say hello at{" "}
          <span className="text-ct-primary-500">talk@campustalktive.com</span>
        </h1>
      </div>
      <div>
        <Image
          src="/assets/icons/--ct-contact-slug.svg"
          alt="contact"
          className="w-auto h-auto"
          height={120}
          width={120}
        />
      </div>
      <div className="flex items-end justify-end  -mt-28">
        <div className=" w-max rounded-full border border-ct-primary-200 bg-ct-primary-200 bg-opacity-40 py-4 px-7 flex gap-4 items-center justify-center">
          <div className="flex gap-2">
            <AiFillInstagram
              size={32}
              color="#191102"
              className="hover:scale-125 duration-200"
            />
            <AiFillTwitterCircle
              size={32}
              color="#191102"
              className="hover:scale-125 duration-200"
            />
            <FaTiktok
              size={32}
              color="#191102"
              className="hover:scale-125 duration-200"
            />
            <FaLinkedin
              size={32}
              color="#191102"
              className="hover:scale-125 duration-200"
            />
          </div>
          <span className="text-2xl text-ct-grey-700">@campustalkative</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
