// import screenshot from '../../../assets/Screenshot.svg';
import '../welcomePage/welcome.scss';
import yellow from '../../../assets/yellow.png';
import Group from '../../../assets/Group.svg';
import Footer from '../../../components/footer/footer';


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
                    <div>
                        <img src={Group} alt="" />
                    </div>
                    <div>
                        <h1>Who we are </h1>
                        <p>We are dedicated to providing quality education to students in line with the SDG goal -
                            We accept applications from, and examine teachers to ensure that quality
                            would be provided while teaching.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Welcome;