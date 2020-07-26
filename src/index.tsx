import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Twitter from "./components/Twitter";

const root = window.location.href.replace(window.location.origin, '')

ReactDOM.render(
    <Twitter root={root} />,
    document.getElementById('root')
);
