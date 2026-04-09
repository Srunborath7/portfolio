import { NavLink, Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookUser,
  UserRoundPen,
  GraduationCap,
  FileSearch,
  Briefcase,
} from "lucide-react";

function MasterLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // LOCK BODY SCROLL (FIX TELEGRAM BUG)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-950">

      {/* HEADER */}
      <header className="bg-blue-950 flex justify-around items-center px-6 py-3 sticky top-0 z-[60] shadow-lg">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-white">
          <div className="w-[3rem]">
            <img src={logo} alt="logo" className="rounded-full" />
          </div>
          <div>
            <div className="text-2xl font-bold">Portfolio</div>
            <div className="text-amber-300">Srun Borath</div>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-xl font-medium transition ${
                isActive
                  ? "text-amber-300 font-bold"
                  : "text-white hover:text-amber-200"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <BookUser size={20} /> My Profile
            </div>
          </NavLink>

          <NavLink
            to="/work-experience"
            className={({ isActive }) =>
              `relative text-xl font-medium transition ${
                isActive
                  ? "text-amber-300 font-bold"
                  : "text-white hover:text-amber-200"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <Briefcase size={20} /> Work Experience
            </div>
          </NavLink>

          <NavLink
            to="/education"
            className={({ isActive }) =>
              `relative text-xl font-medium transition ${
                isActive
                  ? "text-amber-300 font-bold"
                  : "text-white hover:text-amber-200"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <GraduationCap size={20} /> Education
            </div>
          </NavLink>

          <NavLink
            to="/cv"
            className={({ isActive }) =>
              `relative text-xl font-medium transition ${
                isActive
                  ? "text-amber-300 font-bold"
                  : "text-white hover:text-amber-200"
              }`
            }
          >
            <div className="flex items-center gap-2">
              <FileSearch size={20} /> CV
            </div>
          </NavLink>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* SIDEBAR */}
            <motion.div
              ref={menuRef}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-72 bg-blue-950 p-6 flex flex-col gap-6"
            >
              {/* LOGO */}
              <div className="text-center">
                <img
                  src={logo}
                  alt="logo"
                  className="w-24 mx-auto rounded-full mb-3"
                />
                <h2 className="text-white font-bold text-xl">
                  Portfolio
                </h2>
                <p className="text-amber-300">Srun Borath</p>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-5 mt-4">

                <NavLink to="/" onClick={() => setIsOpen(false)}
                  className="text-white flex items-center gap-3 text-lg"
                >
                  <BookUser /> My Profile
                </NavLink>

                <NavLink to="/work-experience" onClick={() => setIsOpen(false)}
                  className="text-white flex items-center gap-3 text-lg"
                >
                  <Briefcase /> Work Experience
                </NavLink>

                <NavLink to="/education" onClick={() => setIsOpen(false)}
                  className="text-white flex items-center gap-3 text-lg"
                >
                  <GraduationCap /> Education
                </NavLink>

                <NavLink to="/cv" onClick={() => setIsOpen(false)}
                  className="text-white flex items-center gap-3 text-lg"
                >
                  <FileSearch /> CV
                </NavLink>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} SRUN Borath. All rights reserved.
      </footer>
    </div>
  );
}

export default MasterLayout;