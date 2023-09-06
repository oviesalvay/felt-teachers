import '../password/recovery.scss';
import { useFormik } from 'formik';
import { signupSchema } from "../../../schema";
import yellow from "../../../assets/yellow.png";
import circle from '../../../assets/circle.png';


const PasswordRecovery = () => {
    const onSubmit = (values: any) => {
        console.log("Submitted", values);
    }
    const { values, errors, touched, handleBlur, handleChange, } = useFormik({
        initialValues: {
            email: "",
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
                <h3>Password Recovery</h3>
                <p>Enter your E-mail and we will send you a reset</p>
                <form action="#">
                    <label htmlFor='email' id="email"></label><br></br>
                    <input className={errors.email && touched.email ? "input-error" : ""} type="text" id="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Email Address' />
                    {errors.email && touched.email && <p className='error'>{errors.email}</p>}<br></br>
                </form>
                <button className='verify-btn'>Verify</button>
            </div>
        </section>
    )
}
export default PasswordRecovery;