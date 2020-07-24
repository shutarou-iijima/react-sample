import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import Menu from "./components/Menu";

ReactDOM.render(
    <div className="twitter">
        <Header />
        <Menu />
    </div>,
    document.getElementById('root')
);
