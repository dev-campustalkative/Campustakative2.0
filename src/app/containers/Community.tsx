import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";

const Community = () => {
  return (
    <div className="flex justify-between max-w-[1980px] mx-auto my-12 relative overflow-hidden">
      <div className="relative">
        <Image
          src="/assets/images/--ct-community.png"
          alt="community"
          height={456}
          width={960}
          className="w-full  h-[456px] rounded-r-3xl -ml-[30%]"
        />
      </div>
      <div className="-mt-[2%] -mr-[55%] -ml-[10%] flex items-end justify-end gap-6">
        <Image
          src="/assets/icons/--ct-curve-1.svg"
          alt="curve"
          height={456}
          width={960}
          className="w-full h-[600px]"
        />
        <div className="-mb-[2%]">
          <Button>Be a part of this community</Button>
        </div>
      </div>
      <div className="relative h-max">
        <Image
          src="/assets/images/--ct-community.png"
          alt="community"
          height={456}
          width={960}
          className="w-full h-[456px]  rounded-l-3xl ml-[10%]"
        />
      </div>
    </div>
  );
};

export default Community;
