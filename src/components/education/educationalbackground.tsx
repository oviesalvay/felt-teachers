import { FC, useState } from "react";
import arrow from "../../assets/arrow.png";
import "./index.scss";

interface experience {
    data: Array<object>
}

const EducationalBackground: FC<experience> = ({ data }) => {


    const [showQualification, setShowQualification] = useState<boolean>(false)

    return (
        <>
            <div className='education'>
                <span className="toggler"></span>
                <div onClick={() => setShowQualification(!showQualification)} className="feild__toggler">
                    {data.map((qualifications: any, index: number) => {
                        return (
                            <h3 key={index}>{qualifications.title}</h3>
                        )
                    })}
                    <img className={showQualification ? "rotate" : ""} src={arrow} alt="" />
                </div>
                <div>
                    {data.map((qualifications: any, index: number) => {
                        return (
                            <>
                                {showQualification &&
                                    <div key={index} className='education__background'>
                                        <p key={index}>{qualifications.degree}</p>
                                        <p key={index} >{qualifications.year}</p >
                                        <p key={index}>{qualifications.school}</p>
                                    </div>
                                }
                            </>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
export default EducationalBackground