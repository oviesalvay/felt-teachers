import { FC, useState } from "react";
import { useFormik } from 'formik';
import { signupSchema } from "../../schema";
import '../registeration/login.scss';
import circle from '../../assets/circle.png';
import yellow from '../../assets/yellow.png';
import { Link } from "react-router-dom";


export const Login: FC = () => {

    const [tab, setTab] = useState<number>(1);
    const onSubmit = (values: any) => {
        console.log("Submitted", values);
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
            phoneNumber: "",
        },
        validationSchema: signupSchema,
        onSubmit
    });
    return (
        <section className="login">
            <img src={circle} alt="" className="circle" />
            <img src={yellow} alt="" className="yellow" />
            <img src={yellow} alt="" className="yellowed" />
            <div className="log">
                <h2>Login</h2>
                <div id="new">
                    <hgroup>
                        <button onClick={() => setTab(1)} className={tab === 1 ? 'current' : ''}>Teachers</button>
                        <button onClick={() => setTab(2)} className={tab === 2 ? 'current' : ''}>Schools</button>
                        <button onClick={() => setTab(3)} className={tab === 3 ? 'current' : ''}>Parents</button>
                    </hgroup>
                </div>
                {tab === 1 &&
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='email' id="email"></label><br></br>
                        <input className={errors.email && touched.email ? "input-error" : ""} type="name" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Email" />
                        {errors.email && touched.email && <p className='error'>{errors.email}</p>}<br></br>
                        <label htmlFor='password' id="password"></label><br></br>
                        <input className={errors.password && touched.password ? "input-error" : ""} type="name" id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="Password" />
                        {errors.password && touched.password && <p className='error'>{errors.password}</p>}<br></br>
                        <div className="forget">
                            <div>
                                <h4>Forgot Password?</h4>
                            </div>
                            <div>
                                <button className="loging">Login</button>
                            </div>
                        </div>
                        <h5>Don’t have an account? <Link to="/signup"><a>Sign up</a></Link></h5>
                    </form>
                }
                {tab === 2 &&
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='phoneNumber' id="phoneNumber"></label><br></br>
                        <input className={errors.phoneNumber && touched.phoneNumber ? "input-error" : ""} type="name" id="phoneNumber" onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} placeholder="Phone Number" />
                        {errors.phoneNumber && touched.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}<br></br>
                        <label htmlFor='password' id="password"></label><br></br>
                        <input className={errors.password && touched.password ? "input-error" : ""} type="name" id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="Password" />
                        {errors.password && touched.password && <p className='error'>{errors.password}</p>}<br></br>
                        <div className="forget">
                            <div>
                                <h4>Forgot Password?</h4>
                            </div>
                            <div>
                                <button className="loging">Login</button>
                            </div>
                        </div>
                        <h5>Don’t have an account? <Link to="/sign"><a>Sign up</a></Link></h5>
                    </form>
                }
                {tab === 3 &&
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='email' id="email"></label><br></br>
                        <input className={errors.email && touched.email ? "input-error" : ""} type="name" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Email Address" />
                        {errors.email && touched.email && <p className='error'>{errors.email}</p>}<br></br>
                        <label htmlFor='password' id="password"></label><br></br>
                        <input className={errors.password && touched.password ? "input-error" : ""} type="name" id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder="Password" />
                        {errors.password && touched.password && <p className='error'>{errors.password}</p>}<br></br>
                        <div className="forget">
                            <div>
                                <h4>Forgot Password?</h4>
                            </div>
                            <div>
                                <button className="loging">Login</button>
                            </div>
                        </div>
                        <h5>Don’t have an account? <Link to="/signing"><a>Sign up</a></Link></h5>
                    </form>
                }
            </div>
        </section >
    )
}
export default Login;
