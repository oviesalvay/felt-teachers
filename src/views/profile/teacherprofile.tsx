import Ellipse from '../../assets/Ellipse.svg';
import '../../styles/teacher.scss';
import { ConnectButton } from "../../components/button/button";
import yellow from '../../assets/yellow.png';
import About from '../../components/about/about';
import Experience from '../../components/experiences/experience';
import EducationalBackground from '../../components/education/educationalbackground';
import { educationalBackground, workExperience, CV } from '../../components/data/qualification';

const TeacherProfile = () => {
    return (
        <div className='teachers-profile'>
            <div className="teachers">
                <figure>
                    <img src={Ellipse} alt="" />
                </figure>
            </div>
            <div className='profile'>
                <div className='name'>
                    <h2>CENTURION CONFIDENCE ETAH</h2>
                    <div className='approved'>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <h5>Approved</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <ConnectButton type='none' content="connect" />
                    <img src={yellow} alt="" />
                </div>
            </div>
            <p>I am a secondary school teacher with 5 years of
                experience in working with teenagers between the ages 10-18</p>
            <About />
            <Experience />
            <EducationalBackground data={educationalBackground} />
            <span className='work'></span>
            <EducationalBackground data={workExperience} />
            <span className='work'></span>
            <EducationalBackground data={CV} />

        </div>
    )
}
export default TeacherProfile;