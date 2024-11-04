import './App.css';
import './components/Background.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './About'; 
import Skills from './Skills'; 
import Projects from './Projects'; 
import Contact from './Contact';
import Home from './Home';
import Sidebar from './components/Sidebar';

export default function App() {
    
    return (
      
      <div className="App">
        <div className="auto-height-container">
            <div className="sidebar">
              <Sidebar />
            </div>

            <div className="content-bg">
              <div className="content">
                <Routes>
                  <Route path="home" element={<Home/>} />
                  <Route path="skills" element={<Skills/>} />
                  <Route path="projects" element={<Projects/>} />
                  <Route path="about" element={<About/>} />
                  <Route path="contact" element={<Contact/>} />
                </Routes>
              </div>
            </div>
        </div>
        
      </div>
    );
  
}

