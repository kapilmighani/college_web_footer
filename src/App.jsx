import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="maindiv">
      <div class="firstdiv">
        <h2>Laxmi Devi Institute of Engineering & Technology</h2>
        <br />
        <br />
        <span className='space'>Alwar-Tijara-Delhi Highway <br />
             Chikani, Alwar, Rajasthan <br /> 
             India –  301028
        </span>
        <br />
        <br />
        <span>
          +91- 7073477274
        </span>
        <br />
        <br />
        <a>director@lietalwar.org</a>
      </div>
      <div class="seconddiv">
        <h2>Quick Links</h2>
        <br />
        <div className='h1'></div>
        <br />
        <br />
        <a href="">About Us</a>
        <br />
        <br />
        <a href="">Admission</a>
        <br />
        <br />
        <a href="">Apply @ LIET</a>
        <br />
        <br />
        <a href="">Board of Management</a>
        <br />
        <br />
        <a href="">Grievance Redressal</a>
      </div>
      <div class="thirddiv">
        <h2>Courses</h2>
        <br />
        <div className='h1'></div>
        <br />
        <br />
        <a href="">B.tech</a>
        <br />
        <br />
        <a href="">M.tech</a>
        <br />
        <br />
        <a href="">MBA</a>
        <br />
        <br />
        <a href="">Polytechnic</a>
      </div>
      <div class="fourdiv">
        <h2>External Links</h2>
        <br />
        <div className='h1'></div>
        <br />
        <br />
        <a href="">AICTE</a>
        <br />
        <br />
        <a href="">BTU</a>
        <br />
        <br />
        <a href="">BTER</a>
        <br />
        <a href="">DELNET</a>
      </div>

    </div>
    </>
  )
}

export default App
