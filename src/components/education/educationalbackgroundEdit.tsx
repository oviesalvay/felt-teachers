import { useState } from "react";
import arrow from "../../assets/arrow.png";
import "./edit.scss";

const EducationalBackgroundEdit = () => {

    const [showQualification, setShowQualification] = useState<boolean>(false)
    return (
        <>
            <div className='education-edit'>
                <form action="">

                </form>
                <span className="toggler"></span>
                <div onClick={() => setShowQualification(!showQualification)} className="feild__toggler">
                    <img className={showQualification ? "rotate" : ""} src={arrow} alt="" />
                </div>
                <div>
                    {showQualification &&
                        <div className='Education'>
                            <input type="text" /><input type="text" /><input type="text" />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default EducationalBackgroundEdit;