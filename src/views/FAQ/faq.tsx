import '../../views/FAQ/faq.scss';
import yellow from '../../assets/yellow.png';


const Faq = () => {
    return (
        <section className="faq">
            <div>
                <p> What is felt teachers</p>
                <p>How does it work</p>
                <p>How do i sign in</p>
                <p>Can i register multiple accounts</p>
                <p>How do i buy more connect points</p>
                <p>Can i buy more connect points even if  i still
                    have some connect points remaining</p>
                <p>How do i upload a video</p>
                <p>How will i know if am employed</p>
                <p>How can i take tests</p>
            </div>
            <div>
                <p>What is the maximum connect point i can buy</p>
                <p>How can i delete my account</p>
            </div>
            <img src={yellow} alt="" />
        </section>
    )
}
export default Faq;