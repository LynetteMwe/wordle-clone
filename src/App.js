import React, { useEffect, useState } from 'react'
import Wordle from './components/Wordle'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'


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
    <Container className="App"
      align='center'
    >
      <Typography
        variant='h4'
        color='textsecondary'        
        gutterBottom
        >
        Wordle
      </Typography>
      
      {solution && <Wordle solution={solution} />}
    </Container>
  );
}

export default App;
