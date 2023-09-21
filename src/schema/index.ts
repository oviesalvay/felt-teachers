import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 "upper case letter", 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    FirstName: yup.string().min(1, "Please enter your Name").required("Required"),
    lastName: yup.string().min(1, "Please enter your Name").required("Required"),
    phonenumber: yup.number().positive().integer().required("Required"),
    passcode: yup.number().positive().integer().required("Required"),
message: yup.string().email("Please enter a message").required("Required"),
});

export const signupSchema = yup.object().shape({
    // FullName: yup.string().min(1, "Please enter your Name").required("Required"),
            email: yup.string().email("Please enter a valid email").required("Required"),
        // schoolName: yup.string().min(1, "Please enter your schoolName").required("Required"),
    // passcode: yup.string().min(1, 'please enter your passcode').required("Required"),
    phoneNumber: yup.number().positive().integer().required("Required"),
        // message:yup.string().min(1, "Please enter a message").required("Required"),
        firstName: yup.string().min(1, "Please enter your First name").required("Required"),
        lastName: yup.string().min(1, "Please enter your Last name").required("Required"),
        password: yup.string().min(5).matches(passwordRules, { message: "Password must be a min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" }).required("Required"),
        confirmPassword: yup.string().oneOf([yup.ref<any>("password"), null], "Passwords must match").required("Required"),
      
});