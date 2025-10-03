import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.jpg";

function MasterLayout() {
    return (
        <div>
            <header className="bg-blue-950 flex justify-evenly items-center py-3 sticky top-0 z-50">
                <div className="text-white flex gap-2 ">
                    <div className="w-[3rem]">
                        <img src={logo} alt="logo" className="rounded-full" />
                    </div>
                    <div>
                        <div className="text-2xl">
                            Portfolio
                        </div>
                        <div className="text-[14px]">
                            SRUN Borath
                        </div>
                    </div>

                </div>
                <div className="flex gap-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `relative text-2xl font-medium transition duration-300 ${isActive
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
                            `relative text-2xl font-medium transition duration-300 ${isActive
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
                            `relative text-2xl font-medium transition duration-300 ${isActive
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
                            `relative text-2xl font-medium transition duration-300 ${isActive
                                ? "text-amber-300 font-bold after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-rose-400 after:to-amber-300 after:rounded-full after:shadow-[0_0_12px_rgba(251,191,36,0.9)]"
                                : "text-white hover:text-amber-200"
                            }`
                        }
                    >
                        CV
                    </NavLink>
                </div>

            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    )
}
export default MasterLayout;
