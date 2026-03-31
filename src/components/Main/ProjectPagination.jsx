import { motion, AnimatePresence } from "framer-motion";

const ProjectPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-20">
      <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2 backdrop-blur-sm">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isActive = currentPage === page;
          return (
            <motion.button
              key={page}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={() => {
                setCurrentPage(page);
                document.getElementById("main")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`relative w-11 h-11 flex items-center justify-center rounded-xl text-base font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}`}
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
  );
};

export default ProjectPagination;
