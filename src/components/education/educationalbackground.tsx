import { FC, useState } from "react";
import arrow from "../../assets/arrow.png";
import "./index.scss";

interface experience {
    data: Array<object>
    title?: string
}

const EducationalBackground: FC<experience> = ({ data, title }) => {


    const [showQualification, setShowQualification] = useState<boolean>(false)

    return (
        <>
            <div className='education'>
                <span className="toggler"></span>
                <div onClick={() => setShowQualification(!showQualification)} className="feild__toggler">
                    <h3>{title}</h3>
                    <img className={showQualification ? "rotate" : ""} src={arrow} alt="" />
                </div>
                {showQualification &&
                    <>
                        {data.map((qualifications: any, index: number) => {
                            return (
                                <>
                                    <div key={index} className='education__background'>
                                        {qualifications.degree && <p>{qualifications.degree}</p>}
                                        {qualifications.year && <p >{qualifications.year}</p>}
                                        {qualifications.school && <p>{qualifications.school}</p>}
                                        {qualifications.text && <p id="degree">{qualifications.text}</p>}
                                    </div>
                                </>
                            )
                        })}
                    </>
                }
            </div>

        </>
    )
}
export default EducationalBackground