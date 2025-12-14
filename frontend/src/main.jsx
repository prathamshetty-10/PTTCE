import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollToTop from "./Components/ScrollToTop.jsx";

import { Toaster } from 'react-hot-toast';
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />     {/* Self-closing component */}
    <App />
    <Toaster />
  </BrowserRouter>
);

