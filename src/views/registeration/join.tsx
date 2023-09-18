import group from '../../assets/group.png';
import { LinkButton } from "../../components/button/button";
import '../registeration/sign.scss';
import { Link } from 'react-router-dom';
import yellow from '../../assets/yellow.png';
import circle from '../../assets/circle.png';
import circled from '../../assets/circled.png';
import { useNavigate } from 'react-router-dom';

const Join = () => {

    const navigate = useNavigate()

    const value1 = () => {
        localStorage.setItem("f/role/-type", JSON.stringify("Teacher"))
        setTimeout(() => {
            navigate("/signup/teacher")
        }, 500)
    }
    const value2 = () => {
        localStorage.setItem("f/role/-type", JSON.stringify("School"))
        setTimeout(() => {
            navigate("/signup/school")
        }, 500)
    }
    const value3 = () => {
        localStorage.setItem("f/role/-type", JSON.stringify("Parent"))
        setTimeout(() => {
            navigate("/signup/parent")
        }, 500)
    }

    return (
        <>
            <section className='join-intro'>
                <Link to="/">
                    <p>Back to Home</p>
                </Link>
                <img src={yellow} alt="" className='yellowcircle' />
                <img src={circle} alt="" className='Circle' />
                <img src={yellow} alt="" className='yellowdot' />
                <img src={yellow} alt="" className='Yellow' />
                <img src={circled} alt="" className='Circled' />
                <div className='join'>
                    <div>
                        <img src={group} alt="" />
                    </div>
                    <div className='community'>
                        <h4>Join the Felt Teachers community
                            Today</h4>
                        <p>Which Category Do You Belong</p>
                        {/* <div> */}
                        <a onClick={value1}>
                            <LinkButton type="none" content="Teacher" />
                        </a>
                        <a onClick={value2}>
                            <LinkButton type="none" content="School" />
                        </a>
                        <a onClick={value3}>
                            <LinkButton type="none" content="Parent" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Join;