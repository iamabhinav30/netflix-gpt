import { useRef, useState } from "react";
import Header from "../header/Header";
import { checkValidData } from "../../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleSignInForm = (e) => {
        e.preventDefault();
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = (e) => {
        e.preventDefault();
        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        // signIn/signUp Logic
        if (!isSignInForm) {
            // signUp logic
            console.log('SignUp');
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIQDs0n9ceq9jI0mpPaabCogEXmQUgDQPbqJXj3w83wzdkCdd4=s360-c-no"
                    }).then(() => {
                        // Profile updated!
                        // ...
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                        navigate('/browse');
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMessage(error.message);
                    });

                    console.log(user);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ' - ' + errorMessage);
                });

        } else {
            // signIn logic
            console.log('signIn');
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ' - ' + errorMessage);
                });

        }

    }
    return (
        <div >
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="backgroundImage" />
            </div>
            <form
                className="p-12 bg-black absolute w-3/12 mx-auto right-0 left-0 text-white bg-opacity-70">
                <h1
                    className="font-bold text-3xl py-4">
                    {isSignInForm ? 'Sign In' : 'Sign up'}
                </h1>

                {!isSignInForm
                    && <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="px-3 py-3 my-2 w-full bg-opacity-60 bg-gray-600 rounded-lg" />}

                <input type="text"
                    ref={email}
                    placeholder="Email Address"
                    className="px-3 py-3 my-2 w-full bg-opacity-60 bg-gray-600 rounded-lg" />

                <input
                    type="password"
                    ref={password}
                    placeholder="Password"
                    className="px-3 py-3 my-2 w-full bg-opacity-60 bg-gray-600 rounded-lg" />
                <p className="text-red-500 font-bold text-lg py-2 text-sm">{errorMessage}</p>

                <button
                    type="button"
                    onClick={handleButtonClick}
                    className="p-2 my-1 bg-red-700 w-full rounded-lg">
                    {isSignInForm ? 'Sign In' : 'Sign up'}
                </button>
                <br />
                <p
                    className="py-4 cursor-pointer"
                    onClick={toggleSignInForm}>
                    {isSignInForm ? 'New to Netflix? Sign up now' : 'Already registered? Sign In Now...'}
                </p>
                <br />
                <p
                    className="font-bold ">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
            </form>

        </div>
    )
}

export default Login;