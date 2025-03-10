import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ImProfile } from "react-icons/im";
const Header = () => {
  const location = useLocation();
  const currentHash = location.hash;
  const isActive = (hash) => currentHash === hash;
  // <<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>
  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") || "dark"
  );
  // <<<<<<<<changeMode Function>>>>>>>>>>>
  function changeMode() {
    localStorage.setItem("currentMode", mode === "dark" ? "light" : "dark");
    setMode(localStorage.getItem("currentMode"));
  }
  useEffect(() => {
    if (mode == "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [mode]);
  // <<<<<<<<<<<<< Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // <<<<<<<<<<<Scroll to top>>>>>>>
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
  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed z-50 h-12 w-12 bottom-6 right-6 p-2 flex items-center justify-center rounded-full shadow-md bg-[var(--blue)] text-white transition-all duration-300 hover:bg-blue-500 hover:scale-110 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <i className="fa-solid fa-angle-up text-lg"></i>
      </button>
      {/* The Navbar */}
      <nav className="the-navbar pt-5 mb-10 sticky top-0 z-10 pb-3 bg-[var(--secondary)]">
        <div className="container flex flex-wrap items-center justify-between">
          {/* <<<<<<< Logo >>>>>>> */}
          <HashLink to={"#"} className={`flex items-center justify-center`}>
            <ImProfile className="text-[var(--title)] text-5xl" />
          </HashLink>
          <div className="flex items-center">
            {/* bar Button declare in mobile design */}
            <button
              onClick={() => setIsOpened(!isOpened)}
              data-collapse-toggle="navbar-language"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded="false"
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
          {/* <<<<<<<<<<<< Links >>>>>>>>>>>>> */}
          <div
            className=" bg-[var(--bgHeader)] rounded-[30px] p-2 items-center justify-between hidden w-fit md:flex shadow-xl shadow-gray-800/50"
            id="navbar-language"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <HashLink
                to="#"
                className={`block py-2 px-3 text-[var(--title)] font-semibold text-[18px] ${
                  isActive("#") ? "active" : ""
                }`}
                aria-current="page"
              >
                About
              </HashLink>{" "}
              <HashLink
                to="/#skills"
                className={`block py-2 px-3 text-[var(--title)] font-semibold text-[18px] ${
                  isActive("#skills") ? "active" : ""
                }`}
                aria-current="page"
              >
                Skills
              </HashLink>
              <HashLink
                to="/#main"
                className={`block py-2 px-3 text-[var(--title)] font-semibold text-[18px] ${
                  isActive("#main") ? "active" : ""
                }`}
                aria-current="page"
              >
                Projects
              </HashLink>{" "}
              <HashLink
                to="/#contact"
                className={`block py-2 px-3 text-[var(--title)] font-semibold text-[18px] ${
                  isActive("#contact") ? "active" : ""
                }`}
                aria-current="page"
              >
                Contact
              </HashLink>{" "}
            </ul>
          </div>
          {/* <<<<<<<<<<< Mobile Links>>>>>>>>> */}
          {isOpened && (
            <div
              className="items-center justify-center flex-col flex w-full md:hidden md:w-auto md:order-1"
              id="navbar-language"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <HashLink
                  to="#"
                  className={`block py-2 px-3 text-[var(--title)] font-semibold text-[18px] ${
                    isActive("#") ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  About
                </HashLink>{" "}
                <HashLink
                  to="/#skills"
                  className={`block py-2 px-3 text-[var(--title)] font-semibold text-[18px] ${
                    isActive("#skills") ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Skills
                </HashLink>
                <HashLink
                  to="/#main"
                  className={`block py-2 px-3 text-[var(--title)] font-semibold text-[18px] ${
                    isActive("#main") ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Projects
                </HashLink>{" "}
                <HashLink
                  to="/#contact"
                  className={`block py-2 px-3 text-[var(--title)] font-semibold text-[18px] ${
                    isActive("#contact") ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Contact
                </HashLink>{" "}
              </ul>
            </div>
          )}
          {/* <<<<<<<<<<<<< Mode Button >>>>>>>>*/}
          <button
            onClick={changeMode}
            className="text-blue-900 bg-[var(--bgHeader)] w-12 h-12 border border-[#d3d3d364] hover:border-[#dddcdcb3] shadow-lg rounded-full flex items-center justify-center active:scale-75 transition-all duration-500"
          >
            {mode === "dark" ? (
              <i className="fa-solid fa-moon text-[25px] text-[var(--title)]"></i>
            ) : (
              <i className="fa-solid fa-sun text-[25px] text-orange-400"></i>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
