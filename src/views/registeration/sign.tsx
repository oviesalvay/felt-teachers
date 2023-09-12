import group from '../../assets/group.png';
import { Buttoned } from "../../components/button/button";
import '../registeration/sign.scss';
import { Link } from 'react-router-dom';

const Sign = () => {
    return (
        <>
            <section className='join-intro'>
                <p>Back to Home</p>
                <div className='join'>
                    <div>
                        <img src={group} alt="" />
                    </div>
                    <div className='community'>
                        <h4>Join the Felt Teachers community
                            Today</h4>
                        <p>Which Category Do You Belong</p>
                        <Link to="/signUp">
                            <Buttoned type="none" content="Teacher" /></Link>
                        <Link to="/signS">
                            <Buttoned type="none" content="School" /></Link>
                        <Link to="/signing">
                            <Buttoned type="none" content="Parent" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Sign;