import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const ExperienceCard = ({ exp }) => (
  <div className="w-full md:w-[45%]">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 group">
      <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.role}</h3>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{exp.company}</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-gray-700/50 rounded-full text-sm font-semibold text-gray-600 dark:text-gray-300">
          <FaCalendarAlt className="text-blue-500" />
          {exp.duration}
        </div>
      </div>
      <div className="flex items-center gap-2 mb-6 text-gray-500 dark:text-gray-400 font-medium">
        <FaMapMarkerAlt /> {exp.location}
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium">{exp.desc}</p>
      <ul className="space-y-3">
        {exp.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed">
            <span className={`min-w-[8px] h-2 rounded-full mt-1.5 bg-${exp.color}-500 opacity-60`} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceCard;
