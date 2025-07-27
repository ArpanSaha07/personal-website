'use client';
import techstacks from "@/app/data/techstack.json";
import { TechStack } from "../types";
import { useEffect } from "react";

const TechStackSection = () => {

  // This effect is used to dynamically load the stylesheet for the coloured icons to improve initial load performace by avoiding preloading externally-referenced CSS files that might block page rendering
  // Load CSS Asynchronously to allow the page to begin rendering while they are still loading.
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@master/src/app/ci.min.css";
    link.id = "ci-icons-stylesheet";
    document.head.appendChild(link);

    return () => {
      // Clean up when component unmounts
      document.getElementById("ci-icons-stylesheet")?.remove();
    };
  }, []);

  return (
    <section className="w-full bg-white pt-30 pb-15 overflow-hidden">

      <h2 className="section-heading text-center pb-4">Tech Stack</h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        These are some of the technologies I work with:
      </p>

      <div className="pt-5 space-y-8">
        {techstacks.map((techstack: TechStack, idx: number) => (
          <div key={idx} className="relative overflow-hidden whitespace-nowrap">
            <div
              className={`flex py-2 gap-10 w-max animate-slide ${
                techstack.row_num % 2 === 0 ? "animate-slide" : "animate-slide-reverse"
              }`}
            >
              {[...techstack.technologies, ...techstack.technologies, ...techstack.technologies, ...techstack.technologies].map((icon, i) => (
                <i key={i} className={`ci ci-${icon} ci-4x hover:scale-125`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;