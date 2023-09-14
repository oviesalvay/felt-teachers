import { ConnectButton } from "../../components/button/button";
import Ellips from '../../assets/Ellips.png';
import editPen from '../../assets/editPen.png';
import yellow from '../../assets/yellow.png';
import About from '../../components/about/about'
// import Experience from "../../components/experiences/experience";
import EducationalBackground from "../../components/education/educationalbackground";
import { jobAdverts, requirement } from "../../components/data/qualification";
import { useNavigate } from "react-router-dom";

const ParentProfile = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='teachers-profile'>
                <div className="teachers">
                    <div className='edit' onClick={() => navigate("/parentEdit")}>
                        <img src={editPen} alt="" />
                        <button className='edit-btn'>EDIT</button>
                    </div>
                    <figure>
                        <img src={Ellips} alt="" />
                    </figure>
                </div>
                <div className='profile'>
                    <div className='name'>
                        <h2>ADEBAYO JAMES</h2>
                        <div className='pending'>
                            <div>
                                <span></span>
                            </div>
                            <div>
                                <h5>Not Approved</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ConnectButton type="none" content="connect" />
                        <img src={yellow} alt="" className="yellow" />
                    </div>
                </div>
                <p id="school">I always want to get the best teachers for my children</p>
                <About />
                {/* <Experience /> */}
                <EducationalBackground title="OPEN  JOB ADVERTS (1)" data={jobAdverts} />
                <EducationalBackground title="REQUIREMENTS" data={requirement} />
            </div>
        </>
    )
}
export default ParentProfile;