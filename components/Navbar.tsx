"use client";

import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "What We Offer", href: "#what-we-offer" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(
    navLinks[0].href
  );

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const handleScroll = () => {
      setScrollPosition(window.scrollY > 10);

      let current = navLinks[0].href;
      sections.forEach((section, idx) => {
        if (!section) return;
        const top = section.getBoundingClientRect().top;
        if (top <= 80) {
          current = navLinks[idx].href;
        }
      });
      setCurrentScrollPosition(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-screen z-50 transition-colors duration-300 px-4 ${
        scrollPosition ? "bg-black" : ""
      } `}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex gap-4 text-2xl font-bold font-secular text-white">
          <Image src="/images/logo.png" className="border-white border-2 rounded-lg" alt="logo" width={50} height={50} />
          Zewd Solutions
        </div>

        <div className="hidden md:flex gap-6 text-white">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`${
                label === "Contact Us"
                  ? "group bg-white text-black px-4 rounded-full hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
                  : `hover:text-gray-300 transition-colors duration-200 ${
                      currentScrollPosition === href
                        ? "border-white border-b-2"
                        : ""
                    } py-2`
              }`}
            >
              {label === "Contact Us" ? (
                <span className="flex items-center gap-2 p-2">
                  {label}{" "}
                  <FaLongArrowAltRight className="transform opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:rotate-360 group-hover:opacity-100 transition duration-500 ease-out" />
                </span>
              ) : (
                label
              )}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 pt-4 pb-6 space-y-4 text-white text-center">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-gray-300 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
