import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div className='navigation'>
        <nav className='navbar navbar-default fixed-top'>
            <div className='container-fluid'>
                <ul className="nav navbar-nav">
                        <li>
                            <Link to="/Home">
                            <ion-icon name="home-outline">Home</ion-icon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Skills">
                            <ion-icon name="code-slash-outline">Skills</ion-icon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Projects">
                            <ion-icon name="laptop-outline">Projects</ion-icon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">
                            <ion-icon name="accessibility-outline">About</ion-icon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact">
                            <ion-icon name="mail-outline">Contact</ion-icon>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        
    </div>
  )
}

export default Sidebar