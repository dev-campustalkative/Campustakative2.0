import Image from "next/image";
import React from "react";

const Progress = () => {
  return (
    <div className="py-20 flex">
      <div className="">
        <div className="max-w-[742px] mb-8">
          <h1 className="text-base text-ct-primary-800">OUR PROGRESS</h1>
          <p className=" text-4xl font-bold text-ct-grey-1000 ">
            <span className="text-ct-primary-500">We are here</span> and our
            numbers within the community is growing
          </p>
        </div>
        <div className="flex items-end gap-8">
          <div>
            <div className="flex gap-6 flex-row my-6">
              <div className="flex items-center justify-center flex-1 bg-ct-secondary-1100 rounded-full ">
                <span className="max-w-[50%] mx-auto text-center text-2xl font-bold  text-ct-primary-100">
                  Resources
                </span>
              </div>
              <div className="rounded-full">
                <Image
                  src="/assets/images/--ct-woods.png"
                  alt="woods"
                  height={132}
                  width={132}
                />
              </div>
            </div>
            <div className="flex gap-6 flex-row-reverse my-6">
              <div className="flex items-center justify-center flex-1 bg-ct-secondary-1100 rounded-full ">
                <span className="max-w-[50%] mx-auto text-center text-2xl font-bold  text-ct-primary-100">
                  EVENTS/ OPPORTUNITIES
                </span>
              </div>
              <div className="rounded-full">
                <Image
                  src="/assets/images/--ct-crowd.png"
                  alt="woods"
                  height={132}
                  width={132}
                />
              </div>
            </div>
          </div>
          <div className="my-6">
            <h2 className="text-7xl text-ct-grey-1000 font-bold ">4782</h2>
            <span className="text-base text-ct-primary-800">
              Members and counting
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/assets/images/--ct-earth.png"
          alt="earth"
          className=" float-right mt-4"
          height={416}
          width={344}
        />
      </div>
    </div>
  );
};

export default Progress;
