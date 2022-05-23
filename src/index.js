import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './conponents/Header';
import {Box1} from "./conponents/Box-1";
import {Box2} from "./conponents/Box-2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <Box1/>
        <Box2/>
    </React.StrictMode>
);


