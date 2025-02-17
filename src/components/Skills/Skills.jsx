import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFormik, SiMui, SiNextdotjs, SiRedux } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: FaSquareJs, name: "JavaScript" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    { icon: SiMui, name: "Material UI" },
    { icon: SiFormik, name: "formik" },
    { icon: FaGitAlt, name: "git" },
    { icon: FaGithub, name: "github" },
    { icon: FaReact, name: "React" },
    { icon: SiRedux, name: "Redux Tookit" },
    { icon: SiNextdotjs, name: "next" },
  ];

  return (
    <section className="py-14 mt-5" id="skills">
      {/* <<<<<<<<<< Title >>>>>>>>>>> */}
      <h1 className="text-3xl font-bold capitalize w-full text-center mb-12">
        Technical Skills
      </h1>
      <div className="container">
        <div className="row justify-center gap-10 md:gap-14">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <skill.icon className="text-5xl text-[var(--subtitle)] hover:text-[var(--title)] transition-all duration-300 mb-2" />
              <span className="uppercase text-lg font-bold text-[var(--subtitle)] hover:text-[var(--title)] transition-all duration-300">
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
