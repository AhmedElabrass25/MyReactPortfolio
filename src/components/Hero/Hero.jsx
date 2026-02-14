import Lottie from "lottie-react";
import computerAnimation from "../../assets/animation/computer.json";
import { motion, AnimatePresence } from "framer-motion";
import avatarUrl from "../../assets/images/ahmedimage.webp";
import { FaReact, FaLaravel, FaGithub, FaLinkedin, FaWhatsapp, FaDownload, FaArrowRight } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { useState, useEffect } from "react";
import ScrollReveal from "../Shared/ScrollReveal";

const Hero = () => {
  const fullName = "Ahmed Mohamed";
  const roles = ["Fullstack Developer", "Frontend Specialist", "Backend Enthusiast", "UI/UX Thinker"];
  const [roleIndex, setRoleIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const floatingIcons = [
    { Icon: FaReact, color: "text-sky-400", top: "10%", left: "15%", delay: 0 },
    { Icon: FaLaravel, color: "text-red-500", top: "70%", left: "10%", delay: 1 },
    { Icon: FaSquareJs, color: "text-yellow-400", top: "20%", right: "15%", delay: 0.5 },
    { Icon: SiNextdotjs, color: "text-gray-900 dark:text-white", top: "65%", right: "12%", delay: 1.5 },
  ];

  const [showCVMenu, setShowCVMenu] = useState(false);

  const cvLinks = {
    frontend: "https://drive.google.com/file/d/1gPwVPO1FFppbQAiOBaY2F340UBw8FCFr/view?usp=sharing",
    backend: "https://drive.google.com/file/d/1CC1SnVwv6YaJO5rERitAuYc-vgNZOsL8/view?usp=sharing"
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-32" id="hero">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <ScrollReveal>
              {/* Avatar Section */}
              <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative inline-flex items-center justify-center mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 rounded-full animate-spin-slow blur-[2px]" />
              <div className="relative p-1 bg-white dark:bg-gray-900 rounded-full overflow-hidden">
                <img
                  src={avatarUrl}
                  alt={fullName}
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover object-center shadow-2xl"
                />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute bottom-1 right-1 lg:bottom-2 lg:right-2 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900 shadow-lg text-white"
              >
                <i className="fas fa-check text-[10px]" />
              </motion.div>
            </motion.div>

            {/* Title with Typing Effect */}
            <div className="mb-6 space-y-2">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm lg:text-base"
              >
                Welcome to my world
              </motion.p>
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">{fullName}</span>
                <br />
                <div className="h-[1.2em] relative flex justify-center lg:justify-start overflow-hidden mt-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                      className="absolute"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              I bridge the gap between complex backend logic and pixel-perfect frontend experiences.
              Specializing in <span className="text-gray-900 dark:text-white font-bold">React, Next.js, and Laravel</span> to build exceptional digital products.
            </motion.p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 relative">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#main"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 transition-all group"
              >
                View My Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* CV Dropdown Component */}
              <div className="relative w-full sm:w-auto">
                <motion.button
                  onClick={() => setShowCVMenu(!showCVMenu)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg"
                >
                  <FaDownload className="text-blue-500" />
                  Get Resume
                </motion.button>

                <AnimatePresence>
                  {showCVMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute z-50 mt-2 w-full sm:w-64 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-2xl p-2 left-0 top-full overflow-hidden"
                    >
                      <a
                        href={cvLinks.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-colors group"
                        onClick={() => setShowCVMenu(false)}
                      >
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                          <FaReact className="text-lg" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Frontend CV</p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">React & Next.js Focus</p>
                        </div>
                      </a>
                      
                      <a
                        href={cvLinks.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-xl transition-colors group mt-1"
                        onClick={() => setShowCVMenu(false)}
                      >
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                          <FaLaravel className="text-lg" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">Backend CV</p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Laravel & MySQL Focus</p>
                        </div>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Social Connect */}
            <div className="flex items-center justify-center lg:justify-start gap-6 border-t border-gray-100 dark:border-gray-800 pt-8 mt-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Connect With Me:</span>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, link: "https://github.com/AhmedElabrass25", hover: "hover:text-gray-900 dark:hover:text-white" },
                  { icon: FaLinkedin, link: "https://www.linkedin.com/in/ahmed-elabrass012", hover: "hover:text-blue-700" },
                  { icon: FaWhatsapp, link: "https://wa.me/201208448553", hover: "hover:text-green-500" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3 }}
                    href={social.link}
                    target="_blank"
                    className={`text-2xl text-gray-400 dark:text-gray-600 transition-colors ${social.hover}`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Right Visuals */}
          <div className="w-full lg:w-2/5 relative">
            <ScrollReveal delay={0.2}>
              {/* Floating Tech Icons */}
            {floatingIcons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  y: [0, -20, 0],
                }}
                transition={{ 
                  opacity: { delay: 0.5 + item.delay },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay }
                }}
                style={{ 
                  position: "absolute",
                  top: item.top,
                  left: item.left,
                  right: item.right
                }}
                className={`z-20 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl ${item.color} hidden sm:block`}
              >
                <item.Icon className="text-2xl lg:text-3xl" />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full -z-10 animate-pulse" />
              <Lottie
                style={{ width: "100%", maxHeight: "500px" }}
                animationData={computerAnimation}
              />
            </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
