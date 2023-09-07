import '../welcomePage/welcome.scss';
import yellow from '../../../assets/yellow.png';
import Group from '../../../assets/Group.svg';
import circle from '../../../assets/circle.png';
import Vector from '../../../assets/Vector.png'
import Footer from '../../../components/footer/footer';
import Grouped from '../../../assets/Grouped.svg';
import question from '../../../assets/question.png';
import Contact from '../../../components/contact';
import Vectors from '../../../assets/Vectors.png';
import phoned from '../../../assets/phoned.png';
import { ConnectButton } from '../../../components/button/button';
import Register from '../../../components/register';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <>
            <section className="welcome__intro">
                <div className='access-best'>
                    <div className='access'>
                        <h1>Get access to the best teachers in town </h1>
                        <p>Making refined and Qualified Teachers to all Schools in Nigeria is our priority.
                            Our platform provides a link betwwen teachers and school by providing a medium to vet Teachers,
                            and act as a means of communication between both parties.
                        </p>
                        <button className='signup'>SEE HOW IT WORKS</button>
                    </div>
                    <div>
                    </div>
                </div>
                <Register />
                <div className='who-we-are'>
                    <img src={circle} alt="" className='circle' />
                    <img src={yellow} alt="" id="yellow" />
                    <img src={circle} alt="" id='circled' />
                    <div>
                        <img src={Group} alt="" />
                        <img src={Vector} alt="" className='vector' />
                    </div>
                    <div>
                        <h1>Who we are </h1>
                        <p>We are dedicated to providing quality education to students in line with the SDG goal -
                            We accept applications from, and examine teachers to ensure that quality
                            would be provided while teaching.</p>
                        <Link to="/signup">
                            <button className='signup'>SIGN UP</button></Link>
                    </div>
                </div>
                <div className='the-app'>
                    <div>
                        <h1>Get The App</h1>
                        <p>Our mobile Application makes accessing our services even easier.
                            Get access to the best quality of teachers via a tap from your mobile phone</p>
                        <ConnectButton type="none" content="COMING SOON" />
                    </div>
                    <figure>
                        <img src={yellow} alt="" className='yelow' />
                        <img src={Vectors} alt="" className='Vectors' />
                        <img src={circle} alt="" className='circled' />
                        <img src={phoned} alt="" />
                        <img src={circle} alt="" className='circles' />
                    </figure>
                </div>
                <section className='who-we-are'>
                    <img src={circle} alt="" className='circle' />
                    <img src={yellow} alt="" id="yellow" />
                    <img src={circle} alt="" id='circled' />
                    <figure>
                        <img src={Grouped} alt="" />
                        <img src={Vector} alt="" className='vector' />
                        <img src={question} alt="" className='question' />
                        <img src={circle} alt="" className='circleds' />
                        <img src={yellow} alt="" className='yellows' />
                    </figure>
                    <div>
                        <h1>Have Questions?</h1>
                        <p>We have compiled a list of the questions that have been answered </p>
                        <Link to="/signup">
                            <button className='signup'>SIGN UP</button></Link>
                    </div>
                </section>
                <Contact />
                <Footer />
            </section>
        </>
    )
}
export default Welcome;