import '../password/recovery.scss';

const PasswordRecovery = () =>{
    return(
<section className="password-recovery">
    <div className='recovery'>
    <h3>Password Recovery</h3>
    <p>Enter your E-mail and we will send you a reset</p>
    <form action="#">
        <input type="email" name="email" placeholder="E-mail Address"/>
    </form>
    <button className="verify">Verify</button>
    </div>
</section>
    )
}
export default PasswordRecovery;