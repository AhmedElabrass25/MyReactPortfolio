import { motion, AnimatePresence } from "framer-motion";

const techIcons = {
  React: "fa-brands fa-react text-blue-400",
  "Next.js": "fa-solid fa-n text-gray-900 dark:text-white",
  JavaScript: "fa-brands fa-square-js text-yellow-400",
  HTML: "fa-brands fa-html5 text-orange-500",
  CSS: "fa-brands fa-css3-alt text-blue-500",
  Tailwind: "fa-solid fa-palette text-cyan-400",
  Supabase: "fa-solid fa-database text-emerald-500",
  Redux: "fa-solid fa-atom text-purple-500",
  Firebase: "fa-solid fa-fire text-orange-400",
  Vite: "fa-solid fa-bolt text-yellow-300",
  Node: "fa-brands fa-node-js text-green-500",
  MongoDB: "fa-solid fa-leaf text-green-400",
  Express: "fa-solid fa-server text-gray-500",
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop with enhanced blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Content - Refined Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.6)] border border-white/40 dark:border-gray-800/40 flex flex-col lg:flex-row"
          >
            {/* Close Button - More modern & Fixed position */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 z-[110] w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 transition-all active:scale-90 border border-black/5 dark:border-white/5"
            >
              <i className="fa-solid fa-xmark text-lg lg:text-xl"></i>
            </button>

            {/* Scrollable Container for Entire Content on Mobile */}
            <div className="flex flex-col lg:flex-row w-full h-full overflow-y-auto lg:overflow-hidden">
              
              {/* Image Section - Mock Device Look */}
              <div className="w-full lg:w-[50%] bg-gray-50/50 dark:bg-gray-950/50 p-6 lg:p-12 flex items-center justify-center lg:h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="relative w-full aspect-video rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border-[6px] lg:border-[10px] border-gray-900 dark:border-gray-800"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                </motion.div>
              </div>

              {/* Details Section */}
              <div className="w-full lg:w-[50%] p-6 lg:p-12 flex flex-col bg-white/50 dark:bg-gray-900/50 lg:h-full lg:overflow-hidden">
                
                {/* Scrollable Content Part */}
                <div className="flex-grow lg:overflow-y-auto pr-2 custom-scrollbar lg:mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 rounded-full mb-4 lg:mb-6">
                      {project.category}
                    </span>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 lg:mb-6 leading-tight">
                      {project.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed mb-6 lg:mb-10 font-medium">
                      {project.desc}
                    </p>
                  </motion.div>

                  {/* Tech Stack */}
                  {project.tech && project.tech.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-8 lg:mb-10"
                    >
                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">
                        Build With
                      </h4>
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {project.tech.map((t, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm"
                          >
                            <i className={`${techIcons[t] || "fa-solid fa-code text-gray-400"} text-sm lg:text-base`}></i>
                            <span className="text-[10px] lg:text-xs font-bold text-gray-700 dark:text-gray-200">
                              {t}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Fixed Actions Area at Bottom of Details */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0 pt-4 border-t border-gray-100 dark:border-gray-800"
                >
                  <a
                    href={project.category === "backend" ? project.github : project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-sm lg:text-base"
                  >
                    <i className="fa-solid fa-earth-europe text-lg"></i>
                    {project.category === "backend" ? "Source Code" : "Live Demo"}
                  </a>
                  {project.github && project.category !== "backend" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-xl active:scale-95 text-sm lg:text-base"
                    >
                      <i className="fa-brands fa-github text-xl"></i>
                      GitHub
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
