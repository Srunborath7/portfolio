import HeroCover from "../layouts/HeroCover";
import SkillsSection from "../layouts/SkillsSection";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
function HomePage(){
    return(
        <div>
            <div>
                <HeroCover/>
            </div>
            <div>
                <AboutMe/>
            </div>
            <div>
                <SkillsSection/>
            </div>
            <div>
                <Contact/>
            </div>
        </div>  
    )
}
export default HomePage;