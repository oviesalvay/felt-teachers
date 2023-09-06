import Subtract from '../../assets/Subtract.png';
import apps from '../../assets/apps.png';
import '../footer/footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <div>
                    <img src={Subtract} alt="" />
                </div>
                <div>
                    <h1>Felt Teachers</h1>
                </div>
            </div>
            <div className='social-apps'>
                <p>Connect with us on social media:</p>
                <img src={apps} alt="" />
            </div>
        </footer>
    )
}
export default Footer;