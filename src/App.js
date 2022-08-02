import React, { useEffect, useState } from 'react'
import Wordle from './components/Wordle'
import NavBar from './components/NavBar'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json=>{
      const randomSln = json[Math.floor(Math.random() * json.length)]
      setSolution(randomSln.word)
    })
  },[setSolution])


  return (
    <ThemeContextProvider>
      <div className="App" align='center'>
        <NavBar/> 
        {solution && <Wordle solution={solution} />}  
        {/* <ThemeToggle/>       */}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
