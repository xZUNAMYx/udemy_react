import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from "./CounterApp";
import { AndresApp } from "./AndresApp";

import './styles.css'
// import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root') ).render(

    <React.StrictMode>
        {/* <AndresApp title='Hola, soy Andres' subTitle='Mis primeros PropTypes'/> */}
        <CounterApp value={0}/>
        {/* <AndresApp /> */}
    </React.StrictMode>

);