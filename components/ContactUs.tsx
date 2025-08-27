"use client";
import Image from "next/image";

const ContactCard = () => {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 right-0 z-0">
          <Image
            src="/icons/contact_us_decoration.svg"
            alt="Top Right Decoration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-0 left-0 z-0">
          <Image
            src="/icons/contact_us_decoration_2.svg"
            alt="Bottom Left Decoration"
            width={400}
            height={200}
            className="object-contain"
          />
        </div>

    <div className="flex flex-col max-w-3xl mt-24 mb-8 md:mx-auto border-2 border-black p-8 m-4 rounded-2xl shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We would love to hear from you. Fill out the form below to get in
          touch.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default ContactCard;
