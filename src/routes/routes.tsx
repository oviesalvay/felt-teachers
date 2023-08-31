import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/home";
import School from "../views/schools";
import Teacher from "../views/teacher";
import SignUp from '../views/registeration/signt'
import Sign from '../views/registeration/signS';
import Signing from '../views/registeration/signp';
import Login from "../views/registeration/login";
import Navbar from "../components/navbar/navbar";
import TestPage from "../views/testPage/testPage";
import Test from "../views/testPage/test";
import Test2 from "../views/testPage/test2";
import SubmitTest from "../views/testPage/submitTest";
import PasswordRecovery from "../views/registeration/password/passwordRecovery";
const Views = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="school" element={<School />} />
                    <Route path="help" element={<Teacher/>}/>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/sign" element={<Sign />} />
                    <Route path="/signing" element={<Signing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/testPage" element={<TestPage/>}/>
                    <Route path="/test" element={<Test/>}/>
                    <Route path ="/test2" element={<Test2/>}/>
                    <Route path ="/submitTest" element={<SubmitTest/>}/>
                    <Route path ="/password-recovery" element={<PasswordRecovery/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Views;