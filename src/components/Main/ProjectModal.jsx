import { motion, AnimatePresence } from "framer-motion";
import ProjectGallery from "./ProjectGallery";

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
  Laravel: "fa-brands fa-laravel text-red-500",
  PHP: "fa-brands fa-php text-indigo-500",
  MySQL: "fa-solid fa-database text-blue-600",
};

const ModalActions = ({ project }) => (
  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
    className="flex flex-col sm:flex-row gap-3">
    <a href={project.category === "backend" ? project.github : project.demo} target="_blank" rel="noopener noreferrer"
      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-sm lg:text-base">
      <i className="fa-solid fa-earth-europe text-lg" />
      {project.category === "backend" ? "Source Code" : "Live Demo"}
    </a>
    {project.github && project.category !== "backend" && (
      <a href={project.github} target="_blank" rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-xl active:scale-95 text-sm lg:text-base">
        <i className="fa-brands fa-github text-xl" /> GitHub
      </a>
    )}
  </motion.div>
);

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl h-[90vh] lg:h-[80vh] bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.6)] border border-white/40 dark:border-gray-800/40 flex flex-col lg:flex-row">
            <button onClick={onClose} className="absolute top-4 right-4 lg:top-6 lg:right-6 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 transition-all active:scale-90 border border-black/5 dark:border-white/5"><i className="fa-solid fa-xmark text-xl" /></button>
            <div className="flex flex-col lg:flex-row w-full h-full lg:overflow-hidden custom-scrollbar">
              <ProjectGallery project={project} />
              <div className="w-full lg:w-[50%] flex flex-col h-full bg-white/50 dark:bg-gray-900/50 overflow-hidden">
                <div className="flex-grow overflow-y-auto p-6 lg:p-10 custom-scrollbar group/scroll relative cursor-ns-resize">
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="pb-4">
                    <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 rounded-full mb-4 lg:mb-6">{project.category}</span>
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 lg:mb-6 leading-tight">{project.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed mb-6 lg:mb-10 font-medium">{project.desc}</p>
                    {project.tech?.length > 0 && (
                      <div className="mb-2">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Build With</h4>
                        <div className="flex flex-wrap gap-2 lg:gap-3">
                          {project.tech.map((t, i) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm">
                              <i className={`${techIcons[t] || "fa-solid fa-code text-gray-400"} text-sm lg:text-base`} />
                              <span className="text-[10px] lg:text-xs font-bold text-gray-700 dark:text-gray-200">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
                <div className="p-6 lg:p-10 pt-4 lg:pt-6 border-t border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                  <ModalActions project={project} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
