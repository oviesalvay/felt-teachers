import editPen from '../../../assets/editPen.png';
import Ellips from '../../../assets/Ellips.png';
import '../edit/profileEdit.scss';
import EducationalBackground from '../../../components/education/educationalbackground';
import { jobAdverts, requirement } from '../../../components/data/qualification';
import MoreOption from './components/moreoption';
import EditAbout from '../edit/components/editAbout';

const SchoolEdit = () => {
    return (
        <>
            <section className='school-edit'>
                <div className="teachers">
                    <div className='edit'>
                        <div>
                            <img src={editPen} alt="" />
                        </div>
                        <div>
                            <button className='save-btn'>SAVE</button>
                        </div>
                    </div>
                    <figure>
                        <img src={Ellips} alt="" />
                    </figure>
                </div>
                <div className='profile'>
                    <div className='profile-content'>
                        <div>
                            <img src={editPen} alt="" />
                        </div>
                        <div className='edited'>
                            <h2>ALPHA READY SECONDARY SCHOOL</h2>
                        </div>
                    </div>
                    <div className='profile-content'>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <h5>Not Approved</h5>
                        </div>
                    </div>
                </div>
                <div className='edit__school'>
                    <div>
                        <img src={editPen} alt="" />
                    </div>
                    <div>
                        <p>Alpha ready secondary school is a school dedicated to providing quality
                            education with the aid of amazing teachers and staff</p></div>
                </div>
                <EditAbout />
                <EducationalBackground title="OPEN  JOB ADVERTS (1)" data={jobAdverts} gtc="200px 200px max-content" />
                <EducationalBackground title="REQUIREMENTS" data={requirement} gtc="1fr" />
                <MoreOption />
            </section>
        </>
    )
}
export default SchoolEdit;