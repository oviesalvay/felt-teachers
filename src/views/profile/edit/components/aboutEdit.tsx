import email from '../../../../assets/email.png';
import phone from '../../../../assets/phone.png';
import location from '../../../../assets/location.png';

const AboutEdit = () => {
    return (
        <>
            <div className='about'>
                <div className='about-me'>
                    <div className='phone-number'>
                        <div>
                            <img src={phone} alt="" />
                        </div>
                        <div>
                            <p>Phone Number</p>
                        </div>
                        <textarea></textarea>
                    </div>
                </div>
                <div className='about-me'>
                    <div className='phone-number'>
                        <div>
                            <img src={email} alt="" />
                        </div>
                        <div>
                            <p>Email Address</p>
                        </div>
                    </div>
                    <textarea></textarea>
                </div>
                <div className='about-me'>
                    <div className='phone-number'>
                        <div>
                            <img src={location} alt="" />
                        </div>
                        <div>
                            <p>Location</p>
                        </div>
                    </div>
                    <textarea></textarea>
                </div>
            </div>
        </>
    )
}
export default AboutEdit;