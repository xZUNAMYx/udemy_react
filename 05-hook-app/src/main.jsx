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
import { Padre } from './07-tarea-memo/Padre.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Padre />
  // </React.StrictMode>,
)