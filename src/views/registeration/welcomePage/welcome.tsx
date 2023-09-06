import { useFormik } from 'formik';
import { signupSchema } from "../../../schema";
import '../welcomePage/welcome.scss';
import yellow from '../../../assets/yellow.png';
import Group from '../../../assets/Group.svg';
import circle from '../../../assets/circle.png';
import Vector from '../../../assets/Vector.png'
import Vectors from '../../../assets/Vectors.png';
import Footer from '../../../components/footer/footer';
import phoned from '../../../assets/phoned.png';
import { ConnectButton } from '../../../components/button/button';
import Grouped from '../../../assets/Grouped.svg';
import question from '../../../assets/question.png';

const Welcome = () => {
    const onSubmit = (values: any) => {
        console.log("Submitted", values);
    }
    const { values, errors, touched, handleBlur, handleChange, } = useFormik({
        initialValues: {
            email: "",
            message: "",
        },
        validationSchema: signupSchema,
        onSubmit
    });
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
                        <button className='signup'>SIGN UP</button>
                    </div>
                </section>
                <div className='contact'>
                    <img src={yellow} alt="" id="yellow-circle" />
                    <img src={yellow} alt="" className='yellow-circle' />
                    <h1>Contact Us</h1>
                    <form action="#">
                        <label htmlFor='email' id="email"></label><br></br>
                        <input className={errors.email && touched.email ? "input-error" : ""} type="text" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Email Address' />
                        {errors.email && touched.email && <p className='error'>{errors.email}</p>}<br></br>
                        <label htmlFor='message' id="message"></label><br></br>
                        <input className={errors.message && touched.message ? "input-error" : ""} type="text" id="message" onChange={handleChange} onBlur={handleBlur} value={values.message} placeholder='Message' />
                        {errors.message && touched.message && <p className='error'>{errors.message}</p>}<br></br>
                    </form>
                    <button className='signup'>SEND</button>
                </div>
                <Footer />
            </section>
        </>
    )
}
export default Welcome;