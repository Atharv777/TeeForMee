import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import UserState from './Context/User/UserState';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <UserState>
            <App />
        </UserState>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
