import { useState, useEffect } from "react";
import { Projects } from "../products";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
];

const ITEMS_PER_PAGE = 6;

// Project Card Component (for separation and clarity)
const ProjectCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    key={project.id}
    className="card w-full bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
  >
    <div className="divImage aspect-video overflow-hidden">
      <img
        src={project.image}
        className="w-full h-full object-cover transition duration-500 hover:scale-105"
        alt={`Screenshot of ${project.name}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x300/94a3b8/ffffff?text=Image+Error";
        }}
      />
    </div>
    <div className="p-4 flex flex-col items-center text-center">
      <h1 className="text-xl lg:text-2xl font-extrabold text-gray-900 dark:text-white mb-1 w-full line-clamp-1">
        {project.name}
      </h1>
      <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 w-full capitalize tracking-wider">
        {project.category}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
        {project.desc}
      </p>
      <Link
        to={project.demo}
        className="inline-flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 font-medium py-2 px-4 border border-blue-100 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700"
        target="_blank"
      >
        {/* Using Font Awesome as provided */}
        <i className="fa-solid fa-earth-europe text-lg me-2"></i>
        <span>Live Demo</span>
      </Link>
    </div>
  </motion.div>
);

const Main = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [currentPage, setCurrentPage] = useState(1);

  const activeFilter =
    TABS.find((tab) => tab.id === activeTab)?.filter || (() => true);
  const filteredProjects = Projects.filter(activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

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
        <h1 className="text-4xl sm:text-5xl font-extrabold capitalize w-full text-center mb-16 text-gray-900 dark:text-white">
          🚀 My Portfolio
        </h1>

        {/* Tabs */}
        <div className="mb-12">
          <ul
            className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6"
            role="tablist"
          >
            {TABS.map((tab) => (
              <li key={tab.id} role="presentation">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-block px-4 py-2 border-2 rounded-full capitalize text-sm sm:text-base font-semibold transition duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-blue-600 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200 shadow-md"
                      : "border-gray-300 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400"
                  }`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="tabpanel"
        >
          <AnimatePresence mode="wait">
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
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
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  // Ensure scrollIntoView works correctly
                  document
                    .getElementById("main")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-10 h-10 text-base rounded-full font-bold transition duration-300 border-2 ${
                  currentPage === page
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                    : "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Main;
