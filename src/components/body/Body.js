import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './../login/Login';
import Browse from './../browse/Browse';
import { useDispatch } from 'react-redux';

const Body = () => {
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



    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default Body