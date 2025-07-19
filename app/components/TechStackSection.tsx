import techstacks from "@/app/data/techstack.json";
import { TechStack } from "../types";

const TechStackSection = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">

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