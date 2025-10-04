import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.jpg";

function MasterLayout() {
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="text-[14px]">SRUN Borath</div>
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
            My Profile
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
            to="/experience"
            className={({ isActive }) =>
              `relative text-2xl font-medium transition duration-300 ${
                isActive
                  ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300 after:rounded-full after:shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                  : "text-white hover:text-amber-200"
              }`
            }
          >
            Experience
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
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 flex flex-col items-center gap-6 py-6">
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
            My Profile
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
            About Me
          </NavLink>

          <NavLink
            to="/experience"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `relative text-xl font-medium transition duration-300 ${
                isActive
                  ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300"
                  : "text-white hover:text-amber-200"
              }`
            }
          >
            Experience
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
            CV
          </NavLink>
        </div>
      )}

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
