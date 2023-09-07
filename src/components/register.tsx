import yellow from '../assets/yellow.png';
import '../views/registeration/welcomePage/welcome.scss';

const Register = () => {
    return (
        <>
            <div className='register'>
                <img src={yellow} alt="" className='yellow' />
                <img src={yellow} alt="" className='yellowed' />
                <div className='registered'>
                    <div className='number'>
                        <div>0</div>
                        <div>9</div>
                        <div>0</div>
                    </div>
                    <div className='number'>
                        <div>1</div>
                        <div>9</div>
                        <div>0</div>
                    </div>
                </div>
                <div className='school'>
                    <div><p>Registered Schools</p></div>
                    <div><p>Qualified Teachers</p></div>
                </div>
            </div>
        </>
    )
}
export default Register;