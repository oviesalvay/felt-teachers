import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/home";
import School from "../views/schools";
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
import TeacherProfile from "../views/profile/teacherprofile";
import ParentProfile from "../views/profile/parentprofile";
import SchoolProfile from "../views/profile/schoolprofile";
import Welcome from "../views/registeration/welcomePage/welcome";
import Footer from "../components/footer/footer";
const Views = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="school" element={<School />} />
                    <Route path="help" element={<TeacherProfile />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/sign" element={<Sign />} />
                    <Route path="/signing" element={<Signing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/testPage" element={<TestPage />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/test2" element={<Test2 />} />
                    <Route path="/submitTest" element={<SubmitTest />} />
                    <Route path="/password-recovery" element={<PasswordRecovery />} />
                    <Route path="/parentProfile" element={<ParentProfile />} />
                    <Route path="/schoolProfile" element={<SchoolProfile />} />
                    <Route path='/welcomePage' element={<Welcome />} />
                    <Route path="footer" element={<Footer />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Views;