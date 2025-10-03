import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.jpg"
function MasterLayout(){
    return(
        <div>
            <header className="bg-blue-950 flex justify-evenly items-center py-3 sticky top-0 z-50">
                <div className="text-white flex gap-2 ">
                    <div className="w-[3rem]">
                        <img src={logo} alt="logo" className="rounded-full"/>
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
                <div className="flex gap-5 ">
                    <NavLink to={'/'} className="text-white text-2xl">
                        My Profile
                    </NavLink>
                     <NavLink to={'/about'} className="text-white text-2xl">
                        About Me
                    </NavLink>
                     <NavLink to={'/experience'} className="text-white text-2xl">
                        Experience
                    </NavLink>
                     <NavLink to={'/cv'}className="text-white text-2xl">
                        CV
                    </NavLink>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    )
}
export default MasterLayout;
