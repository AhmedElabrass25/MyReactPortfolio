import { motion } from "framer-motion";
import { FaReact, FaLaravel } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import heroFullstack from "../../assets/images/hero-fullstack.png";
import ScrollReveal from "../Shared/ScrollReveal";

const floatingIcons = [
  { Icon: FaReact, color: "text-sky-400", top: "10%", left: "15%", delay: 0 },
  { Icon: FaLaravel, color: "text-red-500", top: "70%", left: "10%", delay: 1 },
  { Icon: FaSquareJs, color: "text-yellow-400", top: "20%", right: "15%", delay: 0.5 },
  { Icon: SiNextdotjs, color: "text-gray-900 dark:text-white", top: "65%", right: "12%", delay: 1.5 },
];

const HeroVisual = () => (
  <div className="w-full lg:w-2/5 relative">
    <ScrollReveal delay={0.2}>
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -20, 0] }}
          transition={{ opacity: { delay: 0.5 + item.delay }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay } }}
          style={{ position: "absolute", top: item.top, left: item.left, right: item.right }}
          className={`z-20 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl ${item.color} hidden sm:block`}
        >
          <item.Icon className="text-2xl lg:text-3xl" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full -z-10 animate-pulse" />
          <img
            src={heroFullstack}
            alt="Full Stack Developer Illustration"
            className="w-full h-auto max-w-[500px] mx-auto drop-shadow-2xl rounded-3xl"
          />
        </motion.div>
      </motion.div>
    </ScrollReveal>
  </div>
);

export default HeroVisual;
