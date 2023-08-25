import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/home";
import School from "../views/schools";
import Teacher from "../views/teacher";
import SignUp from '../views/registeration/signup'
import Sign from '../views/registeration/sign';
import Signing from '../views/registeration/signing';
import Login from "../views/registeration/login";
import Navbar from "../components/navbar";

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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Views;