import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import computerAnimation from "../../assets/animation/computer.json";
import { motion } from "framer-motion";
import avatarUrl from "../../assets/images/ahmedimage.jpg";
const Hero = () => {
  // Placeholder image URL for the avatar
  const fullName = "Ahmed Mohamed";

  return (
    <section className="hero py-28" id="hero">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* <<<<<<<<<
          Left Side (Text Content)
          >>>>>>>>>>> */}
          <div className="w-full md:w-1/2 md:pr-10">
            {/* Avatar & Verification Badge */}
            <div className="relative flex items-center mb-6">
              <img
                src={avatarUrl}
                alt="Personal Avatar"
                className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-xl object-cover object-center"
              />
              {/* Verified Badge Placeholder */}
              <div
                className="absolute bottom-0 left-16 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900 shadow-md"
                title="Verified"
              >
                <i className="fas fa-check text-white text-xs"></i>
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full capitalize text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white"
            >
              Frontend React Developer
            </motion.h1>

            {/* Introduction */}
            <p className="w-full text-lg sm:text-xl tracking-wide mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
              I’m{" "}
              <span className="text-blue-600 dark:text-blue-400 font-bold">
                {fullName}
              </span>
              , I specialize in crafting modern, clean, and responsive websites
              that offer the best user experience. I focus on building websites
              that are functional, user-friendly, and visually appealing. I add
              a personal touch to each project, ensuring it’s both eye-catching
              and easy to navigate.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-x-7">
              {/* GitHub */}
              <a
                rel="noopener noreferrer"
                href="https://wa.me/201208448553"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                <i className="fa-brands fa-whatsapp text-3xl"></i>
              </a>
              <Link
                to="https://github.com/AhmedElabrass25"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <i className="fa-brands fa-github text-3xl"></i>
              </Link>
              {/* WhatsApp */}

              {/* LinkedIn */}
              <Link
                to="https://www.linkedin.com/in/ahmed-elabrass012"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors duration-300"
              >
                <i className="fa-brands fa-linkedin text-3xl"></i>
              </Link>
            </div>
          </div>

          {/* <<<<<<<<<
          Right Side (Lottie Animation)
          >>>>>>>>>>> */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Lottie
                style={{ width: "100%", maxHeight: "500px" }}
                animationData={computerAnimation}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
