"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// SchoolPad portal (parents and employees use the same link)
const SCHOOL_PORTAL_URL = "https://onelink.to/by3wzr";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  // Handle scroll effect for shadow, sizing, and hiding
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);
      
      // Hide on scroll down, show on scroll up (with a small buffer before hiding)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
        // Also close the mobile menu if it's open when scrolling down
        if (isOpen) setIsOpen(false);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      dropdown: [
        { name: "Our Story & Vision", href: "/about" },
        { name: "Leadership Messages", href: "/about#leadership" },
        { name: "Historical Timeline", href: "/about#timeline" },
        { name: "Junior Branch (Tinkerbelle)", href: "https://tinkerbelle.in/" },
        { name: "Press & Media Coverage", href: "/press-coverage" },
        { name: "Mandatory Public Disclosure (MPD)", href: "/mpd" },
      ],
    },
    {
      name: "Core Curriculum",
      href: "/core-curriculum",
      dropdown: [
        { name: "Curriculum Overview", href: "/core-curriculum" },
        { name: "Booklist & Syllabi", href: "/core-curriculum#booklist-session" },
        { name: "Academic Excellence", href: "/core-curriculum#academic-excellence" },
        { name: "Career Guidance Cell", href: "/core-curriculum#career-guidance-cell" },
      ],
    },
    {
      name: "Beyond Academics",
      href: "/beyond-academics",
      dropdown: [
        { name: "Beyond Academics Overview", href: "/beyond-academics" },
        { name: "Beyond the Classroom", href: "/beyond-the-classroom" },
        { name: "Bharat Sports Club", href: "/bharat-sports-club" },
        { name: "Olympiads & Competitions", href: "/beyond-the-classroom#olympiad-calendar" },
      ],
    },
    {
      name: "Admission Process",
      href: "/admissions",
      dropdown: [
        { name: "Overview & Criteria", href: "/admissions" },
        { name: "5-Step Admission Journey", href: "/admissions#process" },
        { name: "Fee Structure", href: "/admissions#fees" },
        { name: "Book a Campus Tour", href: "/admissions#book-tour" },
      ],
    },
    { name: "Blogs", href: "/blogs" },
    {
      name: "Contact Us",
      href: "/contact-us",
      dropdown: [
        { name: "Careers at TBS", href: "/careers" },
      ],
    },
  ];

  return (
    <header className={`fixed w-full z-50 transition-transform duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent bg-linear-to-b from-black/60 to-transparent"} ${isHidden ? "-translate-y-full" : "translate-y-0"}`}>

      {/* Top Bar (Contact Info & Announcement) - Hides on scroll */}
      <div className={`w-full text-white/90 text-xs sm:text-sm transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100 bg-black/20 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">

          {/* Left: Scrolling Announcements */}
          <div
            className="flex-1 overflow-hidden flex items-center h-full mr-4"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
          >
            <div className="whitespace-nowrap flex animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
              {/* First Set of Notices */}
              <span className="flex items-center text-white/90 text-xs sm:text-sm font-medium tracking-wide pr-6">
                🔊 <span className="text-yellow-400 font-bold ml-1">Admissions Open</span> <span className="ml-1">November 2026</span>
                <span className="mx-6 text-white/30">|</span>
                🌟 <span className="ml-1 text-white/95">Personalized teaching rooted with Indian values</span>
                <span className="mx-6 text-white/30">|</span>
              </span>
              {/* Second Set of Notices (Duplicate for seamless loop) */}
              <span className="flex items-center text-white/90 text-xs sm:text-sm font-medium tracking-wide pr-6">
                🔊 <span className="text-yellow-400 font-bold ml-1">Admissions Open</span> <span className="ml-1">November 2026</span>
                <span className="mx-6 text-white/30">|</span>
                🌟 <span className="ml-1 text-white/95">Personalized teaching rooted with Indian values</span>
                <span className="mx-6 text-white/30">|</span>
              </span>
            </div>
          </div>

          {/* Right Section: Tinkerbelle */}
          <div className="flex items-center shrink-0">
            {/* Fixed Tinkerbelle Connection */}
            <div className="hidden sm:flex items-center shrink-0 border-l border-white/20 pl-4">
              <span className="text-white/80 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium">
                <span className="text-yellow-400 font-bold drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">Tinkerbelle</span> - Path forward to TBS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1536px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className={`flex justify-between items-center transition-all duration-300 gap-2 lg:gap-4 ${scrolled ? "h-20" : "h-24 lg:h-28"}`}>

          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
              {/* Logo Image */}
              <div className={`relative shrink-0 transition-all duration-300 ${scrolled ? "h-11 w-10 sm:h-13 sm:w-12" : "h-13 w-11 sm:h-15 sm:w-13.5"}`}>
                <Image
                  src="/logo.png"
                  alt="The Bharat School Logo"
                  fill
                  sizes="(max-width: 768px) 50px, 60px"
                  className="object-contain object-center drop-shadow-sm group-hover:drop-shadow-md transition-all"
                  priority
                />
              </div>
              {/* Vertical Divider */}
              <div className={`shrink-0 transition-all duration-300 border-l-[2px] sm:border-l-[3px] ${scrolled ? "h-7 sm:h-8 border-[#e1251b]" : "h-8 sm:h-9 border-white/70"}`}></div>
              {/* Logo Text */}
              <div className="flex flex-col justify-center shrink-0">
                <span className={`font-logo font-extrabold tracking-tight sm:tracking-wide transition-all duration-300 whitespace-nowrap ${scrolled ? "text-sm sm:text-base lg:text-lg text-[#1e3a8a]" : "text-sm sm:text-base lg:text-lg leading-tight text-white drop-shadow-md"}`}>
                  THE BHARAT SCHOOL
                </span>
                <span className={`font-logo font-normal transition-all duration-300 whitespace-nowrap ${scrolled ? "text-[9px] sm:text-[11px] text-slate-600" : "text-[9px] sm:text-[11px] text-white/90 drop-shadow-md"}`}>
                  towards beginning of success
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-2 xl:gap-4">
            <div className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.dropdown && link.dropdown.some((sub) => pathname === sub.href));
                return link.dropdown ? (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 font-semibold text-xs xl:text-[13.5px] whitespace-nowrap transition-colors py-2 px-2 rounded-md relative ${
                        isActive
                          ? "text-[#ef4444] after:absolute after:bottom-0 after:left-1.5 after:right-1.5 after:h-[2px] after:bg-[#ef4444] after:rounded-full"
                          : scrolled
                          ? "text-[#1e3a8a] hover:text-[#ef4444]"
                          : "text-white hover:text-yellow-400 drop-shadow-md"
                      }`}
                    >
                      <span>{link.name}</span>
                      <svg
                        className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 opacity-80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-100/80 p-1.5 ring-1 ring-black/5">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#ef4444] hover:bg-slate-50 rounded-lg transition-colors"
                          >
                            <span>{subItem.name}</span>
                            <svg className="w-3 h-3 text-slate-400 opacity-0 group-hover/sub:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-semibold text-xs xl:text-[13.5px] whitespace-nowrap transition-colors py-2 px-2 rounded-md relative ${
                      isActive
                        ? "text-[#ef4444] after:absolute after:bottom-0 after:left-1.5 after:right-1.5 after:h-[2px] after:bg-[#ef4444] after:rounded-full"
                        : scrolled
                        ? "text-[#1e3a8a] hover:text-[#ef4444]"
                        : "text-white hover:text-yellow-400 drop-shadow-md"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className={`flex items-center pl-2 xl:pl-3 gap-2 xl:gap-3 border-l ${scrolled ? "border-slate-200" : "border-white/25"} shrink-0`}>
              {/* SchoolPad Logins Dropdown */}
              <div className="relative group">
                <button className={`py-4 text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-1 whitespace-nowrap ${scrolled ? "text-[#1e3a8a] group-hover:text-[#e1251b]" : "text-white group-hover:text-yellow-400"}`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                  <span>Login</span>
                  <svg className="w-3 h-3 ml-0.5 transition-transform duration-200 group-hover:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full -mt-1 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 border border-gray-100 overflow-hidden z-50">
                  <div className="py-2">
                    <a href={SCHOOL_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#e1251b] hover:bg-slate-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      Parent Login
                    </a>
                    <a href={SCHOOL_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#e1251b] hover:bg-slate-50 transition-colors">
                      <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      Employee Login
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/admissions"
                className="flex items-center gap-1.5 px-3.5 xl:px-4 py-2 font-bold text-xs xl:text-sm text-white bg-[#ef4444] rounded-full hover:bg-red-600 shadow-[0_4px_14px_0_rgba(239,68,68,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(239,68,68,0.23)] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <span>Apply Now</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>

          {/* Tablet & Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 transition-colors ${scrolled ? "text-[#1e3a8a] hover:text-red-600" : "text-white hover:text-yellow-400"}`}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute w-full bg-white shadow-2xl overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? "max-h-[85vh] border-t border-gray-100" : "max-h-0"}`}>
        <div className="px-4 pt-3 pb-8 space-y-1 flex flex-col">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-100">
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => setActiveMobileDropdown(activeMobileDropdown === link.name ? null : link.name)}
                    className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-[#1e3a8a] hover:text-red-600"
                  >
                    <span>{link.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === link.name ? "rotate-180 text-red-600" : "text-gray-400"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeMobileDropdown === link.name && (
                    <div className="pl-4 pr-2 pb-3 space-y-1 bg-slate-50/70 rounded-lg mb-2">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-xs font-semibold text-red-600 hover:underline"
                      >
                        Visit {link.name} Page →
                      </Link>
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-[#1e3a8a]"
                        >
                          • {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-sm font-semibold text-[#1e3a8a] hover:text-red-600"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile Login Links */}
          <div className="grid grid-cols-2 gap-2 px-2 py-3 border-b border-gray-100">
            <a
              href={SCHOOL_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#1e3a8a] bg-slate-100 rounded-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Parent Login
            </a>
            <a
              href={SCHOOL_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#1e3a8a] bg-slate-100 rounded-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Employee Login
            </a>
          </div>
          <div className="pt-3">
            <Link
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="flex justify-center w-full px-5 py-3.5 bg-[#ef4444] text-white font-bold rounded-xl shadow-md hover:bg-red-600 transition-colors text-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
