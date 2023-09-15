import email from '../../../../assets/email.png';
import phone from '../../../../assets/phone.png';
import location from '../../../../assets/location.png';
import connect from '../../../../assets/connect.png';




const edit: Array<object> = [
    {
        img: phone,
        text: 'Phone Number'
    },
    {
        img: email,
        text: 'Email Address'
    },
    {
        img: location,
        name: 'Location'
    },
    {
        img: connect,
        name: 'Connects'
    },
]
const AboutEdit = () => {
    <>
        <div className='edit'>
            {edit.map((edit: any, index: number) => {
                return (
                    <div className='about-intro'>
                        <div key={index} className='about'>
                            <div>
                                <img src={edit.img} />
                                <p>{edit.name}</p>
                            </div>
                            <p>{edit.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
}
export default AboutEdit;