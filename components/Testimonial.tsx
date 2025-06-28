import { testimonialData } from "../data.json";
import Image from "next/image";

type TestimonialCardProps = {
  testimonial: string;
  clientImage: string;
  clientName: string;
  clientTag: string;
};

const TestimonialCard = ({
  testimonial,
  clientImage,
  clientName,
  clientTag,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white min-w-md w-full h-1/2 p-6 shadow-md flex flex-col items-start mb-4 space-y-6">
      {/* Testimonial text */}
      <p className="text-sm">{testimonial}</p>

      {/* Client Info */}
      <div className="flex w-full items-center space-x-4 mt-6">
        <div className="relative w-12 h-12">
          <Image
            src={clientImage}
            alt={clientName}
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-900 text-sm">{clientName}</p>
          <p className="text-gray-500 text-xs">{clientTag}</p>
        </div>
      </div>
    </div>
  );
};

const WhatOurClientSay = () => {
  const clientstestimonialData = [...testimonialData, ...testimonialData]; // Duplicate data for two rows
  return (
    <section className="bg-[#000000] flex flex-col items-center my-32">
      <h1 className="text-[#FFFF] text-2xl font-sans mt-12">
        What clients say about us
      </h1>
      <p className="text-[#FFFF] p-2 mb-8">Customer testimonial</p>

      {/* Testimonial Cards */}

      <div className="overflow-hidden w-full">
        <div className="animate-marquee inline-flex gap-8">
          {clientstestimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={`top-${index}`}
              testimonial={testimonial.testimonial}
              clientImage={testimonial.clientImage}
              clientName={testimonial.clientName}
              clientTag={testimonial.clientTag}
            />
          ))}
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div className="animate-marquee inline-flex gap-8">
          {clientstestimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={`bottom-${index}`}
              testimonial={testimonial.testimonial}
              clientImage={testimonial.clientImage}
              clientName={testimonial.clientName}
              clientTag={testimonial.clientTag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientSay;
