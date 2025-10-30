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
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);

      if (visible.length > 0) {
        const topSection = visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        )[0].target as HTMLElement;

        const sectionTheme = topSection.getAttribute("data-theme") || "dark";
        setTheme(sectionTheme as "light" | "dark");
        setActiveSection(topSection.id);
        console.log('team changed to', sectionTheme, 'for', topSection.id);
      }
    },
    {
      threshold: 0.8,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);


  return (
    <header
      className={`fixed top-0 left-0 w-screen z-50 transition-colors duration-300 px-4 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold font-secular">
          <Image
            src="/images/logo.png"
            className={`border-2 rounded-lg ${
              theme === "light" ? "border-black" : "border-white"
            }`}
            alt="logo"
            width={40}
            height={40}
          />
          <h1 className="text-base md:text-lg">Zewd Solutions</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`${
                label === "Contact Us"
                  ? `group px-4 rounded-full flex items-center gap-2 transition-colors duration-200 ${
                      theme === "light"
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-white text-black hover:bg-gray-200"
                    }`
                  : `py-2 hover:opacity-70 transition-colors duration-200`
              }  ${
        activeSection === href.substring(1) ? "border-b-2 border-current" : "border-transparent"
      }`}
            >
              {label === "Contact Us" ? (
                <span className="flex items-center text-sm w-full gap-2 p-2">
                  {label}
                  <FaLongArrowAltRight className="transform opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition duration-500 ease-out" />
                </span>
              ) : (
                label
              )}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-6 pt-4 pb-6 space-y-4 text-center ${
            theme === "light" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:opacity-70 transition-colors duration-200"
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
