import { useFormik } from 'formik';
import { signupSchema } from "../../schema";
import "../registeration/signup.scss";
import yellow from "../../views/registeration/assest/yellow.png";
import { Link, useNavigate } from 'react-router-dom';
import eclipse from "./assest/eclipse.png";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slice/userSlice';

const Signup = () => {
    const dispatch = useDispatch()
    const navigateToHome = useNavigate()

    const onSubmit = (values: any) => {
        dispatch(setUser(values))
        console.log(values);

        setTimeout(() => {
            navigateToHome("/")
        }, 2000)
    }
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: "",
            phoneNumber: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: signupSchema,
        onSubmit
    });
    console.log(errors);


    const role = JSON.parse(localStorage.getItem("f/role/-type") as string)

    return (
        <section className='sign'>
            <Link to='/log'>
                <p>Back</p></Link>
            <img src={yellow} alt="" id="yellow" />
            <img src={eclipse} alt="" id="circle" />
            <img src={yellow} alt="" id="yellowed" />
            <section className='signup'>
                <h1>Sign Up as a {role}</h1>
                <form onSubmit={handleSubmit}>
                    {role === "School" ?
                        <>
                            {/* <label htmlFor='first name' id="firstName"></label><br></br> */}
                            {/* <input className={errors.firstName && touched.firstName ? "input-error" : ""} type="name" id="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName} placeholder="School Name" /> */}
                            {/* {errors.firstName && touched.firstName && <p className='error'>{errors.firstName}</p>}<br></br> */}
                        </>
                        :
                        <>
                            <label htmlFor='firstName' id="firstName"></label><br></br>
                            <input className={errors.firstName && touched.firstName ? "input-error" : ""} type="text" id="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName} placeholder="First Name" />
                            {errors.firstName && touched.firstName && <p className='error'>{errors.firstName}</p>}<br></br>
                            <label htmlFor='lastName' id="lastName"></label><br></br>
                            <input className={errors.lastName && touched.lastName ? "input-error" : ""} type="text" id="lastName" onChange={handleChange} onBlur={handleBlur} value={values.lastName} placeholder="Last Name" />
                            {errors.lastName && touched.lastName && <p className='error'>{errors.lastName}</p>}<br></br>
                        </>
                    }
                    <div className='flex'>
                        <div>
                            <label htmlFor='email' id="email"></label><br></br>
                            <input className={errors.email && touched.email ? "input-error" : ""} type="email" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Email Address' />
                            {errors.email && touched.email && <p className='error'>{errors.email}</p>}<br></br>
                        </div>
                        <div>
                            <label htmlFor='phoneNumber' id="phoneNumber"></label><br></br>
                            <input className={errors.phoneNumber && touched.phoneNumber ? "input-error" : ""} type="tel" id="phoneNumber" onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} placeholder='Phone Number' />
                            {errors.phoneNumber && touched.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}<br></br>
                        </div>
                    </div>
                    <label htmlFor='password' id="password"></label><br></br>
                    <input className={errors.password && touched.password ? "input-error" : ""} type="password" id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder='Password' />
                    {errors.password && touched.password && <p className='error'>{errors.password}</p>}<br></br>
                    <label htmlFor='confirmPassword' id="confirmPassword"></label><br></br>
                    <input className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""} type="password" id="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} placeholder='Confirm Password' />
                    {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}<br></br>
                    {/* <input className={errors.passcode && touched.passcode ? "input-error" : ""} type="number" id="passcode" onChange={handleChange} onBlur={handleBlur} value={values.passcode} placeholder=' Passcode' />
                    {errors.passcode && touched.passcode && <p className='error'>{errors.passcode}</p>}<br></br> */}
                    <button type="submit">{isSubmitting ? "Signing Up..." : "Sign Up"}</button>
                </form>
                <h5>Already have an account?<Link to="/login">Login</Link></h5>
            </section>
        </section>
    )
}
export default Signup;