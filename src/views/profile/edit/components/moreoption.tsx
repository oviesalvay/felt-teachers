import { FC, useState } from 'react'
import '../components/moreoption.scss';
import Group from '../../../../assets/Group 377.png'
// import { Link } from 'react-router-dom';
// import Delete from '../../edit/components/delete';

export const MoreOption: FC = () => {
    const [isCodeVisible, setIsCodeVisible] = useState(false);
    const toggleCodeVisibility = () => {
        setIsCodeVisible(!isCodeVisible);
    };
    return (
        <section className='option-intro'>
            <div className='more-options'>
                <div>
                    <img src={Group} alt="" />
                </div>
                <div>

                    <button onClick={toggleCodeVisibility}>
                        {isCodeVisible ? 'More Options' : 'More Options'}
                    </button>
                </div>
                {isCodeVisible && (
                    <div className='options'>
                        <div className='option'>
                            {<p>Delete Account</p>}
                            {/* <Delete /> */}
                            {<h4>Change Password</h4>}
                            {<h4>Log Out</h4>}
                        </div>
                    </div>
                )
                }
            </div>
        </section>

    )
}
export default MoreOption;