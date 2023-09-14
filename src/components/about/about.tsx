import phone from '../../assets/phone.png'
import email from '../../assets/email.png';
import location from '../../assets/location.png';
import connect from '../../assets/connect.png';
import '../about/about.scss';

const about: Array<object> = [
    {
        img: phone,
        name: 'Phone Number',
        text: '08090000200',
    },
    {
        img: email,
        name: 'Email Address',
        text: "adebayojude@gmail.com",
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
const About = () => {
    return (
        <>
            <div className='About'>
                {about.map((about: any, index: number) => {
                    return (
                        <div className='about-intro'>
                            <div key={index} className='about'>
                                {/* <div> */}
                                <div>
                                    <img src={about.img} />
                                    <p>{about.name}</p>
                                </div>
                                <p>{about.text}</p>
                                {/* </div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default About;