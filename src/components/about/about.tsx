import phone from '../../assets/phone.png'
import email from '../../assets/email.png';
import location from '../../assets/location.png';
import connect from '../../assets/connect.png';
import '../about/about.scss';
import { FC } from 'react';

interface details {
    mail: string
    tel: string
}

const About: FC<details> = ({ mail, tel }) => {
    const about: Array<object> = [
        {
            img: phone,
            name: 'Phone Number',
            text: tel,
        },
        {
            img: email,
            name: 'Email Address',
            text: mail,
        },
        {
            img: location,
            name: 'Location',
            text: 'Lagos, Nigeria',
        },
        {
            img: connect,
            name: 'Connects',
            text: "2",
        },
    ]
    return (
        <>
            <div className='About'>
                {about.map((about: any, index: number) => {
                    return (
                        <div className='about-intro'>
                            <div key={index} className='about'>
                                <div>
                                    <img src={about.img} />
                                    <p>{about.name}</p>
                                </div>
                                <p>{about.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default About;