"use client";

import Container from "./components/Container";
import Button from "./components/Button";
import { AiOutlineArrowDown } from "react-icons/ai";
import ImageSlug from "./components/ImageSlug";

export default function Home() {
  return (
    <Container>
      <div className=" pt-36 flex flex-col items-center justify-center gap-8">
        <h1 className=" font-sora text-center text-2xl md:text-5xl font-bold max-w-[821px]">
          Join the largest community for youth growth and development in Africa
        </h1>
        <div className=" flex gap-2 md:gap-6 md:flex-row flex-col items-center justify-center">
          <Button>Join community</Button>
          <Button outline icon={AiOutlineArrowDown}>
            see our growth
          </Button>
        </div>
        <div
          style={{
            backgroundImage: "url(/assets/icons/--ct-home-slug.svg",
          }}
          className="w-[60%] m-auto bg-no-repeat bg-center bg-contain aspect-square relative mt-[60px]"
        >
          <div className="absolute left-[-20%] top-[-10%]">
            <ImageSlug width={230} />
          </div>
          <div className="absolute left-[35%] top-[2%]">
            <ImageSlug width={128} />
          </div>
          <div className="absolute right-0 top-[50px]">
            <ImageSlug width={150} />
          </div>
          <div className="absolute top-[220px] right-[120px]">
            <ImageSlug width={190} />
          </div>
          <div className="absolute left-0 top-[250px]">
            <ImageSlug width={150} />
          </div>
        </div>
      </div>
      <div>
        <div className="mt-[-10px]">
          <h2 className="text-center text-3xl font-bold text-[#3F392C] ">
            Collaboration and growth
          </h2>
          <p className="text-lg text-center text-[#3F392C] max-w-[761px] mx-auto ">
            We believe that a strong community must strive on the backbone of
            good partnership and collaboration. So far we are proud to have the
            support and partnership of these organisations, who share our zeal
            to continue to develop and build the youths of the future
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </Container>
  );
}
