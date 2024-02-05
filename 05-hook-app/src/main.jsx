import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { FocusScreen } from './04-useRef/FocusScreen.jsx'
// import { Memorize } from './06-memos/Memorize.jsx'
// import { MemoHook } from './06-memos/MemorizeHooks.jsx'
// import { CallbackHook } from './06-memos/CallbackHook.jsx'
// import { Padre } from './07-tarea-memo/Padre.jsx';

// import "./08-useReducer/intro-reducer.js";

// import { TodoApp } from './08-useReducer/TodoApp';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import { MainApp } from './09-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <React.StrictMode> */}
        <MainApp />
        {/* </React.StrictMode>, */}
    </BrowserRouter>
)
