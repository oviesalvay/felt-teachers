import Ellipse from '../assets/Ellipse.svg';
import '../styles/teacher.scss';
import {Button}  from "../components/button/button";
import yellow  from '../assets/yellow.png';
import About from '../components/about/about';
import Experience from '../components/experiences/experience';


const Teacher = () =>{
    return(
<div className='teachers-profile'>
<div className="teachers">
<figure>
    <img src={Ellipse} alt=""/>
</figure>
</div>
<div className='profile'>
    <div className='name'>
        <h2>CENTURION CONFIDENCE ETAH</h2>
        <div className='approved'>
            <div>
    <span></span>
    </div>
    <div>
    <h5>Approved</h5>
    </div>
    </div>   
    </div>
    <div>
        <Button type="none" content="connect"/>
        <img src={yellow}alt=""/>
    </div>
    </div> 
    <p>I am a secondary school teacher with 5 years of
         experience in working with teenagers between the ages 10-18</p>
         <About/>             
         <Experience/>
</div>
    )
}
export default Teacher;