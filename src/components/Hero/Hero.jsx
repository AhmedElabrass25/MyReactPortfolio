import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import computerAnimation from "../../assets/animation/computer.json";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero my-14" id="hero">
      <div className="container">
        <div className="row w-full justify-between">
          {/* <<<<<<<<< 
          Left Side
          >>>>>>>>>>> */}
          <div className="leftSide w-full md:w-1/2">
            <div className="parent-avatar flex">
              <img src="./me.jpg" className="avatar" alt="" />
              <div className="icon-verified"></div>
            </div>
            <motion.h1
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ duration: 1 }}
              className="title w-full capitalize text-2xl lg:text-4xl font-bold mb-6"
            >
              Frontend react developer
            </motion.h1>
            {/* <<<<<<<<<< Intoduction >>>>>>>>> */}
            <p className="sub-title w-full text-[18px] lg:text-[22px] tracking-[1px] mb-5 text-[var(--subtitle)] mb-6">
              I’m{" "}
              <span className="text-[var(--blue)] font-bold">
                Ahmed Mohamed
              </span>
              ,I specialize in crafting modern, clean, and responsive websites
              that offer the best user experience. I focus on building websites
              that are functional, user-friendly, and visually appealing. I add
              a personal touch to each project, ensuring it’s both eye-catching
              and easy to navigate.
            </p>
            {/* <<<<<<<<<< Social Icons >>>>>>>>> */}
            <div className="flex items-center gap-x-7">
              <Link to="https://github.com/AhmedElabrass25" target="_blank">
                <i className="fa-brands fa-github text-[25px] text-[var(--icon-hover)] hover:text-[var(--icon-hover)] transition-all duration-300"></i>{" "}
              </Link>
              <i className="fa-brands fa-twitter text-[25px] text-[var(--subtitle)] hover:text-[var(--icon-hover)] transition-all duration-300"></i>
              <i className="fa-brands fa-facebook text-[25px] text-[var(--subtitle)] hover:text-[var(--icon-hover)] transition-all duration-300"></i>{" "}
              <i className="fa-brands fa-linkedin text-[25px] text-[var(--subtitle)] hover:text-[var(--icon-hover)] transition-all duration-300"></i>
            </div>
          </div>
          {/* <<<<<<<<< 
          Right Side (motion image)
          >>>>>>>>>>> */}
          <div className="leftSide w-full md:w-1/2">
            <Lottie
              style={{ width: "100%" }}
              animationData={computerAnimation}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
