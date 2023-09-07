import editPen from '../../../assets/editPen.png';
import Ellips from '../../../assets/Ellips.png';
import AboutEdit from './components/aboutEdit';

const SchoolEdit = () => {
    return (
        <>
            <section className='school-edit'>
                <div className="teachers">
                    <div className='edit'>
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
                </div>
                <p>Alpha ready secondary school is a school dedicated to providing quality
                    education with the aid of amazing teachers and staff</p>
                <AboutEdit />
            </section>
        </>
    )
}
export default SchoolEdit;