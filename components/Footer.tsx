import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-center text-gray-800 py-12 px-4">
      {/* Logo and Company Name */}
      <div className="flex flex-col items-center text-3xl font-bold mb-4">
        <Image src="/images/logo.png" alt="logo" width={200} height={200} />

        <h1 className=" text-3xl font-bold mb-4">Zewd Solutions</h1>
      </div>

      {/* Navigation Links */}
      <nav className="mb-6 flex justify-center mx-4 gap-2 text-md space-x-4">
        <Link href="#home" className="hover:underline border-b-2">
          Home
        </Link>
        <Link href="#what-we-offer" className="hover:underline border-b-2">
          What We Offer
        </Link>
        <Link href="#services" className="hover:underline border-b-2">
          Services
        </Link>
        <Link href="#projects" className="hover:underline border-b-2">
          Projects
        </Link>
      </nav>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-1 mb-4">
        <div className="flex items-center gap-2">
          <MdEmail />
          <span>zewdsolutions@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MdPhone />
          <span>+123 456 7890</span>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 text-xl mb-6">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-gray-600" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-gray-600" />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="hover:text-gray-600" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500">© 2025 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
