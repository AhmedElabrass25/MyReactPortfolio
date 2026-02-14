import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { ImProfile } from "react-icons/im";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaClock, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState("");

  // Localized time for Cairo
  useEffect(() => {
    const updateCairoTime = () => {
      const options = {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateCairoTime();
    const timer = setInterval(updateCairoTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/AhmedElabrass25", label: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/ahmed-elabrass012", label: "LinkedIn" },
    { icon: FaWhatsapp, link: "https://wa.me/201208448553", label: "WhatsApp" },
    { icon: FaEnvelope, link: "mailto:ahmedelabrass2025@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gray-950 text-white pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-600/10 blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        {/* Top CTA Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-white/10 pb-20 mb-20 gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black mb-6 leading-tight"
            >
              Let's craft something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">extraordinary</span> together.
            </motion.h2>
            <p className="text-gray-400 text-lg">Have a project or just want to chat? Reach out anytime.</p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:ahmedelabrass2025@gmail.com"
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-blue-600/20 group transition-all"
          >
            Say Hello
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <HashLink to={"#"} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <ImProfile className="text-2xl" />
              </div>
              <span className="text-xl font-black tracking-tight uppercase">
                Ahmed <span className="text-blue-500">Hub</span>
              </span>
            </HashLink>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Building modern, scalable, and high-performance digital products that solve real-world problems.
            </p>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-gray-300">Available for Work</span>
            </div>
          </div>

          {/* Explore Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Explore</h4>
            <ul className="space-y-4">
              {["Skills", "Experience", "Features", "Main"].map((item) => (
                <li key={item}>
                  <HashLink 
                    to={`/#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-blue-500 group-hover:w-4 transition-all" />
                    {item === "Main" ? "Projects" : item === "Features" ? "Services" : item}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Connect</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  title={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Location Column */}
          <div className="space-y-6 px-6 lg:px-0 lg:pl-10 lg:border-l border-white/10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Local Presence</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-mono">{time}</p>
                  <p className="text-xs text-gray-500 font-bold uppercase">Cairo, Egypt</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-tight italic">
                Currently available for meetings and collaboration within UTC+2.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-6">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Ahmed Mohamed. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-tighter text-gray-600">
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="text-gray-800">|</span>
            <span className="text-gray-400">Built with React & Passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
