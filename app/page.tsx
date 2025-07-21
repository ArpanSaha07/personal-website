import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectSection from "./components/ProjectSection";
import TechStackSection from "./components/TechStackSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <main className="flex-grow">
        <CustomCursor />

        <HeroSection />

        <AboutMeSection />

        <ProjectSection />

        <TechStackSection />

        <ExperienceSection />

        <ContactSection />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Arpan Saha",
            url: "https://arpan-saha.com",
            sameAs: [
              "https://github.com/ArpanSaha07",
              "https://linkedin.com/in/arpan-saha7"
            ],
            jobTitle: "Fullstack Developer",
            worksFor: {
              "@type": "Organization",
              name: "ElevateTech"
            }
          })}
        </script>
      </main>
  );
}
