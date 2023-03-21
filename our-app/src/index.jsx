import React from "react";
//import ReactDOM from "react-dom";
 import { BrowserRouter } from "react-router-dom";
 import App from "./App.jsx";
 import 'bootstrap/dist/css/bootstrap.min.css';
// import express from "express";
// import bosyParser from "body-parser";




import { createRoot } from 'react-dom/client';
const c = document.getElementById('root');
const root = createRoot(c); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>    
    </React.StrictMode>);
