'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone, FiMapPin, FiClock, FiMail } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-white/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center text-sm text-gray-600 mb-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FiMail className="mr-1 text-primary-600" />
              <span>livmophysio@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1 text-primary-600" />
              <span>Tues-Sat: 11:00 AM - 8:00 PM</span>
            </div>
          </div>
          <div className="flex items-center">
            <a href="tel:+16047717898" className="flex items-center text-primary-600 font-medium">
              <FiPhone className="mr-1" />
              (604) 771-7898
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            <span className="text-primary-600">Liv Motion </span>Physiotherapy
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-bold"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/book-appointment" 
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-lg shadow-black/40 whitespace-nowrap transition-transform transition-colors hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-lg shadow-black/40 whitespace-nowrap transition-transform transition-colors hover:bg-blue-600 hover:-translate-y-0.5 active:translate-y-0"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
