import { Buttoned } from "../../components/button/button";
import james from '../../assets/james.svg';
import yellow from '../../assets/yellow.png';
import About from "../../components/about/about";
import Experience from "../../components/experiences/experience";
import EducationalBackground from "../../components/education/educationalbackground";
import { jobAdverts, requirement } from "../../components/data/qualification";

const ParentProfile = () => {
    return (
        <>
            <div className='teachers-profile'>
                <div className="teachers">
                    <figure>
                        <img src={james} alt="" />
                    </figure>
                </div>
                <div className='profile'>
                    <div className='name'>
                        <h2>ADEBAYO JAMES</h2>
                        <div className='approved'>
                            <div>
                                <span></span>
                            </div>
                            <div>
                                <h5>Not Approved</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Buttoned type="none" content="connect" />
                        <img src={yellow} alt="" />
                    </div>
                </div>
                <p>I always want to get the best teachers for my children</p>
                <About />
                <Experience />
                <EducationalBackground data={jobAdverts} />
                <EducationalBackground data={requirement} />
            </div>
        </>
    )
}
export default ParentProfile;