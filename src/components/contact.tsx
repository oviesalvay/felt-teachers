import { signupSchema } from "../schema";
import { useFormik } from 'formik';
import yellow from "../assets/yellow.png";
import '../views/registeration/welcomePage/welcome.scss';



const Contact = () => {
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
        </>
    )
}
export default Contact;