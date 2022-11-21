import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoHook } from './components/06-memos/MemoHook';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './components/03-example/MultipleCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { Layout } from './components/05-LayoutEffect/Layout';
//import { Memorize } from './components/06-memos/Memorize';
//import { CounterApp } from './components/01-usestate/CounterApp';
//import { CounterWithCoustomHook } from './components/01-usestate/CounterWithCoustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <MemoHook />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
