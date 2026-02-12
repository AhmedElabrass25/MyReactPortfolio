import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ImProfile } from "react-icons/im";
import { FaSun, FaMoon, FaAngleUp } from "react-icons/fa"; // Using Fa icons for better styling

const Header = () => {
  const location = useLocation();
  // Ensure the hash starts with '#' for the root route
  const currentHash = location.hash || "#";
  const isActive = (hash) => currentHash === hash;

  // <<<<<<<<<<<<<<<<<< State Management >>>>>>>>>>>>>>>>>>>>>>
  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use 'system' as initial mode to check user's preference or default to 'dark'
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("currentMode")) {
      return localStorage.getItem("currentMode");
    }
    // Default to dark mode if no local storage value is found
    return "dark";
  });

  // <<<<<<<< changeMode Function >>>>>>>>>>>
  function changeMode() {
    const newMode = mode === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newMode);
    setMode(newMode);
  }

  // Apply or remove 'dark' class on the body element
  useEffect(() => {
    const body = document.body;
    if (mode === "dark") {
      body.classList.add("dark", "bg-gray-900");
      body.classList.remove("light", "bg-gray-50");
    } else {
      body.classList.add("light", "bg-gray-50");
      body.classList.remove("dark", "bg-gray-900");
    }
  }, [mode]);

  // <<<<<<<<<<<<< Scroll Visibility Logic >>>>>>>>>>>>>
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // <<<<<<<<<<< Scroll to top >>>>>>>
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Base classes for navigation links
  const linkBaseClasses =
    "block py-2 px-4 text-lg font-medium rounded-full transition-colors duration-200 cursor-pointer";
  const linkDefaultClasses =
    "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400";
  const linkActiveClasses =
    "text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600";

  const getLinkClasses = (hash) => {
    const active = isActive(hash);
    return `${linkBaseClasses} ${
      active ? linkActiveClasses : linkDefaultClasses
    }`;
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed z-50 h-12 w-12 bottom-6 right-6 p-2 flex items-center justify-center rounded-full shadow-lg bg-blue-600 text-white transition-all duration-300 hover:bg-blue-700 hover:scale-110 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <FaAngleUp className="text-xl" />
      </button>

      {/* The Navbar */}
      <nav className="the-navbar bg-[#f9fafb] dark:bg-[#111827] py-2 px-4 sticky top-0 z-50 shadow-md transition-colors duration-300">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-1">
          {/* <<<<<<< Logo >>>>>>> */}
          <HashLink to={"#"} className={`flex items-center justify-center`}>
            <ImProfile className="text-blue-600 dark:text-blue-400 text-4xl" />
            <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </span>
          </HashLink>

          <div className="flex items-center space-x-4">
            {/* Mode Toggle Button (Visible on all screens) */}
            <button
              onClick={changeMode}
              aria-label="Toggle dark/light mode"
              className="w-10 h-10 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shadow-md rounded-full flex items-center justify-center transition-all duration-500 hover:ring-2 hover:ring-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {mode === "dark" ? (
                <FaSun className="text-xl text-yellow-400" />
              ) : (
                <FaMoon className="text-xl text-gray-700" />
              )}
            </button>

            {/* Bar Button (Mobile design) */}
            <button
              onClick={() => setIsOpened(!isOpened)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded={isOpened}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* <<<<<<<<<<<< Desktop Links >>>>>>>>>>>>> */}
          <div
            className="hidden w-auto md:flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full shadow-lg"
            id="navbar-language"
          >
            <ul className="flex space-x-1">
              <li>
                <HashLink to="#" className={getLinkClasses("#")}>
                  About
                </HashLink>
              </li>
              <li>
                <HashLink to="/#skills" className={getLinkClasses("#skills")}>
                  Skills
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#features"
                  className={getLinkClasses("#features")}
                >
                  Features
                </HashLink>
              </li>
              <li>
                <HashLink to="/#main" className={getLinkClasses("#main")}>
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink to="/#contact" className={getLinkClasses("#contact")}>
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

          {/* <<<<<<<<<<< Mobile Links Dropdown >>>>>>>>>*/}
          {isOpened && (
            <div
              className="absolute top-16 right-4 w-60 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl md:hidden transition-opacity duration-300 transform origin-top-right"
              id="navbar-mobile"
            >
              <ul className="flex flex-col space-y-2">
                <li>
                  <HashLink
                    onClick={() => setIsOpened(false)}
                    to="#"
                    className={getLinkClasses("#")}
                  >
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    onClick={() => setIsOpened(false)}
                    to="/#skills"
                    className={getLinkClasses("#skills")}
                  >
                    Skills
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    onClick={() => setIsOpened(false)}
                    to="/#features"
                    className={getLinkClasses("#features")}
                  >
                    Features
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    onClick={() => setIsOpened(false)}
                    to="/#main"
                    className={getLinkClasses("#main")}
                  >
                    Projects
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    onClick={() => setIsOpened(false)}
                    to="/#contact"
                    className={getLinkClasses("#contact")}
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
