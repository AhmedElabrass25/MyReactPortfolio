import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaLaravel, FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const cvLinks = {
  frontend: "https://drive.google.com/file/d/1gPwVPO1FFppbQAiOBaY2F340UBw8FCFr/view?usp=sharing",
  backend: "https://drive.google.com/file/d/1CC1SnVwv6YaJO5rERitAuYc-vgNZOsL8/view?usp=sharing",
};

const socialLinks = [
  { icon: FaGithub, link: "https://github.com/AhmedElabrass25", hover: "hover:text-gray-900 dark:hover:text-white" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/ahmed-elabrass012", hover: "hover:text-blue-700" },
  { icon: FaWhatsapp, link: "https://wa.me/201208448553", hover: "hover:text-green-500" },
];

const HeroActions = () => {
  const [showCVMenu, setShowCVMenu] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 relative">
        <motion.a
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          href="#main"
          className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 transition-all group"
        >
          View My Projects
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.a>

        <div className="relative w-full sm:w-auto">
          <motion.button
            onClick={() => setShowCVMenu(!showCVMenu)}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-lg"
          >
            <FaDownload className="text-blue-500" /> Get Resume
          </motion.button>
          <AnimatePresence>
            {showCVMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute z-50 mt-2 w-full sm:w-64 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-2xl p-2 left-0 top-full overflow-hidden"
              >
                {[{ label: "Frontend CV", sub: "React & Next.js Focus", href: cvLinks.frontend, Icon: FaReact, colors: "blue" },
                  { label: "Backend CV", sub: "Laravel & MySQL Focus", href: cvLinks.backend, Icon: FaLaravel, colors: "purple" }
                ].map(({ label, sub, href, Icon, colors }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 hover:bg-${colors}-50 dark:hover:bg-${colors}-900/20 rounded-xl transition-colors group`}
                    onClick={() => setShowCVMenu(false)}
                  >
                    <div className={`w-10 h-10 bg-${colors}-100 dark:bg-${colors}-900/30 rounded-lg flex items-center justify-center text-${colors}-600 dark:text-${colors}-400 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-lg" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{label}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">{sub}</p>
                    </div>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-start gap-6 border-t border-gray-100 dark:border-gray-800 pt-8 mt-4">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Connect With Me:</span>
        <div className="flex gap-4">
          {socialLinks.map((social, i) => (
            <motion.a key={i} whileHover={{ y: -3 }} href={social.link} target="_blank"
              className={`text-2xl text-gray-400 dark:text-gray-600 transition-colors ${social.hover}`}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroActions;
