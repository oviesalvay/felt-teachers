import { FC, useState } from 'react'
import '../components/moreoption.scss';
// import { MoreOption } from './moreoption';


export const MoreOption: FC = () => {
    const [isCodeVisible, setIsCodeVisible] = useState(false);
    const toggleCodeVisibility = () => {
        setIsCodeVisible(!isCodeVisible);
    };
    return (
        <section className='option'>
            <div>
                <button onClick={toggleCodeVisibility}>
                    {isCodeVisible ? 'More Options' : 'More Options'}
                </button>
            </div>
            {isCodeVisible && (
                <div className='options'>
                    <div className='select-option'>
                        {<p>Delete Account</p>}
                        {<h4>Change Password</h4>}
                        {<h4>Log Out</h4>}
                    </div>
                </div>
            )
            }
        </section>

    )
}
export default MoreOption;