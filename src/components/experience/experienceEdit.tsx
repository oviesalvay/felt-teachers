import { useState } from "react";
import arrow from "../../assets/arrow.png";
import '../education/edit.scss';
import '../experience/experience.scss';

const ExperienceEdit = () => {

    const [showQualification, setShowQualification] = useState<boolean>(false)
    return (
        <>
            <div className='education-edit'>
                <span className="toggler"></span>
                <div onClick={() => setShowQualification(!showQualification)} className="feild__toggler">
                    <div>
                        <h3 className={showQualification ? "rotate" : ""}>EDUCATIONAL BACKGROUND</h3>
                    </div>
                    <div>
                        <img className={showQualification ? "rotate" : ""} src={arrow} alt="" />
                    </div>
                </div>
                <div>
                    <form action="">
                        {showQualification &&
                            <div className="course">
                                <input type="text" placeholder="School Name" /><br></br>
                                <div className='Education'>
                                    <div className="education-content">
                                        <input type="text" placeholder="Start Date" />
                                        <input type="text" placeholder="End Date" />
                                        <input type="text" placeholder="Degree" />
                                    </div>
                                </div>
                                <input type="text" placeholder="Course" />
                            </div>
                        }
                    </form>
                </div>
            </div>
            <div className='education-edit'>
                <span className="toggler"></span>
                <div onClick={() => setShowQualification(!showQualification)} className="feild__toggler">
                    <div>
                        <h3 className={showQualification ? "rotate" : ""}>WORK EXPERIENCE</h3>
                    </div>
                    <div>
                        <img className={showQualification ? "rotate" : ""} src={arrow} alt="" />
                    </div>
                </div>
                <div>
                    <form action="">
                        {showQualification &&
                            <div className="course">
                                <input type="text" placeholder="School Name" /><br></br>
                                <div className='Education-words'>
                                    <div className="education-content">
                                        <input type="text" placeholder="Start Date" />
                                        <input type="text" placeholder="End Date" />
                                        <input type="text" placeholder="Degree" />
                                    </div>
                                </div>
                                <input type="text" placeholder="Course" />
                            </div>
                        }
                    </form>
                </div>
            </div >

        </>
    )
}
export default ExperienceEdit;