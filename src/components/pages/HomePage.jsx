import HeroCover from "../layouts/HeroCover";
import SkillsSection from "../layouts/SkillsSection";
import AboutMe from "./AboutMe";
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
        </div>  
    )
}
export default HomePage;