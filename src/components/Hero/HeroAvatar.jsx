import { motion } from "framer-motion";

const HeroAvatar = ({ avatarUrl, fullName }) => (
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
);

export default HeroAvatar;
