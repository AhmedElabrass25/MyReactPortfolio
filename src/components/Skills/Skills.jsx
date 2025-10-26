import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaAngular,
} from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiFormik,
  SiMui,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: FaCss3, name: "CSS3", color: "text-blue-500" },
    { icon: FaSquareJs, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: FaReact, name: "React", color: "text-sky-400" },
    { icon: FaAngular, name: "Angular", color: "text-red-600" },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-gray-900 dark:text-white",
    },
    { icon: SiRedux, name: "Redux Toolkit", color: "text-purple-600" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-cyan-500" },
    { icon: FaBootstrap, name: "Bootstrap", color: "text-indigo-600" },
    { icon: SiMui, name: "Material UI", color: "text-blue-700" },
    { icon: SiFormik, name: "Formik", color: "text-indigo-500" },
    { icon: FaGitAlt, name: "Git", color: "text-red-700" },
    {
      icon: FaGithub,
      name: "GitHub",
      color: "text-gray-800 dark:text-gray-300",
    },
  ];

  return (
    <section className="py-16" id="skills">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold capitalize w-full text-center mb-16 text-gray-900 dark:text-white">
          🛠️ Technical Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-12 gap-x-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-3 sm:p-4 transition duration-300 transform hover:scale-110 hover:shadow-xl rounded-xl"
            >
              {/* Icon */}
              <skill.icon
                className={`text-6xl sm:text-7xl mb-3 transition-all duration-300 ${skill.color} drop-shadow-md`}
              />
              {/* Name */}
              <span className="uppercase text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 transition-all duration-300 text-center whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
