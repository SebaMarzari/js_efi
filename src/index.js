import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { HashRouter } from 'react-router-dom';
import LoginProvider from './context/Login/LoginProvider';
import ThemeProvider from './context/Theme/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <LoginProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </LoginProvider>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
