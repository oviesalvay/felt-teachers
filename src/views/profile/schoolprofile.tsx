import { ConnectButton } from "../../components/button/button";
import james from '../../assets/james.svg';
import yellow from '../../assets/yellow.png';
import About from "../../components/about/about";
import Experience from "../../components/experiences/experience";
import EducationalBackground from "../../components/education/educationalbackground";
import { jobAdverts, requirement } from "../../components/data/qualification";

const SchoolProfile = () => {
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
                        <h2>ALPHA READY SECONDARY SCHOOL</h2>
                        <div className='approved'>
                            <div>
                                <span></span>
                            </div>
                            <div>
                                <h5>Pending</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ConnectButton type="none" content="connect" />
                        <img src={yellow} alt="" />
                    </div>
                </div>
                <p>Alpha ready secondary school is a school dedicated to providing quality education with the aid of amazing teachers and staff</p>
                <About />
                <Experience />
                <EducationalBackground data={jobAdverts} />
                <EducationalBackground data={requirement} />
            </div>
        </>
    )
}
export default SchoolProfile;