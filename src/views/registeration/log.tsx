import { Link } from 'react-router-dom';
import group from '../../assets/group.png';
import { LinkButton } from "../../components/button/button";
import yellow from '../../assets/yellow.png';
import circle from '../../assets/circle.png';
import circled from '../../assets/circled.png'

const Log = () => {
    return (
        <>
            <section className='join-intro'>
                <img src={yellow} alt="" className='yellowcircle' />
                <img src={circle} alt="" className='Circle' />
                <img src={circled} alt="" className='Circled' />
                <p>Back to Home</p>
                <div className='join'>
                    <div>
                        <img src={group} alt="" />
                    </div>
                    <div className='community'>
                        <h4>Welcome Back,</h4>
                        <h4>   Log In To Your Account</h4>
                        <p>Which Category Do You Belong</p>
                        <Link to="/signUp">
                            <LinkButton type="none" content="Teacher" /></Link>
                        <Link to="/signS">
                            <LinkButton type="none" content="School" /></Link>
                        <Link to="/signing">
                            <LinkButton type="none" content="Parent" /></Link>

                    </div>
                </div>
            </section >
        </>
    )
}
export default Log;