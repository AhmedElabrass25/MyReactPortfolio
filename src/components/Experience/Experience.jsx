import ScrollReveal from "../Shared/ScrollReveal";
import { experiences } from "./experienceData";
import ExperienceCard from "./ExperienceCard";

const Experience = () => (
  <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50" id="experience">
    <div className="container mx-auto px-4 max-w-6xl">
      <ScrollReveal>
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="h-1.5 bg-blue-600 mx-auto rounded-full w-20" />
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 rounded-full hidden sm:block" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1} y={index % 2 === 0 ? 50 : -50}>
              <div className={`relative flex flex-col items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-0`}>
                <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 z-10 hidden sm:block">
                  <div className={`w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 bg-${exp.color}-600 shadow-lg`} />
                </div>
                <ExperienceCard exp={exp} />
                <div className="hidden md:block md:w-[10%]" />
                <div className="hidden md:block md:w-[45%]" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
