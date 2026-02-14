import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ImProfile } from "react-icons/im";
import { FaSun, FaMoon, FaAngleUp } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const currentHash = location.hash || "#";
  const isActive = (hash) => currentHash === hash;

  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("currentMode")) {
      return localStorage.getItem("currentMode");
    }
    return "dark";
  });

  function changeMode() {
    const newMode = mode === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newMode);
    setMode(newMode);
  }

  useEffect(() => {
    const body = document.body;
    if (mode === "dark") {
      body.classList.add("dark", "bg-gray-900");
      body.classList.remove("light", "bg-gray-50");
    } else {
      body.classList.add("light", "bg-gray-50");
      body.classList.remove("dark", "bg-gray-900");
    }
  }, [mode]);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const navLinks = [
    { name: "About", hash: "#" },
    { name: "Skills", hash: "#skills" },
    { name: "Experience", hash: "#experience" },
    { name: "Services", hash: "#features" },
    { name: "Projects", hash: "#main" },
    { name: "Contact", hash: "#contact" },
  ];

  const getLinkClasses = (hash) => {
    const active = isActive(hash);
    return `relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center justify-center ${
      active 
        ? "text-white bg-blue-600 shadow-lg shadow-blue-500/20 scale-105" 
        : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
    }`;
  };

  return (
    <>
      {/* Scroll to Top Button - Premium Styling */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed z-50 h-12 w-12 bottom-8 right-8 flex items-center justify-center rounded-2xl shadow-2xl bg-blue-600 text-white border border-white/20 backdrop-blur-sm"
          >
            <FaAngleUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* The Navbar - Ultra Glassmorphism */}
      <nav className="sticky top-0 z-[100] w-full transition-all duration-300 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 h-20 flex items-center">
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-purple-500 origin-left z-[101]"
          style={{ scaleX }}
        />

        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo Area */}
          <HashLink to={"#"} className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <ImProfile className="text-2xl" />
            </div>
            <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white uppercase">
              Ahmed <span className="text-blue-600 dark:text-blue-400">Hub</span>
            </span>
          </HashLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 p-1.5 bg-gray-100/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            {navLinks.map((link) => (
              <HashLink 
                key={link.name}
                to={`/${link.hash}`} 
                className={getLinkClasses(link.hash)}
              >
                {link.name}
              </HashLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={changeMode}
              className="w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all"
            >
              {mode === "dark" ? <FaSun className="text-lg text-yellow-500" /> : <FaMoon className="text-lg" />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpened(!isOpened)}
              className="lg:hidden w-11 h-11 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-current transition-all duration-300 ${isOpened ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isOpened ? "opacity-0" : "w-4"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isOpened ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 lg:hidden overflow-hidden shadow-2xl backdrop-blur-2xl"
            >
              <div className="container mx-auto px-4 py-8 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <HashLink
                      onClick={() => setIsOpened(false)}
                      to={`/${link.hash}`}
                      className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold transition-all ${
                        isActive(link.hash)
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.name}
                      {isActive(link.hash) && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                    </HashLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Header;
