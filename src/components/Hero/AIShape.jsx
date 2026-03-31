import { motion } from "framer-motion";

const AIShape = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />

      <motion.div
        animate={{
          rotate: 360,
          borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "70% 30% 50% 50% / 30% 60% 40% 70%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-3/4 h-3/4 bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-blue-400/40 backdrop-blur-3xl border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-1/3 h-1/3 rounded-full bg-blue-500/30 blur-2xl font-black text-white/10 flex items-center justify-center text-4xl"
        >
          AI
        </motion.div>
      </motion.div>

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ rotate: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" } }}
          className="absolute border border-white/10 rounded-full"
          style={{ width: `${75 + i * 12}%`, height: `${75 + i * 12}%`, borderStyle: i === 1 ? "dashed" : "solid" }}
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -100, 0], x: [0, i % 2 === 0 ? 50 : -50, 0], opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: i * 0.5 }}
          className="absolute w-2 h-2 bg-blue-400 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default AIShape;
