import Image from "next/image";
import { techstackImages } from "../data.json";

const LanguagesWeSpeak = () => {
  const row1Images = techstackImages.slice(0, 7);
  const row2Images = techstackImages.slice(7, 15);

  return (
    <section className="flex flex-col items-center gap-8 mx-4 md:m-16 lg:m-24 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <h1 className="font-secular text-center md:text- text-3xl mb-8">Languages we speak</h1>
      {/* Top row */}
      <div className="overflow-hidden w-full">
        <div className="client-scroller flex gap-8 whitespace-nowrap animate-scroll-sm sm:animate-scroll-md md:animate-scroll-lg">
          {[...row1Images, ...row1Images].map((item, i) => (
            <div key={`row1-${i}`} className="flex-shrink-0 h-full space-x-6">
              <Image
                src={item.src}
                alt={item.alt}
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="overflow-hidden w-full mt-4">
        <div className="client-scroller flex gap-8 whitespace-nowrap animate-scroll-reverse-sm sm:animate-scroll-reverse-md md:animate-scroll-reverse-lg">
          {[...row2Images, ...row2Images].map((item, i) => (
            <div key={`row2-${i}`} className="flex-shrink-0 h-full space-x-6">
              <Image
                src={item.src}
                alt={item.alt}
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesWeSpeak;