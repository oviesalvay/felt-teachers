import { Link } from 'react-router-dom';
import { SignButton } from '../../components/button/button';
import '../../styles/testPage.scss';

const testPage = () =>{
    return(
        <div className="testPage">
            <div className='subject'>
<SignButton type="none" content="Teacher"/>
<label htmlFor='subject'>Choose Subject</label><br></br>
<select value="subject">
<option value="mathematics">Mathematics</option>
<option value="english">English</option>
<option value='physics'>Physics</option>
<option value="crs">CRS</option>
</select>
</div>
<div className='instruction'>
    <h5>Instruction:</h5>
<ol>
    <li>Each questions must be answered between the range of 30 seconds.</li>
<li> Answer all questions correctly.</li>
<li> When the test begins, it cannot be stopped until it is completed.</li>
</ol>
<Link to ="/test">
<button className='begin-test'>Begin Test</button>
</Link>
</div>
</div>
    )
}
export default testPage;