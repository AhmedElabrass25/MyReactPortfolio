import { useState, useEffect } from "react";
import { Projects } from "../../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";
import ProjectPagination from "./ProjectPagination";
import ScrollReveal from "../Shared/ScrollReveal";

const ITEMS_PER_PAGE = 6;

const TABS = [
  { id: "tab1", label: "all projects", filter: () => true },
  { id: "tab4", label: "react", filter: (p) => p.category.includes("react") },
  { id: "tab5", label: "nextJs", filter: (p) => p.category.includes("next") },
  { id: "tab6", label: "Backend", filter: (p) => p.category === "backend" },
  { id: "tab2", label: "html & css", filter: (p) => p.category === "html&css" },
  { id: "tab3", label: "JavaScript", filter: (p) => p.category === "html&css&js" },
];

const Main = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabCounts = TABS.reduce((acc, tab) => { acc[tab.id] = Projects.filter(tab.filter).length; return acc; }, {});
  const activeFilter = TABS.find((tab) => tab.id === activeTab)?.filter || (() => true);
  const filteredProjects = Projects.filter(activeFilter).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleShowDetails = (project) => { setSelectedProject(project); setIsModalOpen(true); };
  const handleCloseModal = () => { setIsModalOpen(false); setTimeout(() => setSelectedProject(null), 300); };

  useEffect(() => { setCurrentPage(1); }, [activeTab]);

  return (
    <section className="mainSection my-16 bg-gray-50 dark:bg-gray-900 min-h-[80vh]" id="main">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold capitalize w-full text-center mb-16 text-gray-900 dark:text-white">🚀 My Portfolio</h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-16 flex justify-center">
            <div className="bg-white dark:bg-gray-800 p-1.5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-wrap justify-center gap-1 relative overflow-hidden">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-colors duration-300 flex items-center gap-2 group ${isActive ? "text-white" : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"}`}
                  >
                    {isActive && <motion.div layoutId="activeTab" className="absolute inset-0 bg-blue-600 rounded-xl -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                    <span className="capitalize">{tab.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full transition-colors ${isActive ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"}`}>{tabCounts[tab.id]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="tabpanel">
          <AnimatePresence mode="wait">
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => <ProjectCard key={project.id} project={project} onShowDetails={handleShowDetails} />)
            ) : (
              <motion.div key="no-projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="lg:col-span-3 text-center p-10 bg-white dark:bg-gray-800 rounded-xl shadow-inner text-lg font-medium text-gray-500 dark:text-gray-400">
                No projects found for this category.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <ProjectPagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default Main;
