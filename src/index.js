import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import App from './App';
import './style/main.css';

ReactDOM.render((
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>
), document.getElementById('root'));
