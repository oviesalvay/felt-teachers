import editPen from '../../../assets/editPen.png';
import Ellips from '../../../assets/Ellips.png';
import AboutEdit from './components/aboutEdit';
import '../edit/profileEdit.scss';
import EducationalBackground from './../../../components/education/educationalbackground';
import { jobAdverts, requirement } from '../../../components/data/qualification';
// import Group from '../../../assets/Group 377.png';
// import '../edit/components/moreoption';
import MoreOption from '../edit/components/moreoption';

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
                    <div>
                        <img src={editPen} alt="" />
                    </div>
                    <div className='edited'>
                        <h2>ALPHA READY SECONDARY SCHOOL</h2>
                    </div>
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <h5>Not Approved</h5>
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
                <AboutEdit />
                <EducationalBackground data={jobAdverts} />
                <EducationalBackground data={requirement} />
                {/* <div className='more-option'>
                    <div>
                    {/* <img src={Group} alt="" /> */}
                {/* </div>
                    <div>
                    <h5>More Options</h5>
                    </div>
                </div> */}
                <MoreOption />
            </section>
        </>
    )
}
export default SchoolEdit;