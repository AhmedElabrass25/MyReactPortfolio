import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectGallery = ({ project }) => {
  const allImages = [project.image, ...(project.subImages || [])];
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => setActiveIdx((prev) => (prev + 1) % allImages.length);
  const handlePrev = () => setActiveIdx((prev) => (prev - 1 + allImages.length) % allImages.length);

  return (
    <div className="w-full lg:w-[50%] bg-gray-50/50 dark:bg-gray-950/50 p-4 lg:p-8 flex flex-col items-center justify-center gap-4 lg:h-full overflow-hidden">
      <div className="relative w-full aspect-[4/3] lg:aspect-video rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border-[6px] lg:border-[10px] border-gray-900 dark:border-gray-800 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIdx}
            src={allImages[activeIdx]}
            alt={`${project.name} view ${activeIdx + 1}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {allImages.length > 1 && (
          <>
            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10">
              <FaChevronLeft className="text-sm" />
            </button>
            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10">
              <FaChevronRight className="text-sm" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {allImages.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeIdx ? "w-6 bg-blue-500 shadow-lg shadow-blue-500/50" : "w-1.5 bg-white/50"}`} />
              ))}
            </div>
          </>
        )}
      </div>

      {allImages.length > 1 && (
        <div className="flex gap-2.5 flex-wrap justify-center px-2">
          {allImages.map((img, i) => (
            <motion.button key={i} onClick={() => setActiveIdx(i)} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}
              className={`w-20 lg:w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all ${i === activeIdx ? "border-blue-500 ring-2 ring-blue-500/20 scale-105 shadow-lg" : "border-gray-200 dark:border-gray-800 opacity-60 hover:opacity-100 shadow-sm"}`}>
              <img src={img} alt="" className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
