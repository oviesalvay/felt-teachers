import { Link } from "react-router-dom";
import { SignButton } from "../../components/button/button";


const Test2 = () =>{
    return(
        <section className="testPage">
<div className='question'>
<SignButton type="none" content="Teacher"/>
    <h5>Instruction:</h5>
<ol>
    <li> Each questions must be answered between the range of 30 seconds.</li>
<li> Answer all questions correctly.</li>
</ol>
</div>
<div className="test">
<p id="question">Questions 1 of 20:</p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
 lorem ipsum.</p>
    <form action="#">
 <input type="radio" value="True" name='true'/>
  <label htmlFor="">True</label><br></br>
  <input type="radio"  value="False" name='true'/>
  <label htmlFor="">False</label><br></br>
<input type="radio"  value="all of the above" name='true'/>
<label htmlFor="">All of the above</label><br></br>
    </form>
    <div className='next'>
<div>
    <Link to ="/testPage">
    <a href="prev">Prev</a>
    </Link>
</div>
<Link to="/SubmitTest">
<button className='begin-test'>Next</button>
</Link>
</div>
    </div>
</section>
    )
}
export default Test2;
