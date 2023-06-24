import Image from "next/image";
import React, { useEffect, useState } from "react";

const testimonies = [
  {
    id: 1,
    name: "Sandra Adams",
    testimony:
      "I've been a part of this community for over a year now, and I can honestly say that it's been a life-changing experience. Not only have I gained valuable skills and knowledge, but I've also formed meaningful connections with other members and mentors. The support and guidance I've received here have helped me grow and develop in ways that I never thought possible. I'm so grateful for this community and the positive impact it's had on my life.",
    image: "testimonials-1",
    active: true,
  },
  {
    id: 2,
    name: "Sandra Adams",
    testimony:
      "Hear from those who have already experienced the benefits of our community. Check out our community testimonials below.",
    image: "testimonials-2",
    active: false,
  },
  {
    id: 3,
    name: "Sandra Adams",
    testimony:
      "We care about our community and bring the best resources and opportunity to meet and network",
    image: "testimonials-3",
    active: false,
  },
  {
    id: 4,
    name: "Sandra Adams",
    testimony:
      "At Campustalkative, we understand the importance of building and maintaining a strong community. That's why we are dedicated to providing the best resources and opportunities for our members to connect, network, and grow together. Whether it's through events, online resources, or other initiatives, we are committed to fostering a vibrant and supportive community for all.",
    image: "testimonials-3",
    active: false,
  },
];
const TestimonialBox = () => {
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonyIndex((prevIndex) =>
        prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentTestimony = testimonies[currentTestimonyIndex];

  const handleClick = (index: number) => {
    setCurrentTestimonyIndex(index);
  };

  return (
    <div className="mx-10">
      <div className=" rounded-3xl border-2 border-ct-secondary-600 border-dashed p-8 flex justify-between mx-auto max-w-[1480px]">
        <div className="flex-1">
          <div className=" w-3/5">
            {testimonies.map((testimony, index) => {
              return (
                <div
                  key={testimony.id}
                  className={`rounded-full  p-4 flex items-center gap-4 cursor-pointer hover:scale-110 duration-200 mt-6 ${
                    currentTestimonyIndex === index && "bg-ct-secondary-1100"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <div className="rounded-full border border-ct-primary-100">
                    <Image
                      src="/assets/images/--ct-testimonials-1.png"
                      alt="testimony"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div>
                    <span
                      className={`text-xl ${
                        currentTestimonyIndex === index
                          ? "font-bold text-ct-primary-100 "
                          : " font-semibold text-ct-grey-600"
                      }`}
                    >
                      {testimony.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex-1">
          <div className="w-full h-full">
            <div className="max-w-[595px] duration-200 h-[60%]">
              <h2 className="text-3xl text-ct-grey-1000 font-bold my-3">
                {currentTestimony.name}
              </h2>
              <p className="text-lg text-ct-grey-600">
                {currentTestimony.testimony}
              </p>
            </div>
            <div className="flex items-center justify-start mt-4">
              {testimonies.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    currentTestimonyIndex === index
                      ? "bg-ct-secondary-1100"
                      : "bg-ct-secondary-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
