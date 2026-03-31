import { FaClock } from "react-icons/fa";
import { useState, useEffect } from "react";

const FooterClock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-US", { timeZone: "Africa/Cairo", hour: "2-digit", minute: "2-digit", hour12: true }).format(new Date()));
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="space-y-6 px-6 lg:px-0 lg:pl-10 lg:border-l border-white/10">
      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Local Presence</h4>
      <div className="flex items-center gap-4 group">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
          <FaClock className="text-xl" />
        </div>
        <div>
          <p className="text-2xl font-bold font-mono">{time}</p>
          <p className="text-xs text-gray-500 font-bold uppercase">Cairo, Egypt</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 leading-tight italic">Currently available for meetings and collaboration within UTC+2.</p>
    </div>
  );
};

export default FooterClock;
