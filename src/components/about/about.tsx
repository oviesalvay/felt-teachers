import phone from '../../assets/phone.png'
import email from '../../assets/email.png';
import location from '../../assets/location.png';
import connect from '../../assets/connect.png';
import '../about/about.scss';

const About = () => {
    return (
        <div className='about'>
            <div className='about-me'>
                <div className='phone-number'>
                    <div>
                        <img src={phone} alt="" />
                    </div>
                    <div>
                        <p>Phone Number</p>
                    </div>
                </div>
                <p id="number">08090000100</p>
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
                <p id="number">centurionconfidence@gmail.com</p>
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
                <p id="number">Lagos, Nigeria</p>
            </div>
            <div className='about-me'>
                <div className='phone-number'>
                    <div>
                        <img src={connect} alt="" />
                    </div>
                    <div>
                        <p>Connects</p>
                    </div>
                </div>
                <p id="number">2</p>
            </div>
        </div>
    )
}
export default About;