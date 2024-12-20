import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase =() =>{
    setCount(count + 1);
  }
  const decrease =() =>{
    if(count > 0)
    setCount(count - 1);
  }

  return (
    <>
      
      <h1>Welcome to my project</h1>
      <h2>counter value: {count}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      
    </>
  )
}

export default App
