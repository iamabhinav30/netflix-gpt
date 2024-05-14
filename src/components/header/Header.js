import { signOut } from "firebase/auth";
import { auth } from './../../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../../utils/userSlice';
import { useEffect } from "react";
import { CONSTANTS } from "../../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }))
                navigate('/browse');

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/');
            }
        });
        //  this will be called when component unmounts
        return ()=>unsubscribe()
    }, []);


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            // navigate('/error')
        });
    }
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-40" 
                src={CONSTANTS.LOGO}
                alt="logo" />
            {user &&
                <div className="flex p-2">
                    <img
                        className="w-12 h-12 "
                        src={user?.photoURL}
                        alt="usericon" />
                    <button
                        className="bg-red font-bold text-white"
                        onClick={handleSignOut}>Sign Out of Netflix</button>
                </div>
            }
        </div>
    )
}

export default Header;