import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// props = read-only properties that are shared betweeen components.
//         A parent component can send data to a child component.
//         <Component key=value />

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    
      <Card />
      <Button />
      <Student name="Austin" age={30} isStudent={true}/>
      <Student name="Christie" age={23} isStudent={false}/>
      <Student name="John" age={50} isStudent={false}/>
      <Student name="Jane" age={25} isStudent={true}/>
      <Student name="Larry"/>
    </>
/*  <>
    <header>
      <h1>My website</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <hr></hr>
    </header>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */
  );
}

export default App;
