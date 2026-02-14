import { useState, useEffect } from "react";
import { Projects } from "../../data/projects";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import ScrollReveal from "../Shared/ScrollReveal";

const ITEMS_PER_PAGE = 6;

const TABS = [
  { id: "tab1", label: "all projects", filter: () => true },
  { id: "tab2", label: "html & css", filter: (p) => p.category === "html&css" },
  {
    id: "tab3",
    label: "JavaScript",
    filter: (p) => p.category === "html&css&js",
  },
  { id: "tab4", label: "react", filter: (p) => p.category.includes("react") },
  { id: "tab5", label: "nextJs", filter: (p) => p.category.includes("next") },
  { id: "tab6", label: "Backend", filter: (p) => p.category === "backend" },
];

const getGlowColor = (category) => {
  if (category.includes("next") || category.includes("react"))
    return "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]";
  if (category === "backend")
    return "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]";
  if (category.includes("js"))
    return "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]";
  return "group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]";
};

// Project Card Component
const ProjectCard = ({ project, onShowDetails }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    key={project.id}
    className={`card w-full bg-white dark:bg-gray-800/80 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-500 group relative backdrop-blur-sm ${getGlowColor(
      project.category
    )}`}
  >
    {/* Device Frame Wrapper */}
    <div className="p-3 pb-0">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 border-[6px] border-gray-900 shadow-2xl">
        {/* Device Camera/Notch Mockup */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-800 rounded-b-lg z-10"></div>

        <img
          src={project.image}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
          alt={`Screenshot of ${project.name}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x300/94a3b8/ffffff?text=Image+Error";
          }}
        />

        {/* Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <button
            onClick={() => onShowDetails(project)}
            className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-bold shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:scale-105 active:scale-95"
          >
            Explore Project
          </button>
        </div>
      </div>
    </div>

    <div className="p-5 flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
          {project.name}
        </h1>
      </div>

      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400 mb-3 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
        {project.category}
      </span>

      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-5 h-10 leading-relaxed font-medium">
        {project.desc}
      </p>

      <div className="flex gap-3 w-full">
        <button
          onClick={() => onShowDetails(project)}
          className="flex-1 inline-flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 font-bold py-2.5 px-3 rounded-xl text-xs border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
        >
          Details
        </button>
        <Link
          to={project.category === "backend" ? project.github : project.demo}
          className="flex-1 inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-bold py-2.5 px-3 rounded-xl text-xs shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          target="_blank"
        >
          <i className="fa-solid fa-earth-europe me-2"></i>
          {project.category === "backend" ? "Source" : "Live"}
        </Link>
      </div>
    </div>
  </motion.div>
);

const Main = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate counts for each tab
  const tabCounts = TABS.reduce((acc, tab) => {
    acc[tab.id] = Projects.filter(tab.filter).length;
    return acc;
  }, {});

  const activeFilter =
    TABS.find((tab) => tab.id === activeTab)?.filter || (() => true);
  const filteredProjects = Projects.filter(activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleShowDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optional: clear selected project after animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Reset to first page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  return (
    <section
      className="mainSection my-16 bg-gray-50 dark:bg-gray-900 min-h-[80vh]"
      id="main"
    >
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold capitalize w-full text-center mb-16 text-gray-900 dark:text-white">
            🚀 My Portfolio
          </h1>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16 flex justify-center">
            <div className="bg-white dark:bg-gray-800 p-1.5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-wrap justify-center gap-1 relative overflow-hidden">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-colors duration-300 flex items-center gap-2 group ${
                      isActive 
                        ? "text-white" 
                        : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="capitalize">{tab.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full transition-colors ${
                      isActive 
                        ? "bg-blue-500 text-white" 
                        : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
                    }`}>
                      {tabCounts[tab.id]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="tabpanel"
        >
          <AnimatePresence mode="wait">
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onShowDetails={handleShowDetails}
                />
              ))
            ) : (
              <motion.div
                key="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:col-span-3 text-center p-10 bg-white dark:bg-gray-800 rounded-xl shadow-inner text-lg font-medium text-gray-500 dark:text-gray-400"
              >
                No projects found for this category.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-20">
            <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2 backdrop-blur-sm">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const isActive = currentPage === page;
                return (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setCurrentPage(page);
                      document
                        .getElementById("main")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`relative w-11 h-11 flex items-center justify-center rounded-xl text-base font-bold transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePage"
                        className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {page}
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Main;
