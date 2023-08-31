import Ellipse from '../assets/Ellipse.svg';
import '../styles/teacher.scss';
import {Button}  from "../components/button/button";
import yellow  from '../assets/yellow.png';
import About from '../components/about/about';
import Experience from '../components/experiences/experience';
import arrow from '../assets/arrow.png';

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
         <div className='education'>
            <div>
            <h3>EDUCATIONAL BACKGROUND</h3>
            </div>
            <div>
                <img src={arrow}alt=""/>
            </div>
         
         <div className='educational-background'>
            <div className='background'>
            <div><p>SSCE</p></div>
              <div> <p>2001-2007</p></div> 
           <div> <p>Umbrella Grammar School</p></div> 
         </div>
         <div className='background'>
         <div><p>B.SC</p></div>
               <div> <p>2008-2012</p></div>
              <div><p>Geography, University of Illorin</p></div>
              </div>
              <div className='background'>
         <div><p>M.SC</p></div>
               <div> <p>2012-2014</p></div>
              <div><p>Geoscience, University of Ibadan</p></div>
              </div>
         </div>
</div>
</div>
    )
}
export default Teacher;