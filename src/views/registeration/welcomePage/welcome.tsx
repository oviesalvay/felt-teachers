// import screenshot from '../../../assets/Screenshot.svg';
import '../welcomePage/welcome.scss';
import yellow from '../../../assets/yellow.png';
import Group from '../../../assets/Group.svg';
import circle from '../../../assets/circle.png';
import Vector from '../../../assets/Vector.png'
import Vectors from '../../../assets/Vectors.png';
import Footer from '../../../components/footer/footer';
import phoned from '../../../assets/phoned.png';


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
                <div className='register'>
                    <img src={yellow} alt="" className='yellow' />
                    <img src={yellow} alt="" className='yellowed' />
                    <div className='registered'>
                        <div className='number'>
                            <div>0</div>
                            <div>9</div>
                            <div>0</div>
                        </div>
                        <div className='number'>
                            <div>1</div>
                            <div>9</div>
                            <div>0</div>
                        </div>
                    </div>
                    <div className='school'>
                        <div><p>Registered Schools</p></div>
                        <div><p>Qualified Teachers</p></div>
                    </div>
                </div>
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
                        <button className='signup'>SIGN UP</button>
                    </div>
                </div>
                <div className='the-app'>
                    <div>
                        <h1>Get The App</h1>
                        <p>Our mobile Application makes accessing our services even easier.
                            Get access to the best quality of teachers via a tap from your mobile phone</p>
                    </div>
                    <figure>
                        <img src={yellow} alt="" className='yelow' />
                        <img src={Vectors} alt="" className='Vectors' />
                        <img src={circle} alt="" className='circled' />
                        <img src={phoned} alt="" />
                        <img src={circle} alt="" className='circles' />
                    </figure>
                </div>
                <Footer />
            </section>
        </>
    )
}
export default Welcome;