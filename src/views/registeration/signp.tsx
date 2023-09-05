import { useFormik } from 'formik';
import { signupSchema } from "../../schema";
import "../registeration/signup.scss";
import yellow from "../../views/registeration/assest/yellow.png";
import { Link } from 'react-router-dom';
import eclipse from "./assest/eclipse.png";



const Signing = () => {
    const onSubmit = (values: any) => {
        console.log("Submitted", values);
    }
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
            FullName: "",
            phoneNumber: "",
            passcode: "",
            confirmPassword: "",
        },
        validationSchema: signupSchema,
        onSubmit
    });
    return (
        <section className='sign'>
            <img src={yellow} alt="" id="yellow" />
            <img src={eclipse} alt="" id="circle" />
            <img src={yellow} alt="" id="yellowed" />
            <section className='signup'>
                <h1>Sign Up as a Parent</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='fullname' id="FullName"></label><br></br>
                    <input className={errors.FullName && touched.FullName ? "input-error" : ""} type="text" id="FullName" onChange={handleChange} onBlur={handleBlur} value={values.FullName} placeholder="Full Name" />
                    {errors.FullName && touched.FullName && <p className='error'>{errors.FullName}</p>}<br></br>
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
                    <label htmlFor='password' id="confirmpassword"></label><br></br>
                    <input className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""} type="text" id="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} placeholder='Confirm Password' />
                    {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}<br></br>
                    <label htmlFor='passcode' id="passcode"></label><br></br>
                    <input className={errors.passcode && touched.passcode ? "input-error" : ""} type="number" id="passcode" onChange={handleChange} onBlur={handleBlur} value={values.passcode} placeholder=' Passcode' />
                    {errors.passcode && touched.passcode && <p className='error'>{errors.passcode}</p>}<br></br>
                </form>
                <button disabled={isSubmitting} type="submit" className='submit'>{isSubmitting ? "Sign Up" : ""}Sign Up</button>
                <h5>Already have an account? <Link to="/login"><a>Login</a></Link></h5>
            </section>
        </section>
    )
}
export default Signing;