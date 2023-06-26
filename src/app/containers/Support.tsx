import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <div className=" rounded-3xl p-12 bg-ct-grey-1000 flex gap-8 my-12 md:flex-col md:gap-6 md:p-6 sm:my-6">
      <div className="flex flex-col gap-6 w-full items-start">
        <div className="flex gap-6 flex-row w-full">
          <div className="h-full">
            <Image
              src="/assets/images/--ct-support-1.png"
              alt="support"
              className=""
              height={162}
              width={162}
            />
          </div>
          <div
            className=" w-full rounded-full"
            style={{
              backgroundImage: "url('/assets/images/--ct-slug-ex-1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="flex gap-6 flex-row-reverse w-full">
          <div className="h-full">
            <Image
              src="/assets/images/--ct-support-1.png"
              alt="support"
              className=""
              height={162}
              width={162}
            />
          </div>
          <div
            className=" w-full rounded-full"
            style={{
              backgroundImage: "url('/assets/images/--ct-slug-ex-1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div className="w-full">
        <div>
          <h2 className=" text-5xl font-bold text-ct-grey-100 sm:text-2xl md:text-4xl my-2">
            Support our cause
          </h2>
          <p className="text-lg text-ct-grey-100 md:text-base">
            Our goal is to provide 20,000 books to high school students,
            training 100,000 youth on various skills such as product design,
            programming languages, and medical care, and providing food and
            medical care to 1000 less privileged individuals.
          </p>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="rounded-full w-full flex items-center justify-center bg-ct-primary-500 md:p-6">
            <span className="text-2xl font-bold text-ct-grey-1000">
              Donate now
            </span>
          </div>
          <div className="rounded-full md:w-0">
            <Image
              src="/assets/images/--ct-support-5.png"
              alt="support"
              width={132}
              height={132}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
