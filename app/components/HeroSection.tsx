'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative w-full h-screen overflow-hidden">
      <div className="fixed top-0 right-0 h-full w-[80%] z-[-10] transform translateZ(-1px) scale(2.2)">
        <Image
            src="/images/my-hero-image.jpeg"
            alt="hero-background-image"
            fill
            quality={90}
            priority
            className="object-cover object-[top_center]"
        />
      </div>
      
      {/* Gradient Overlay (only left 33% of section) */}
      <div className="absolute top-0 left-0 h-full w-3/4 z-10 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />
      

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-start px-8 md:px-16 text-white">
        <div>
          <h1 className="text-4xl md:text-4xl font-bold">
            <span>
              <Typewriter
                words={['Hello', 'Bonjour', 'স্বাগতম']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={110}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
            <span>, I&apos;m Arpan</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl">
            A full-stack developer building AI-powered solutions.
          </p>

          <span>
            <div className="flex gap-4 text-4xl mt-5 h-10">
              <Link href="https://www.github.com/ArpanSaha07" target="_blank" rel="noopener noreferrer" className="hover:text-5xl duration-300"><FaGithub /></Link>
              <Link href="https://www.linkedin.com/in/arpan-saha7/" target="_blank" className="hover:text-5xl duration-300"><FaLinkedin /></Link>
              <Link href="mailto:sahaarpan550@gmail.com" target="_blank" rel="noreferrer" className="hover:text-5xl duration-300"><MdOutlineAlternateEmail /></Link> 
              <button className="relative overflow-hidden bg-transparent px-5 py-3 border-white border-3 h-9.5 rounded-full hover:text-black transition duration-300 flex items-center group">
                <Link href="/pdf/Arpan_Resume.pdf" className="text-[20px] relative z-10">Resume</Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-white rounded-full 
                            transition-all duration-500 ease-out 
                            group-hover:w-[400px] group-hover:h-[400px] 
                            transform -translate-x-1/2 translate-y-1/2 origin-bottom"
                />

              </button>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}