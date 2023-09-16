import '../components/cv.scss';
import download from '../assets/download.png';
import { useState } from "react";
import arrow from '../assets/arrow.png';

const Cv = () => {

    const [showQualification, setShowQualification] = useState<boolean>(false)
    return (
        <>
            <div className='education-edit'>
                {/* <span className="toggler"></span> */}
                <div onClick={() => setShowQualification(!showQualification)} className="feild__toggler">
                    <div>
                        <h3 className={showQualification ? "rotate" : ""}>CV</h3>
                    </div>
                    <div>
                        <img className={showQualification ? "rotate" : ""} src={arrow} alt="" />
                    </div>
                </div>

                {showQualification &&
                    <section className="CV">
                        <div className='PDF'>
                            <div className='download'>
                                <button className="download-btn">PDF</button>
                            </div>
                            <div>
                                <img src={download} alt="" className='download-img' />
                            </div>
                        </div>
                    </section>
                }
            </div>
        </>
    )
}
export default Cv;