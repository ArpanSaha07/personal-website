'use client';
import { useSyncExternalStore } from "react";
import type { Project } from "@/app/types";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import ProjectCard from "@/app/components/ProjectCard";
import projects from "@/app/data/projects.json";

const SMALL_SCREEN_QUERY = "(max-width: 639px)";

// Server snapshot is false so the first client render matches the server HTML; the real value applies right after hydration
function useIsSmallScreen() {
    return useSyncExternalStore(
        (onChange) => {
            const mql = window.matchMedia(SMALL_SCREEN_QUERY);
            mql.addEventListener("change", onChange);
            return () => mql.removeEventListener("change", onChange);
        },
        () => window.matchMedia(SMALL_SCREEN_QUERY).matches,
        () => false
    );
}

export default function ProjectSection() {
    const isSmallScreen = useIsSmallScreen();

    return (
        <div className="w-full bg-white pb-10">
          <div id="projects" className="max-w-7xl mx-auto ">
    
              <h2 className="section-heading text-center pt-20">My Projects</h2>
              <p className="text-lg text-gray-600 pt-4 pb-15 text-center">Check out some of my personal projects</p>

            <ParallaxProvider>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5" aria-label="Projects Gallery">
                {projects.map((project: Project, idx: number) => {
                  // Only apply parallax and translateY on medium screens and up
                  const speed = idx % 2 === 0 ? 3 : -3;
                  const isMiddleCard = idx % 3 === 1;

                  // On small screens, no parallax or translate
                  if (isSmallScreen) {
                    return (
                      <div key={project.id} className="h-full">
                        <ProjectCard project={project} />
                      </div>
                    );
                  }

                  if (isMiddleCard) {
                    return (
                      <div key={project.id} className="h-full">
                        <ProjectCard project={project} />
                      </div>
                    );
                  } else {
                    return (
                      <Parallax speed={speed} key={project.id}>
                        <div className="h-full translate-y-4">
                          <ProjectCard project={project} />
                        </div>
                      </Parallax>
                    );
                  }
                })}
              </div>
            </ParallaxProvider>
          </div>
        </div>
    );
}