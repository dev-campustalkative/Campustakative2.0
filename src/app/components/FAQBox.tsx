"use client";

import { useState } from "react";
import Image from "next/image";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";


const FAQBox = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const faqs = [
    {
      question: "Frequently Asked Question 1",
      answer:
        "The first day of the event will focus on the role of technology in empowering young people in Nigeria. The speakers will talk about how technology can be used to create new opportunities for young people, including through entrepreneurship, education, and training. They will also discuss how technology can be used to address some of the challenges facing young people in Nigeria, such as unemployment and lack of access to education.",
    },
    {
      question: "Frequently Asked Question 2",
      answer:
        "The first day of the event will focus on the role of technology in empowering young people in Nigeria. The speakers will talk about how technology can be used to create new opportunities for young people, including through entrepreneurship, education, and training. They will also discuss how technology can be used to address some of the challenges facing young people in Nigeria, such as unemployment and lack of access to education.",
    },
    {
      question: "Frequently Asked Question 3",
      answer:
        "The first day of the event will focus on the role of technology in empowering young people in Nigeria. The speakers will talk about how technology can be used to create new opportunities for young people, including through entrepreneurship, education, and training. They will also discuss how technology can be used to address some of the challenges facing young people in Nigeria, such as unemployment and lack of access to education.",
    },
  ];

  return (
    <div className="py-12">
      {faqs.map((faq, index) => (
        <div key={index}>
          <div
            className={`py-10 px-8 duration-300 transition-all ${
              openIndex === index && "bg-ct-primary-200"
            }`}
          >
            <div>
              <div
                className="w-full flex justify-between items-center py-10 px-8 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className="w-full text-xl font-semibold text-ct-primary-1100">
                  {faq.question}
                </p>
                {openIndex === index ? <BsArrowUp /> : <BsArrowDown />}
              </div>
              {openIndex === index && (
                <div key="content">
                  <p className="text-lg text-ct-grey-600 cursor-text -py-10 px-8 transition-all duration-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
          <Image
            src="/assets/icons/--ct-line-1.svg"
            alt="campustalkative merch"
            className="w-full h-full"
            height={500}
            width={350}
          />
        </div>
      ))}
    </div>
  );
};

export default FAQBox;
