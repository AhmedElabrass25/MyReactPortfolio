import { useState } from "react";
import { Projects } from "../products";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="mainSection my-14" id="main">
      {/*<<<<<<<<<<<<<<<< Title >>>>>>>>>>>>>> */}
      <h1 className="text-3xl font-bold capitalize w-full text-center mb-12">
        my portfolio
      </h1>
      <div className="container">
        <div>
          {/* <<<<<<<<<<<<<< The Links >>>>>>>>>> */}
          <div className="mb-6 dark:border-gray-700">
            <ul
              className="w-full flex flex-wrap items-center justify-center gap-6 -mb-px text-sm font-medium text-center"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  onClick={() => setActiveTab("tab1")}
                  className={`inline-block px-2 py-4 border-2 rounded-lg capitalize text-[17px] tracking-[1px] text-[var(--subtitle)] font-bold mb-2 bg-[var(--bgHeader)] ${
                    activeTab === "tab1"
                      ? "border-[var(--blue)] bg-[var(--border)]"
                      : "border-gray-500"
                  }`}
                  type="button"
                  role="tab"
                  aria-controls="tab1"
                  aria-selected={activeTab === "tab1"}
                >
                  all projects
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  onClick={() => setActiveTab("tab2")}
                  className={`inline-block px-2 py-4 border-2 rounded-lg capitalize text-[17px] tracking-[1px] text-[var(--subtitle)] font-bold mb-2 bg-[var(--bgHeader)] ${
                    activeTab === "tab2"
                      ? "border-[var(--blue)] bg-[var(--border)]"
                      : "border-gray-500"
                  }`}
                  type="button"
                  role="tab"
                  aria-controls="tab2"
                  aria-selected={activeTab === "tab2"}
                >
                  html & css
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  onClick={() => setActiveTab("tab3")}
                  className={`inline-block px-2 py-4 border-2 rounded-lg capitalize text-[17px] tracking-[1px] text-[var(--subtitle)] font-bold mb-2 bg-[var(--bgHeader)] ${
                    activeTab === "tab3"
                      ? "border-[var(--blue)] bg-[var(--border)]"
                      : "border-gray-500 "
                  }`}
                  type="button"
                  role="tab"
                  aria-controls="tab3"
                  aria-selected={activeTab === "tab3"}
                >
                  JavaScript
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  onClick={() => setActiveTab("tab4")}
                  className={`inline-block px-2 py-4 border-2 rounded-lg capitalize text-[17px] tracking-[1px] text-[var(--subtitle)] font-bold mb-2 bg-[var(--bgHeader)] ${
                    activeTab === "tab4"
                      ? "border-[var(--blue)]"
                      : "border-gray-500 "
                  }`}
                  type="button"
                  role="tab"
                  aria-controls="tab4"
                  aria-selected={activeTab === "tab4"}
                >
                  react
                </button>
              </li>
            </ul>
          </div>
          {/* <<<<<<<<<<<<<< The Content >>>>>>>>>> */}
          <div id="default-tab-content">
            {activeTab === "tab1" && (
              <div
                className="flex items-center justify-between flex-wrap"
                role="tabpanel"
              >
                <AnimatePresence>
                  {Projects?.length > 0 &&
                    Projects.map((project) => {
                      return (
                        <motion.div
                          layout
                          initial={{ transform: "scale(0)" }}
                          animate={{ transform: "scale(1)" }}
                          transition={{
                            damping: 8,
                            type: "spring",
                            stiffness: "50",
                          }}
                          key={project.id}
                          className="card w-full sm:w-[48%] md:w-[32%] p-3 bg-[var(--bgHeader)] mb-3 rounded-md"
                        >
                          {/* Image */}
                          <div className="divImage mb-3">
                            <img
                              src={project.image}
                              className="w-full"
                              alt=""
                            />
                          </div>
                          {/* name */}
                          <h1 className="text-lg lg:text-2xl font-bold text-[var(--title)] mb-1 w-full text-center">
                            {project.name}
                          </h1>
                          {/* category */}
                          <h3 className="text-lg text-[var(--blue)] mb-3 w-full text-center capitalize tracking-[1.5px]">
                            {project.category}
                          </h3>
                          {/* desc */}
                          <p className="text-[var(--subtitle)] text-[18px] line-clamp-3 mb-3">
                            {project.desc}
                          </p>
                          <Link
                            to={`${project.demo}`}
                            className="flex items-center justify-center text-[var(--icon-hover)] hover:text-[var(--blue)] transition-all duration-300"
                            target="_blank"
                          >
                            <i className="fa-solid fa-earth-europe text-[25px] me-1"></i>
                            <span className="text-[18px]">Live Demo</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                </AnimatePresence>
              </div>
            )}
            {activeTab === "tab2" && (
              <div
                className="flex items-center justify-between flex-wrap"
                role="tabpanel"
              >
                <AnimatePresence>
                  {Projects?.length > 0 &&
                    Projects.map((project) => {
                      return (
                        project.category == "html&css" && (
                          <motion.div
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{
                              damping: 8,
                              type: "spring",
                              stiffness: "50",
                            }}
                            key={project.id}
                            className="card w-full sm:w-[48%] md:w-[32%] p-3 bg-[var(--bgHeader)] mb-3 rounded-md"
                          >
                            {/* Image */}
                            <div className="divImage mb-3">
                              <img
                                src={project.image}
                                className="w-full"
                                alt=""
                              />
                            </div>
                            {/* name */}
                            <h1 className="text-lg lg:text-2xl font-bold text-[var(--title)] mb-1 w-full text-center">
                              {project.name}
                            </h1>
                            {/* category */}
                            <h3 className="text-lg text-[var(--blue)] mb-3 w-full text-center capitalize tracking-[1.5px]">
                              {project.category}
                            </h3>
                            {/* desc */}
                            <p className="text-[var(--subtitle)] text-[18px] line-clamp-3 mb-3">
                              {project.desc}
                            </p>
                            <Link
                              to={`${project.demo}`}
                              className="flex items-center justify-center text-[var(--icon-hover)] hover:text-[var(--blue)] transition-all duration-300"
                              target="_blank"
                            >
                              <i className="fa-solid fa-earth-europe text-[25px] me-1"></i>
                              <span className="text-[18px]">Live Demo</span>
                            </Link>
                          </motion.div>
                        )
                      );
                    })}
                </AnimatePresence>
              </div>
            )}
            {activeTab === "tab3" && (
              <div
                className="flex items-center justify-between flex-wrap"
                role="tabpanel"
              >
                <AnimatePresence>
                  {Projects?.length > 0 &&
                    Projects.map((project) => {
                      return (
                        project.category == "html&css&js" && (
                          <motion.div
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{
                              damping: 8,
                              type: "spring",
                              stiffness: "50",
                            }}
                            key={project.id}
                            className="card w-full sm:w-[48%] md:w-[32%] p-3 bg-[var(--bgHeader)] mb-3 rounded-md"
                          >
                            {/* Image */}
                            <div className="divImage mb-3">
                              <img
                                src={project.image}
                                className="w-full"
                                alt=""
                              />
                            </div>
                            {/* name */}
                            <h1 className="text-lg lg:text-2xl font-bold text-[var(--title)] mb-1 w-full text-center">
                              {project.name}
                            </h1>
                            {/* category */}
                            <h3 className="text-lg text-[var(--blue)] mb-3 w-full text-center capitalize tracking-[1.5px]">
                              {project.category}
                            </h3>
                            {/* desc */}
                            <p className="text-[var(--subtitle)] text-[18px] line-clamp-3 mb-3">
                              {project.desc}
                            </p>
                            <Link
                              to={`${project.demo}`}
                              className="flex items-center justify-center text-[var(--icon-hover)] hover:text-[var(--blue)] transition-all duration-300"
                              target="_blank"
                            >
                              <i className="fa-solid fa-earth-europe text-[25px] me-1"></i>
                              <span className="text-[18px]">Live Demo</span>
                            </Link>
                          </motion.div>
                        )
                      );
                    })}
                </AnimatePresence>
              </div>
            )}
            {activeTab === "tab4" && (
              <div
                className="flex items-center justify-between flex-wrap"
                role="tabpanel"
              >
                <AnimatePresence>
                  {Projects?.length > 0 &&
                    Projects.map((project) => {
                      return (
                        project.category.includes("react") && (
                          <motion.div
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{
                              damping: 8,
                              type: "spring",
                              stiffness: "50",
                            }}
                            key={project.id}
                            className="card w-full sm:w-[48%] md:w-[32%] p-3 bg-[var(--bgHeader)] mb-3 rounded-md"
                          >
                            {/* Image */}
                            <div className="divImage mb-3">
                              <img
                                src={project.image}
                                className="w-full"
                                alt=""
                              />
                            </div>
                            {/* name */}
                            <h1 className="text-lg lg:text-2xl font-bold text-[var(--title)] mb-1 w-full text-center">
                              {project.name}
                            </h1>
                            {/* category */}
                            <h3 className="text-lg text-[var(--blue)] mb-3 w-full text-center capitalize tracking-[1.5px]">
                              {project.category}
                            </h3>
                            {/* desc */}
                            <p className="text-[var(--subtitle)] text-[18px] line-clamp-3 mb-3">
                              {project.desc}
                            </p>
                            <Link
                              to={`${project.demo}`}
                              className="flex items-center justify-center text-[var(--icon-hover)] hover:text-[var(--blue)] transition-all duration-300"
                              target="_blank"
                            >
                              <i className="fa-solid fa-earth-europe text-[25px] me-1"></i>
                              <span className="text-[18px]">Live Demo</span>
                            </Link>
                          </motion.div>
                        )
                      );
                    })}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
