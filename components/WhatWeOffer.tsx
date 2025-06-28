"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { whatWeOffer } from "../data.json";

const useInView = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("animate-fade-up");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return ref;
};

type OffersCardProps = {
  imageURL: string;
  title: string;
  description: string;
  isReversed?: boolean;
};

const OffersCard = ({
  imageURL,
  title,
  description,
  isReversed = false,
}: OffersCardProps) => {
  const cardRef = useInView();

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row items-center justify-between mt-16 mb-24 opacity-0 translate-y-10 transition-all duration-700 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={imageURL}
          alt="Service Image"
          width={400}
          height={300}
          className="object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center mt-8 md:mt-0 p-4">
        <h1 className="text-2xl font-secular font-bold">{title}</h1>
        <p className="mt-4 text-[#00000080] max-w-md">{description}</p>
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden">
      {/* Decorations stuck to screen edge */}
      {/* <div className="absolute top-0 right-0 z-0">
          <Image
            src="/icons/decoration_1.png"
            alt="Top Right Decoration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-0 left-0 z-0">
          <Image
            src="/icons/decoration_2.png"
            alt="Bottom Left Decoration"
            width={400}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-0 right-0 z-0">
          <Image
            src="/icons/decoration_1.png"
            alt="Bottom Right Decoration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div> */}

      <h1 className="font-bold font-secular text-4xl mb-16 text-center mt-24 relative z-10">
        What We Offer
      </h1>

      <div className="flex flex-col space-y-24 relative z-10">
        {whatWeOffer.map((offers, index) => (
          <OffersCard
            key={offers.id}
            imageURL={offers.imageURL}
            title={offers.title}
            description={offers.description}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
