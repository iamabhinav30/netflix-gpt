import { useState } from "react";
import Header from "../header/Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div >
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="backgroundImage" />
            </div>
            <form className="p-12 bg-black absolute w-3/12 mx-auto right-0 left-0 text-white bg-opacity-70">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign up'}</h1>

                {isSignInForm && <input type="text" placeholder="Full Name" className="px-3 py-3 my-2 w-full bg-opacity-60 bg-gray-600 rounded-lg" />}
                <input type="text" placeholder="Email Address" className="px-3 py-3 my-2 w-full bg-opacity-60 bg-gray-600 rounded-lg" />

                <input type="password" placeholder="Password" className="px-3 py-3 my-2 w-full bg-opacity-60 bg-gray-600 rounded-lg" />
                <button className="p-2 my-1 bg-red-700 w-full rounded-lg">{isSignInForm ? 'Sign In' : 'Sign up'}</button>
                <br />
                <p className="py-4 cursor-pointer"
                    onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign up now' : 'Already registered? Sign In Now...'} </p>
                <br />
                <p className="font-bold ">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
            </form>

        </div>
    )
}

export default Login;