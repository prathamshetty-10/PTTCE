
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Loader from "./Components/Loader.jsx";

import { Toaster } from 'react-hot-toast';
import {BrowserRouter} from "react-router-dom"
function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum splash duration (prevents flash)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 1.5s smooth transition

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading && <Loader />}
      <BrowserRouter>
        <ScrollToTop />
        <App />
        <Toaster />
      </BrowserRouter>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Root />);

