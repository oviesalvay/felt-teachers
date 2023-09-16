import Ellipse from '../../assets/Ellipse.svg';
import '../../styles/teacher.scss';
import { ConnectButton } from "../../components/button/button";
import yellow from '../../assets/yellow.png';
import About from '../../components/about/about';
import editPen from '../../assets/editPen.png';
import EducationalBackground from '../../components/education/educationalbackground';
import { educationalBackground, workExperience, } from '../../components/data/qualification';
import { useNavigate } from "react-router-dom";
import Cv from '../../components/cv';

const TeacherProfile = () => {
    const navigate = useNavigate()
    return (
        <div className='teachers-profile'>
            <div className="teachers">
                <div className='edit' onClick={() => navigate("/parentEdit")}>
                    <img src={editPen} alt="" />
                    <button className='edit-btn'>EDIT</button>
                </div>
                <figure>
                    <img src={Ellipse} alt="" />
                </figure>
            </div>
            <div className='profile'>
                <h2>CENTURION CONFIDENCE ETAH</h2>
                <div className='name'>
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
                    <img src={yellow} alt="" className='yellow' />
                </div>
            </div>
            <p id='school'>I am a secondary school teacher with 5 years of
                experience in working with teenagers between the ages 10-18</p>
            <About />
            <EducationalBackground title="OPEN  JOB ADVERTS (1)" data={educationalBackground} />
            <EducationalBackground title="REQUIREMENTS" data={workExperience} />
            <Cv />
        </div>
        // </div>
    )
}
export default TeacherProfile;