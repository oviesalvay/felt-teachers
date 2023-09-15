import group from '../../assets/group.png';
import { LinkButton } from "../../components/button/button";
import '../registeration/sign.scss';
import { Link } from 'react-router-dom';
import yellow from '../../assets/yellow.png';
import circle from '../../assets/circle.png';
import circled from '../../assets/circled.png';

const Sign = () => {
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
                        <Link to="/signUp">
                            <LinkButton type="none" content="Teacher" /></Link>
                        <Link to="/signS">
                            <LinkButton type="none" content="School" /></Link>
                        <Link to="/signing">
                            <LinkButton type="none" content="Parent" /></Link>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Sign;