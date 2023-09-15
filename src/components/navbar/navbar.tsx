import Subtract from '../../assets/Subtract.png';
import { NavLink } from 'react-router-dom';
import '../../components/navbar/navbar.scss';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from "react-icons/fa";
import { FC, useState } from 'react'

export const Navbar: FC = () => {

    const [shownav, setShowNav] = useState(false)

    const handleClick = () => {
        setShowNav(!shownav)
    }

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
                <div className={shownav ? "navlinks navlinks__close" : "navlinks"}>
                    <NavLink onClick={handleClick} className={({ isActive }) => (isActive ? "active" : "")} to="/" id='navlink'>Home</NavLink>
                    <NavLink onClick={handleClick} to="/faq">FAQ(s)</NavLink>
                    <Link to="/join">
                        <button className='signup'>SIGN UP</button></Link>
                </div>
                <div onClick={handleClick} className='hamburger'>
                    {shownav ? <FaTimes size={30} /> : <FaBars size={25} />}
                </div>
            </nav>
        </header >
    )
}
export default Navbar;