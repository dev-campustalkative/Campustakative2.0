import React from "react";
import TestimonialBox from "../components/TestimonialBox";
import Container from "../components/Container";

const Testimonials = () => {
  return (
    <div className="py-8 my-12">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-ct-primary-1000 p-2 text-center my-8">
            <span className="text-ct-primary-500 text-sm font-bold ">
              Words from the community
            </span>
          </div>
          <div>
            <h1 className="text-center text-9xl font-extrabold my-4">
              Testimonials
            </h1>
            <p className=" text-lg text-center text-ct-grey-600 max-w-[766px] mx-auto my-4">
              Hear from those who have already experienced the benefits of our
              community. Check out our community testimonials below.
            </p>
          </div>
        </div>
      </Container>
      <TestimonialBox />
    </div>
  );
};

export default Testimonials;
