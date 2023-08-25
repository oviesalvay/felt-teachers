import { Link } from "react-router-dom";
import Search from "../components/search";
import Ellips from '../assets/Ellips.png';
import '../styles/home.scss';
import Frame from '../assets/Frame.png';

const HomePage = () => {
    return (
        <section className='intro'>
        <Search/>
        <section className='introduction'>
            <div className='mathematics'>
            <div className='teachers'>
            <div>
                <img src={Ellips} alt=""/>
                </div>
                <div>
                <h2>MATHEMATICS TEACHER NEEDED</h2>
            </div>
<div>
    <p>2 hours ago</p>
</div>
<div>
    <img src={Frame} alt=""/>
</div>
</div>
<p>At Alpha Rehonot group of schools, we Lorem Ipsum Donor emet
     Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet
      Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet </p>
      <Link to='/view'>view details</Link>
      </div>
      <div className="mathematics">
        <div className='teachers'>
            <div>
                <img src={Ellips} alt=""/>
                </div>
                <div>
                <h2>MATHEMATICS TEACHER NEEDED</h2>
            </div>
<div>
    <p>2 hours ago</p>
</div>
    <div>
    <img src={Frame} alt=""/>
</div>
</div>
<p>At Alpha Rehonot group of schools, we Lorem Ipsum Donor emet
     Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet
      Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet </p>
      <Link to='/view'>view details</Link>
      </div>
      <div className="mathematics">
        <div className='teachers'>
        <div>
            <img src={Ellips} alt=""/>
            </div>
            <div>
            <h2>MATHEMATICS TEACHER NEEDED</h2>
        </div>
<div>
<p>2 hours ago</p>
</div>
<div>
    <img src={Frame} alt=""/>
</div>
</div>
<p>At Alpha Rehonot group of schools, we Lorem Ipsum Donor emet
 Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet
  Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet </p>
  <Link to='/view'>view details</Link>
  </div>
  <div className="mathematics">
        <div className='teachers'>
        <div>
            <img src={Ellips} alt=""/>
            </div>
            <div>
            <h2>MATHEMATICS TEACHER NEEDED</h2>
        </div>
<div>
<p>2 hours ago</p>
</div>
<div>
    <img src={Frame} alt=""/>
</div>
</div>
<p>At Alpha Rehonot group of schools, we Lorem Ipsum Donor emet
 Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet
  Lorem Ipsum Donor emet Lorem Ipsum Donor emet Lorem Ipsum Donor emet </p>
  <Link to='/view'>view details</Link>
  </div>
    </section>
        </section>
    )
}

export default HomePage;