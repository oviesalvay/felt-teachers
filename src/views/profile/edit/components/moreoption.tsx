import { FC, useState } from 'react'
import '../components/moreoption.scss';
// import { MoreOption } from './moreoption';


export const MoreOption: FC = () => {

    const [tab, setTab] = useState<number>(1);
    return (
        <section className='more-option'>
            <div id="new">
                <button onClick={() => setTab(1)} className={tab === 1 ? 'current' : ''}>More Option</button>
            </div>
            {tab === 1 &&
                <div className='option'>
                    <p>Delete Account</p>
                    <h4>Change Password</h4>
                    <h4>Log Out</h4>
                </div>
            }
        </section>

    )
}
export default MoreOption;