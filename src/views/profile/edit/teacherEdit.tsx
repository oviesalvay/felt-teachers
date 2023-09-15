import confidence from '../../../assets/confidence.svg';
// import yellow from '../../../assets/yellow.png';
import editPen from '../../../assets/editPen.png';
import EditAbout from './components/editAbout';
import EducationalBackgroundEdit from '../../../components/education/educationalbackgroundEdit';


const TeacherEdit = () => {
    return (
        <>
            <div className='school-edit'>
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
                        <img src={confidence} alt="" />
                    </figure>
                </div>
                <div className='profile'>
                    <div>
                        <img src={editPen} alt="" />
                    </div>
                    <div className='edited'>
                        <h2>ALPHA READY SECONDARY SCHOOL</h2>
                    </div>
                    <div className='green'>
                        <span></span>
                    </div>
                    <div className='green'>
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
                <EditAbout />
                <EducationalBackgroundEdit />
            </div>
        </>
    )
}
export default TeacherEdit;