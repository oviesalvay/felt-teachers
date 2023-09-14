import { useFormik } from 'formik';
import { signupSchema } from "../../../schema";
import yellow from "../../../assets/yellow.png";
import circle from '../../../assets/circle.png';
import '../error.scss';


const PasswordReset = () => {
    const onSubmit = (values: any) => {
        console.log("Submitted", values);
    }
    const { values, errors, touched, handleBlur, handleChange, } = useFormik({
        initialValues: {
            password: "",
            confirmPassword: '',
        },
        validationSchema: signupSchema,
        onSubmit
    });
    return (
        <section className="password-recovery">
            <p id="back">Back</p>
            <img src={yellow} alt="" className='yellowed' />
            <img src={yellow} alt="" className='yellow' />
            <img src={circle} alt="" className='circle' />
            <div className='recovery'>
                <h3>Password Reset</h3>
                <form action="#">
                    <label htmlFor='password' id="password"></label><br></br>
                    <input className={errors.password && touched.password ? "input-error" : ""} type="text" id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder='New Password' />
                    {errors.password && touched.password && <p className='error'>{errors.password}</p>}<br></br>
                    <label htmlFor='confirmPassword' id="confirmPassword"></label><br></br>
                    <input className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""} type="text" id="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} placeholder='Confirm Password' />
                    {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}<br></br>
                </form>
                <button className='verify-btn'>Update</button>
            </div>
        </section>
    )
}
export default PasswordReset;