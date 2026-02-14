import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import ScrollReveal from "../Shared/ScrollReveal";

const Experience = () => {
  const experiences = [
    {
      company: "Huma-volve",
      role: "Frontend Developer Intern",
      duration: "Dec 2025 - Jan 2026 • 2 mos",
      location: "Remote",
      desc: "Contributed to two major projects: a Doctor Appointment System (booking process) and a Flight Booking System (checkout and payment). Built responsive interfaces using React.js, Next.js, TypeScript, and Shadcn, managing server state with React Query.",
      points: [
        "Developed doctor booking logic based on available time slots",
        "Implemented checkout and payment functionality for flight booking",
        "Translated Figma designs into real UI components with Shadcn",
        "Collaborated with backend teams to define API requests/responses",
        "Managed version control using GitHub branching and PR workflows"
      ],
      color: "blue"
    },
    {
      company: "Web Masters",
      role: "Frontend Developer Intern",
      duration: "Aug 2025 - Oct 2025 • 3 mos",
      location: "Remote",
      desc: "Collaborated on multiple projects including E-commerce platforms, Learning Management Systems (LMS), and a restaurant application.",
      points: [
        "Developed responsive user interfaces using React.js and Next.js",
        "Integrated frontend with Supabase for real-time backend functionality",
        "Managed version control and collaboration through GitHub",
        "Gained hands-on experience in the full project lifecycle from design to deployment"
      ],
      color: "blue"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50" id="experience">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="h-1.5 bg-blue-600 mx-auto rounded-full w-20" />
          </div>
        </ScrollReveal>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 rounded-full hidden sm:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 0.1} y={index % 2 === 0 ? 50 : -50}>
                <div
                  className={`relative flex flex-col items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-0`}
                >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 z-10 hidden sm:block">
                  <div className={`w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 bg-${exp.color}-600 shadow-lg`} />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-[45%]">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 group">
                    <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-gray-700/50 rounded-full text-sm font-semibold text-gray-600 dark:text-gray-300">
                        <FaCalendarAlt className="text-blue-500" />
                        {exp.duration}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-6 text-gray-500 dark:text-gray-400 font-medium">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium">
                      {exp.desc}
                    </p>

                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed">
                          <span className={`min-w-[8px] h-2 rounded-full mt-1.5 bg-${exp.color}-500 opacity-60`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

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
};

export default Experience;
