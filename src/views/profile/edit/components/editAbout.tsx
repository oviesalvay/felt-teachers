import email from '../../../../assets/email.png';
import phone from '../../../../assets/phone.png';
import location from '../../../../assets/location.png';
import connect from '../../../../assets/connect.png';
import '../../edit/components/editAbout.scss';

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
        text: 'Location'
    },
    {
        img: connect,
        text: 'Connects'
    },
]
const EditAbout = () => {
    return (
        <>
            <div className='edit-about'>
                {edit.map((edit: any, index: number) => {
                    return (
                        <div className='about-me'>
                            <div key={index} className='About'>
                                <form>
                                    <div>
                                        <img src={edit.img} />
                                        <p>{edit.text}</p>
                                    </div>
                                    <input type="text" />
                                </form>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default EditAbout;