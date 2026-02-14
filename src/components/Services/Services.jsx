import {
  FaCode,
  FaGlobe,
  FaBolt,
  FaCogs,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";
import ScrollReveal from "../Shared/ScrollReveal";

const Services = () => {
  const servicesData = [
    {
      icon: FaCode, // Replaced apiImage
      title: "API Integrations",
      description:
        "Seamlessly connect third-party services for smooth data sharing and enhanced application functionality.",
      color: "text-red-500",
    },
    {
      icon: FaGlobe, // Replaced appImage
      title: "Web Applications",
      description:
        "Build robust, scalable, and tailored web applications using the latest frontend technologies (React/Next.js).",
      color: "text-blue-500",
    },
    {
      icon: FaCogs, // Replaced manageImage
      title: "Website Management",
      description:
        "Implement easy content management systems (CMS) and provide flexible controls for effortless updates and maintenance.",
      color: "text-yellow-500",
    },
    {
      icon: FaBolt, // Replaced speedImage
      title: "Speed Optimization",
      description:
        "Dramatically boost performance with technical optimizations, resulting in faster load times and higher search rankings.",
      color: "text-green-500",
    },
    {
      icon: FaMobileAlt, // Replaced responsiveImage
      title: "Responsive Designs",
      description:
        "Craft adaptive, mobile-first designs that look and function perfectly on all devices, ensuring a consistent user experience.",
      color: "text-indigo-500",
    },
    {
      icon: FaPaintBrush, // Replaced interfaceImage
      title: "User Interfaces (UI)",
      description:
        "Design engaging, intuitive, and modern front-end interfaces that prioritize user interaction and visual appeal.",
      color: "text-pink-500",
    },
  ];

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        {/* Title */}
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold capitalize w-full text-center mb-16 text-gray-900 dark:text-white">
            How Can I Help You?
          </h1>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((serv, index) => {
            const IconComponent = serv.icon; // Component from react-icons
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-400 transform hover:-translate-y-1 flex flex-col items-center text-center h-full"
                >
                  {/* Icon */}
                  <IconComponent
                    className={`mb-5 w-16 h-16 ${serv.color} dark:text-white dark:bg-opacity-10 dark:bg-blue-400 p-2 rounded-lg`}
                  />

                  {/* Title */}
                  <h2 className="mb-3 capitalize text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                    {serv.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 w-full text-center text-base flex-grow">
                    {serv.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
