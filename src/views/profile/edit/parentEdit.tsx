import editPen from '../../../assets/editPen.png';
import Ellips from '../../../assets/Ellips.png';
// import AboutEdit from '../edit/components/aboutEdit';
// import { formElements } from '../../../components/data/qualificationEdit';
import EducationalBackgroundEdit from '../../../components/education/educationalbackgroundEdit';
import EditAbout from './components/editAbout';

const ParentEdit = () => {
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
                            <h2>ADEBAYO JAMES</h2>
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
                <EditAbout />
                <EducationalBackgroundEdit />
            </section>
        </>
    )
}
export default ParentEdit;