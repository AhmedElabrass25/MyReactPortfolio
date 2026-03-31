import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const getGlowColor = (category) => {
  if (category.includes("next") || category.includes("react"))
    return "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]";
  if (category === "backend")
    return "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]";
  if (category.includes("js"))
    return "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]";
  return "group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]";
};

const ProjectCard = ({ project, onShowDetails }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    key={project.id}
    className={`card w-full bg-white dark:bg-gray-800/80 shadow-xl rounded-2xl overflow-hidden border transition-all duration-500 group relative backdrop-blur-sm ${project.featured ? "border-yellow-400/60 dark:border-yellow-500/50" : "border-gray-100 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-400/50"} ${getGlowColor(project.category)}`}
  >
    <div className="p-3 pb-0">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 border-[6px] border-gray-900 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-800 rounded-b-lg z-10" />
        {project.featured && (
          <div className="absolute top-2 right-2 z-20 flex items-center gap-1 bg-yellow-400 text-yellow-900 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-lg">
            ⭐ Featured
          </div>
        )}
        <img
          src={project.image} alt={`Screenshot of ${project.name}`}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/94a3b8/ffffff?text=Image+Error"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <button onClick={() => onShowDetails(project)} className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-bold shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:scale-105 active:scale-95">
            Explore Project
          </button>
        </div>
      </div>
    </div>
    <div className="p-5 flex flex-col items-center text-center">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1 mb-2">{project.name}</h1>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400 mb-3 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">{project.category}</span>
      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-5 h-10 leading-relaxed font-medium">{project.desc}</p>
      <div className="flex gap-3 w-full">
        <button onClick={() => onShowDetails(project)} className="flex-1 inline-flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 font-bold py-2.5 px-3 rounded-xl text-xs border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
          Details
        </button>
        <Link to={project.category === "backend" ? project.github : project.demo} className="flex-1 inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-bold py-2.5 px-3 rounded-xl text-xs shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40" target="_blank">
          <i className="fa-solid fa-earth-europe me-2" />
          {project.category === "backend" ? "Source" : "Live"}
        </Link>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
