import midi_search from '../assets/mdi_search.png';
import '../components/search.scss';

const Search = () =>{
    return(
        <>
        <div className='search'>
            <div>
            <img src={midi_search}alt=""/>
            </div>
            <div>
                <h6>search</h6>
            </div>
        </div>
        </>
    )
}
export default Search;