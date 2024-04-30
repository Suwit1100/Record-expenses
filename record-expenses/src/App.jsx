import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Title from './components/Title';
import Summaryexpensess from './components/Summaryexpenses';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mb-5">
        <Title></Title>
        
        <Summaryexpensess></Summaryexpensess>
      </div>
    </>
  )
}

export default App
