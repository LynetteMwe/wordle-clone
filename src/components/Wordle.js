import { ThemeContext } from '../contexts/ThemeContext'
import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({solution}) {
 const {currentGuess, handleKeyUp, guesses, isCorrect, usedKeys, turn } = useWordle(solution)
 
 useEffect(()=>{
  window.addEventListener('keyup', handleKeyUp)

  return () => window.removeEventListener('keyup', handleKeyUp)

 }, [handleKeyUp])

 useEffect(()=>{
  console.log(guesses, turn, isCorrect)

 },[guesses, turn, isCorrect])


  return (
    // <Box mt={10} >
    <ThemeContext.Consumer>{(themeContext)=>{
      const {isLightTheme, light, dark} = themeContext
      const theme = isLightTheme ? light : dark
      return(
        <Typography style = {{color:theme.style, background: theme.bg}}>      
          {/* <div> Solution = {solution}</div>
          <div> Current guess = {currentGuess}</div> */}
          <Grid currentGuess = {currentGuess} guesses = {guesses} turn = {turn}/>
          <Keypad usedKeys={usedKeys}/>
        </Typography>
    
      )
    }}</ThemeContext.Consumer>
      
  )  
}

// class Wordle extends Component {
//   const {currentGuess, handleKeyUp } = useWordle(solution)
//   useEffect(()=>{
//   window.addEventListener('keyup', handleKeyUp)


//   return () => window.removeEventListener('keyup', handleKeyUp)

//  }, [handleKeyUp])
  
//   render() { 
//     return ();
//   }
// }
 
// export default Wordle;

