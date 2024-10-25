import React from 'react'
import Sidebar from './components/Sidebar'

function Projects() {
  return (
    <div>
      <div><h1>Projects</h1></div>
      <div className='row justify-content-md-center'>
        <div className='col col-lg-2'>
          <p>Find my code here on my GitHub!</p>
          <h1><a href="https://github.com/KaiNahuina"><ion-icon name="logo-github"></ion-icon></a></h1>
        </div>
      </div>

    </div>
  )
}

export default Projects