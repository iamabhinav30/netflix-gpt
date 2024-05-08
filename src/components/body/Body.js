import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './../login/Login';
import Browse from './../browse/Browse';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                // navigate('/browse');
            } else {
                // User is signed out
                dispatch(removeUser());
                // navigate('/');
            }
        });
    }, [])

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default Body