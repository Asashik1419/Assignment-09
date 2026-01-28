import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../page/Error/ErrorPage.jsx';
import Home from '../components/Home/Home.jsx';
import Card from '../page/Card/Card.jsx';
import Root from '../components/Root/Root.jsx';
import CardDetails from '../page/CardDetails/CardDetails.jsx';
import LoginPage from '../page/LoginPage/LoginPage.jsx';
import RegisterPage from '../page/RegisterPage/RegisterPage.jsx';
import PrivateRoute from '../Provider/PrivateRoute.jsx';


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
        {
            index: true,
            Component:Home
        },
        {
            path:'/card',
            Component:Card
        },
        {
            path: "*" ,
            element: <ErrorPage></ErrorPage>,
        },
        {
            path: '/cardDetails/:id',
            loader: () => fetch('/jsonData.json'),
            element: <PrivateRoute>
                <CardDetails></CardDetails>
            </PrivateRoute>
        },
        {
            path: '/loginPage',
            Component: LoginPage
        },
        {
            path: '/ragisterPage',
            Component: RegisterPage
        }
    ]
    
  },
]);