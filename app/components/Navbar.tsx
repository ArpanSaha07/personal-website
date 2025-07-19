'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import HoverTextAnimation from './HoverTextAnimation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-100 px-5 py-1 h-[55px] bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-md w-[90%] max-w-3xl flex items-center">
        <div className="flex items-center justify-between w-full text-black">
          
          {/* Logo */}
          <Link href="#hero-section">
            <Image
              src="/images/arpan-logo-black.svg"
              alt="Arpan Saha Logo"
              width={45}
              height={45}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-base">
            <li><Link href="#projects" className="hover:underline">Projects</Link></li>
            <li><Link href="#experience" className="hover:underline">Experience</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>

          {/* Burger Menu Button (Mobile) */}
          <button
            className="md:hidden p-2 bg-gray-800/40 rounded-full transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 w-6 h-[2px] bg-white transform transition-all duration-300 ${
                  menuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-[2px] bg-white transform transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : 'top-3'
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-[2px] bg-white transform transition-all duration-300 ${
                  menuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[80px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md text-black py-5 px-4 flex flex-col gap-4 z-50 md:hidden text-center">
            <HoverTextAnimation href="#projects" label="Projects" onClick={toggleMenu} />
            <HoverTextAnimation href="#experience" label="Experience" onClick={toggleMenu} />
            <HoverTextAnimation href="#contact" label="Contact" onClick={toggleMenu} />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
