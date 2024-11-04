import React from 'react'
import './App.css'
import kai from './Media/kai.jpg'

function About() {
  return (
    <div className="mt-24 p-6 max-w-4xl mx-auto">
        <h1>My Background</h1>
        <img href={kai} alt='Kai-Headshot'></img>

    </div>
    
  )
}

export default About