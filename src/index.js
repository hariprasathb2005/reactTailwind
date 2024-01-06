import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Intro from './components/Intro';
import About from './components/About';
import Services  from './components/Services';
import Work  from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Intro />
    <About/>
    <Services />
    <Work/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
   document.getElementById('root')
);


reportWebVitals();
