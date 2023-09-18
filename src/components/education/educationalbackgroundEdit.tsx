import { useState } from "react";
import arrow from "../../assets/arrow.png";
import '../education/edit.scss';

const EducationalBackgroundEdit = () => {

    const [showQualification, setShowQualification] = useState<boolean>(false)
    return (
        <>
            <div className='education-edit'>
                <span className="toggler"></span>
                <div onClick={() => setShowQualification(!showQualification)} className="feild__toggler">
                    <div>
                        <h3 className={showQualification ? "rotate" : ""}>OPEN  JOB ADVERTS (1)</h3>
                    </div>
                    <div>
                        <img className={showQualification ? "rotate" : ""} src={arrow} alt="" />
                    </div>
                </div>
                <div>
                    <form action="">
                        {showQualification &&
                            <div className='Education'>
                                <input type="text" placeholder="Class" />
                                <input type="text" placeholder="Subject" />
                                <input type="text" placeholder="Additional text" />
                            </div>
                        }
                    </form>
                </div>
            </div>
            <div className='education-edit'>
                <span className="toggler"></span>
                <div onClick={() => setShowQualification(!showQualification)} className="feild__toggler">
                    <div>
                        <h3 className={showQualification ? "rotate" : ""}>REQUIREMENTS</h3>
                    </div>
                    <div>
                        <img className={showQualification ? "rotate" : ""} src={arrow} alt="" />
                    </div>
                </div>
                <div>
                    <form>
                        {showQualification &&
                            <div className='Education'>
                                <input type="text" placeholder="Course" />
                            </div>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}
export default EducationalBackgroundEdit;