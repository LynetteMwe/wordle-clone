import {useState} from 'react';

const useWordle = (solution) =>{
 const [turn, setTurn] = useState(0) //goes up every time a guess is submitted. once 6 attempts are used, GameOver
 const [currentGuess, setCurrentGuess] = useState('') //will be updated when every key is clicked, by the handleKeyUp function
 const [guesses, setGuesses] = useState([...Array(6)]) //each guess is an array
 const [history, setHistory] = useState(['hello']) //each guess is a string. Useful to check a previous guess is not resubmitted
 const [isCorrect, setIsCorrect] = useState(false)
 const [usedKeys, setUsedKeys] = useState({}) //'a':'green', 's':'orange'

 //format user's guess into an array of letter objects with color value
 //e.g. [{key:'a', color:'yellow'}]
 const formatGuess = () =>{
  let solutionArray = [...solution]
  let formattedGuess = [...currentGuess].map((l)=>{
   return {key:l, color:'grey'}
  })

  //find any green letters
  formattedGuess.forEach((l,i) => {
   if(solutionArray[i] === l.key){
    formattedGuess[i].color = 'green'
    solutionArray[i] = null
   }   
  })

  //find any yellow letters
  formattedGuess.forEach((l,i)=>{
   if(solutionArray.includes(l.key) && l.color!=='green'){
    formattedGuess[i].color = 'orange'
    solutionArray[solutionArray.indexOf(l.key)] = null
   }
  })
  return formattedGuess
 }

 //add current guess to the previous guesses(history)/ guesses state
 //update the isCorrect state if the guess is correct
 //add one to the turn state
 const addNewGuess = (formattedGuess) =>{
  if(currentGuess === solution){
   setIsCorrect(true)
   // alert('Congrats')
  }
  setGuesses((prevGuesses)=>{
   let newGuesses = [...prevGuesses]
   newGuesses[turn] = formattedGuess
   return newGuesses
  })
  setHistory((prevHistory)=>{
   return [...prevHistory, currentGuess]
  })
  setTurn((prevTurn)=>{
   return prevTurn + 1
  })
  setUsedKeys((prevUsedKeys)=>{
   let newKeys = {...prevUsedKeys}

   formattedGuess.forEach((l)=>{
    const currentColor = newKeys[l.key]

    if (l.color==='green'){
     newKeys[l.key] = 'green'
     return
    }
    if (l.color === 'orange' && currentColor !== 'green'){
     newKeys[l.key] = 'orange'
     return
    }
    if (l.color ==='grey' && currentColor !== 'green' && currentColor !== 'orange'){
     newKeys[l.key] = 'grey'
     return
    }
   })
   return newKeys

  })


  setCurrentGuess('')

 }

 //handle key up event & track current guess
 // if user presses enter, add the new guess
 const handleKeyUp = ({key}) =>{
  if(key==='Enter'){
   //add guess when turn < 5
   if (turn > 5){
    console.log('You cant key in again')
    return
   }

   //add guess when there's no duplicate in history
   if(history.includes(currentGuess)){
    console.log("You have keyed that in.")
    return
   } 

   //currentguess.length shd be 5 chars long
   if(currentGuess.length !== 5){
    console.log("Word must be 5 chars long")
    return
   }
   const formatted = formatGuess()
   addNewGuess(formatted)
  }

  if(key === 'Backspace'){
   setCurrentGuess((prev)=>{
    return prev.slice(0, -1)
   })
  }
  if (/^[A-Za-z]$/.test(key)){
   if (currentGuess.length < 5){
    //keeps track of the guess as user types
    setCurrentGuess ((prev)=>{
     return prev + key
    })
   }

  }
 }

 //return values to be returned that could be used in other hooks
 return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp}

}
export default useWordle