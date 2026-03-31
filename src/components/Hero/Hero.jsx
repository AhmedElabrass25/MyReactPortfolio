import { motion, AnimatePresence } from "framer-motion";
import avatarUrl from "../../assets/images/ahmedimage.webp";
import { useState, useEffect } from "react";
import ScrollReveal from "../Shared/ScrollReveal";
import HeroAvatar from "./HeroAvatar";
import HeroActions from "./HeroActions";
import HeroVisual from "./HeroVisual";

const roles = ["Fullstack Developer", "Frontend Specialist", "Backend Enthusiast", "UI/UX Thinker"];

const Hero = () => {
  const fullName = "Ahmed Mohamed";
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32" id="hero">
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <ScrollReveal>
              <HeroAvatar avatarUrl={avatarUrl} fullName={fullName} />

              <div className="mb-6 space-y-2">
                <motion.p
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm lg:text-base"
                >
                  Welcome to my world
                </motion.p>
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">{fullName}</span><br />
                  <span className="text-3xl sm:text-5xl bg-clip-text text-gray-800 dark:text-gray-200">Full Stack Developer | React & Laravel</span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium"
              >
                I build scalable, high-performance web applications using modern frontend technologies and robust backend systems.
                <span className="block mt-2">
                  Experienced in clean architecture, structured data design, and leveraging AI tools to deliver smart, efficient, and production-ready solutions.
                </span>
              </motion.p>

              <HeroActions />
            </ScrollReveal>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
