import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterApp } from './components/01-usestate/CounterApp';
//import { CounterWithCoustomHook } from './components/01-usestate/CounterWithCoustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <SimpleForm />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
