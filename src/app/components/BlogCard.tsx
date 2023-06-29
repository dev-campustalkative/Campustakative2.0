"use client";

import Image from "next/image";
import Date from "./Date";

const BlogCard = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="rounded-[32px] w-full">
        <Image
          src="/assets/images/--ct-products-1.png"
          alt="blog"
          className="w-full"
          height={272}
          width={300}
        />
      </div>
      <div>
        <Date text="12th May, 2023" />
      </div>
      <div>
        <h1 className="text-ct-grey-1000 font-2xl font-sora font-bold">
          Your Guide To Video Interviews
        </h1>
        <p className="text-ct-grey-600 text-lg my-2">
          Let's find out how to knock a video interview out of the park.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
