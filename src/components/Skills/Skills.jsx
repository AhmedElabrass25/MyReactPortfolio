import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiFormik,
  SiMui,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiMysql,
  SiSupabase,
  SiPostman,
  SiFigma,
  SiZod,
  SiReacthookform,
  SiShadcnui,
} from "react-icons/si";
import ScrollReveal from "../Shared/ScrollReveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: FaHtml5, name: "HTML5", color: "text-orange-500", level: "Expert" },
        { icon: FaCss3, name: "CSS3", color: "text-blue-500", level: "Expert" },
        { icon: FaSquareJs, name: "JavaScript", color: "text-yellow-500", level: "Expert" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", level: "Advanced" },
        {icon: FaReact, name: "React", color: "text-sky-400", level: "Expert" },
        { icon: SiNextdotjs, name: "Next.js", color: "text-gray-900 dark:text-white", level: "Advanced" },
        { icon: SiRedux, name: "Redux Toolkit", color: "text-purple-600", level: "Advanced" },
        { icon: SiReacthookform, name: "Hook Form", color: "text-pink-500", level: "Expert" },
        { icon: SiZod, name: "Zod", color: "text-blue-400", level: "Advanced" },
        { icon: SiShadcnui, name: "Shadcn UI", color: "text-slate-900 dark:text-white", level: "Advanced" },
        { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-cyan-500", level: "Expert" },
        { icon: FaBootstrap, name: "Bootstrap", color: "text-indigo-600", level: "Expert" },
        { icon: SiMui, name: "Material UI", color: "text-blue-700", level: "Advanced" },
        { icon: SiFormik, name: "Formik", color: "text-indigo-500", level: "Advanced" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { icon: FaLaravel, name: "Laravel", color: "text-red-600", level: "Advanced" },
        { icon: FaPhp, name: "PHP", color: "text-indigo-500", level: "Advanced" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-600", level: "Advanced" },
        { icon: SiSupabase, name: "Supabase", color: "text-emerald-500", level: "Intermediate" },
      ],
    },
    {
      title: "Tools & Collaboration",
      skills: [
        { icon: FaGitAlt, name: "Git", color: "text-red-700", level: "Expert" },
        { icon: FaGithub, name: "GitHub", color: "text-gray-800 dark:text-gray-300", level: "Expert" },
        { icon: SiFigma, name: "Figma", color: "text-pink-500", level: "Intermediate" },
        { icon: SiPostman, name: "Postman", color: "text-orange-600", level: "Advanced" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24" id="skills">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Technical Masterclass
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-medium">
              A comprehensive overview of my technical stack and expertise levels across different domains.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={catIndex} delay={catIndex * 0.1}>
              <div key={catIndex}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-1.5 bg-blue-600 rounded-full" />
                  {category.title}
                </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex flex-col items-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className={`text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
                      <skill.icon />
                    </div>
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200 text-center mb-2">
                      {skill.name}
                    </span>
                    <span className="text-[10px] px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full font-bold uppercase tracking-wider group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
