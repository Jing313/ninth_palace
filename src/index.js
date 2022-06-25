import React from 'react';
import ReactDOM from "react-dom";
import './style/style.css?ver=1.1';
import './style/plugins.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Roadmap from "./pages/roadmap";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="roadmap" element={<Roadmap />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
