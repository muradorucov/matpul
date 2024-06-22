import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./assets/css/reset.css"
import "./assets/css/layout.css"
import './index.css'
import "./assets/css/responsive.css"

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { globalState } from './redux/store/index.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={globalState}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
