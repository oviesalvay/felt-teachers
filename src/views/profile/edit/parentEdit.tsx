import editPen from '../../../assets/editPen.png';
import Ellips from '../../../assets/Ellips.png';
import { Adverts } from '../../../components/data/qualification';
import AboutEdit from './components/aboutEdit';
import EducationalBackground from '../../../components/education/educationalbackground';

const ParentEdit = () => {
    return (
        <>
            <section className='school-edit'>
                <div className="teachers">
                    <div className='edit'>
                        {/* <div>
                            <img src={editPen} alt="" />
                        </div> */}
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
                        <h2>ADEBAYO JAMES</h2>
                    </div>
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <h5>Not Approved</h5>
                    </div>
                </div>
                <AboutEdit />
                <EducationalBackground data={Adverts} />
            </section >
        </>
    )
}
export default ParentEdit;