import Subtract from '../../assets/Subtract.png';
import { NavLink } from 'react-router-dom';
import Ellipse from '../../assets/Ellipse.svg';
import '../../components/navbar/navbar.scss';

const Navbar = () =>{
    return(
        <header>
            <nav>
                <div className="logo">
                <div>
<img src={Subtract} alt=""/>
                </div>
<div>
<h1>Felt Teachers</h1>
</div>
                </div>
                <div className='navlinks'>
                    <NavLink to="./">Home</NavLink>
                    <NavLink to="school">Schools</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <img src={Ellipse} alt=""/>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;