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

  const renderProjectCard = (project) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      key={project.id}
      className="card w-full sm:w-[46%] md:w-[30%] p-3 bg-[var(--bgHeader)] mb-3 rounded-md"
    >
      <div className="divImage h-[250px] mb-3">
        <img src={project.image} className="w-full h-full" alt="" />
      </div>
      <h1 className="text-lg lg:text-2xl font-bold text-[var(--title)] mb-1 w-full text-center">
        {project.name}
      </h1>
      <h3 className="text-lg text-[var(--blue)] mb-3 w-full text-center capitalize tracking-[1.5px]">
        {project.category}
      </h3>
      <p className="text-[var(--subtitle)] text-[18px] line-clamp-3 mb-3">
        {project.desc}
      </p>
      <Link
        to={project.demo}
        className="flex items-center justify-center text-[var(--icon-hover)] hover:text-[var(--blue)] transition-all duration-300"
        target="_blank"
      >
        <i className="fa-solid fa-earth-europe text-[25px] me-1"></i>
        <span className="text-[18px]">Live Demo</span>
      </Link>
    </motion.div>
  );

  return (
    <section className="mainSection my-14" id="main">
      <h1 className="text-3xl font-bold capitalize w-full text-center mb-12">
        my portfolio
      </h1>
      <div className="container">
        {/* Tabs */}
        <div className="mb-6 dark:border-gray-700">
          <ul
            className="w-full flex flex-wrap items-center justify-center gap-6 -mb-px text-sm font-medium text-center"
            role="tablist"
          >
            {TABS.map((tab) => (
              <li key={tab.id} role="presentation">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-block px-2 py-4 border-2 rounded-lg capitalize text-[17px] tracking-[1px] text-[var(--subtitle)] font-bold mb-2 bg-[var(--bgHeader)] ${
                    activeTab === tab.id
                      ? "border-[var(--blue)] bg-[var(--border)]"
                      : "border-gray-500"
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

        {/* Project Cards */}
        <div
          className="flex items-center justify-between flex-wrap"
          role="tabpanel"
        >
          <AnimatePresence>
            {currentProjects.map(renderProjectCard)}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  document
                    .getElementById("main")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-10 h-10 text-sm rounded-full border font-semibold transition duration-300 ${
                  currentPage === page
                    ? "bg-[var(--blue)] text-white"
                    : "bg-white text-[var(--blue)] border-[var(--blue)]"
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
