"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import phoneCall from "@/public/phone-call.svg";

type Navlink = {
  label: string;
  href: string;
};

const navLinks: Navlink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Faq's", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setIsFixed(scrollTop > 80);
    };

    handleScroll(); // page reload par bhi check kare
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isFixed
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div
        className={`flex items-center justify-between py-5 transition-all duration-500 ${
          isFixed ? "px-[8%] lg:px-[10%]":"px-[8%] lg:px-[5%]"   }`}     >
        {/* Logo */}
        <Link
          href="/"
          className="text-4xl lg:text-5xl font-bold Audiowide text-white"
        >
          Liv<span className="text-(--prim-dark)">ora</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg Rethink text-gray-200 hover:text-(--prim-dark)"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:flex gap-2 text-gray-200 group">
            <Image
              src={phoneCall}
              alt="phone"
              width={20}
              height={20}
              className="invert"
            />
            <span className="Rethink font-semibold group-hover:text-white">
              123456789
            </span>
          </Link>

          <Link
            href="#contact"
            className="px-4 py-2 bg-white text-black rounded-full font-semibold hover:bg-(--prim) hover:text-white transition"
          >
            Get in Touch
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-2xl text-white"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700">
          <div className="flex flex-col px-[8%] py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-100 text-lg Rethink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
