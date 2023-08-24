// import { Link } from "react-router-dom";
import midi_search from '../assets/mdi_search.png';
import '../styles/home.scss';

const HomePage = () => {
    return (
        <div className='search'>
            <div>
            <img src={midi_search}alt=""/>
            </div>
            <div>
                <h6>search</h6>
                <h2>mathema</h2>
            </div>
        </div>
    )
}

export default HomePage;