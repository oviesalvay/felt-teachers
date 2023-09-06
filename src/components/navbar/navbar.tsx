import Subtract from '../../assets/Subtract.png';
import { NavLink } from 'react-router-dom';
import '../../components/navbar/navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    <div>
                        <img src={Subtract} alt="" />
                    </div>
                    <div>
                        <h1>Felt Teachers</h1>
                    </div>
                </div>
                <div className='navlinks'>
                    <NavLink to="./">Home</NavLink>
                    <NavLink to="about">About Us</NavLink>
                    <NavLink to="FAQ">FAQ(s)</NavLink>
                    <Link to="/signup">
                        <button className='signup'>SIGN UP</button></Link>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;