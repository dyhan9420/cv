import React from 'react';
import ReactDOM from 'react-dom';

import './css/reset.css';
import './index.css';

import App from './App';
import Header from './comp/Header';
import Buttons from './comp/Buttons';

ReactDOM.render(
    <React.StrictMode> {/* 얘 쓰면 콘솔 두번 찍힘*/}
        <App />
        <div id="wrapper">
            <Header />
            <div id="content" className="ml-300">
                <Buttons />
            </div>
        </div>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

