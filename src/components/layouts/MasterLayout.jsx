import { NavLink, Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { BookUser, UserRoundPen, GraduationCap, FileSearch } from "lucide-react";

function MasterLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-950 flex justify-around items-center px-6 py-3 sticky top-0 z-50 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <div className="w-[3rem]">
            <img src={logo} alt="logo" className="rounded-full" />
          </div>
          <div>
            <div className="text-2xl font-bold">Portfolio</div>
            <div className="text-amber-300">Srun Borath</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-2xl font-medium transition duration-300 ${
                isActive
                  ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300 after:rounded-full after:shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                  : "text-white hover:text-amber-200"
              }`
            }
          >
            <div><book-user /></div> My Profile
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative text-2xl font-medium transition duration-300 ${
                isActive
                  ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300 after:rounded-full after:shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                  : "text-white hover:text-amber-200"
              }`
            }
          >
            About Me
          </NavLink>

          <NavLink
            to="/education"
            className={({ isActive }) =>
              `relative text-2xl font-medium transition duration-300 ${
                isActive
                  ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300 after:rounded-full after:shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                  : "text-white hover:text-amber-200"
              }`
            }
          >
            Education
          </NavLink>

          <NavLink
            to="/cv"
            className={({ isActive }) =>
              `relative text-2xl font-medium transition duration-300 ${
                isActive
                  ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300 after:rounded-full after:shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                  : "text-white hover:text-amber-200"
              }`
            }
          >
            CV
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl hover:text-amber-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Menu */}
            <motion.div
              ref={menuRef}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative h-full w-64 bg-blue-950/95 flex flex-col gap-8 py-8 px-6 shadow-xl"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6 flex-col items-center gap-2">
                <h1>
                  <span className="text-3xl font-bold text-white mr-2">
                    Portfolio
                  </span>
                  <br />
                  <span className="text-1xl font-bold text-amber-300">
                    Srun Borath
                  </span>
                </h1>
                <div className="w-40">
                  <img
                    src={logo}
                    alt="logo"
                    className="rounded-full shadow-lg border-amber-300 border-5"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-6">
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative text-xl font-medium transition duration-300 ${
                      isActive
                        ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300"
                        : "text-white hover:text-amber-200"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <BookUser /> My Profile
                  </div>
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative text-xl font-medium transition duration-300 ${
                      isActive
                        ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300"
                        : "text-white hover:text-amber-200"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <UserRoundPen /> About Me
                  </div>
                </NavLink>

                <NavLink
                  to="/education"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative text-xl font-medium transition duration-300 ${
                      isActive
                        ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300"
                        : "text-white hover:text-amber-200"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap /> Education
                  </div>
                </NavLink>

                <NavLink
                  to="/cv"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative text-xl font-medium transition duration-300 ${
                      isActive
                        ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300"
                        : "text-white hover:text-amber-200"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <FileSearch /> CV
                  </div>
                </NavLink>
              </div>

              {/* Footer / Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto text-center text-white/70 text-sm"
              >
                © 2026 Srun Borath
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} SRUN Borath. All rights reserved.
      </footer>
    </div>
  );
}

export default MasterLayout;
