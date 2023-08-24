import { useFormik } from 'formik';
import { signupSchema } from "../../schema";
import yellow from "../../views/registeration/assest/yellow.png";
import eclipse from "./assest/eclipse.png";
import { Link } from 'react-router-dom';


const Sign = () => {
    const onSubmit = (values: any) => {
        console.log("Submitted", values);
    }
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
            schoolName: "",
            phoneNumber: "",
            passcode: "",
            confirmPassword: "",
        },
        validationSchema: signupSchema,
        onSubmit
    });
    return (
        <>
            <section className='sign'>
                <img src={yellow} alt="" id="yellow" />
                <img src={eclipse} alt="" id="circle" />
                <img src={yellow} alt="" id="yellowed" />
                <section className='signup'>
                    <h1>Sign Up as a School</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='schoolname' id="schoolName"></label><br></br>
                        <input className={errors.schoolName && touched.schoolName ? "input-error" : ""} type="name" id="schoolName" onChange={handleChange} onBlur={handleBlur} value={values.schoolName} placeholder="School Name" />
                        {errors.schoolName && touched.schoolName && <p className='error'>{errors.schoolName}</p>}<br></br>
                        <div className='flex'>
                            <div>
                                <label htmlFor='email' id="email"></label><br></br>
                                <input className={errors.email && touched.email ? "input-error" : ""} type="text" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Email Address' />
                                {errors.email && touched.email && <p className='error'>{errors.email}</p>}<br></br>
                            </div>
                            <div>
                                <label htmlFor='phonenumber' id="phoneNumber"></label><br></br>
                                <input className={errors.phoneNumber && touched.phoneNumber ? "input-error" : ""} type="number" id="phoneNumber" onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} placeholder='Phone Number' />
                                {errors.phoneNumber && touched.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}<br></br>
                            </div>
                        </div>
                        <label htmlFor='password' id="password"></label><br></br>
                        <input className={errors.password && touched.password ? "input-error" : ""} type="text" id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder='Password' />
                        {errors.password && touched.password && <p className='error'>{errors.password}</p>}<br></br>
                        <label htmlFor='password' id="confirmPassword"></label><br></br>
                        <input className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""} type="text" id="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} placeholder='Confirm Password' />
                        {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}<br></br>
                        <label htmlFor='passcode' id="passcode"></label><br></br>
                        <input className={errors.passcode && touched.passcode ? "input-error" : ""} type="number" id="passcode" onChange={handleChange} onBlur={handleBlur} value={values.passcode} placeholder=' Passcode' />
                        {errors.passcode && touched.passcode && <p className='error'>{errors.passcode}</p>}<br></br>
                    </form>
                    <button disabled={isSubmitting} type="submit" className='submit'>{isSubmitting ? "Sign Up" : ""}Sign Up</button>
                    <Link to="/sign">
                        <h5>Already have an account?<a>Login</a></h5>
                    </Link>

                </section>
            </section>
        </>
    )
}
export default Sign