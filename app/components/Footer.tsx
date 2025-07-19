import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 pt-6 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <Link href="/" >
            <Image src="/images/arpan-logo-black.svg" alt="Logo" width={45} height={45}/>
          </Link>
          <span className="text-2xl text-gray-200">|</span>
          <span className="text-2xl text-black">Arpan Saha</span>
        </div>

        {/* Social Icons with Hover Labels */}
        <div className="flex space-x-6 mt-4 text-black text-4xl">
          {[
            {
              icon: <FaInstagram />,
              href: "https://www.instagram.com/_arpan002/",
              label: "Instagram",
            },
            {
              icon: <FaLinkedin />,
              href: "https://www.linkedin.com/in/arpan-saha7/",
              label: "LinkedIn",
            },
            {
              icon: <FaGithubSquare />,
              href: "https://www.github.com/ArpanSaha07",
              label: "GitHub",
            },
            {
              icon: <MdMail />,
              href: "mailto:saharpan550@gmail.com",
              label: "Email",
            },
          ].map(({ icon, href, label }, idx) => (
            <Link href={href} key={idx} target="_blank" className="group relative flex flex-col items-center">
              <div className="transition-transform duration-300 group-hover:scale-125">
                {icon}
              </div>
              {/* Tooltip below the icons */}
              <div className="absolute top-full mb-2 px-2 py-1 text-sm bg-gray-100 text-black rounded opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap">
                {label}
              </div>
            </Link>
          ))}
        </div>
      </div>

    </footer>
  );
}