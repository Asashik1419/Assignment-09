import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../page/Error/ErrorPage.jsx';
import Home from '../components/Home/Home.jsx';
import Card from '../page/Card/Card.jsx';
import Root from '../components/Root/Root.jsx';


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
        }
    ]
    
  },
]);