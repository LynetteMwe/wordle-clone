import React from 'react'

export default function Row({guess, currentGuess}) {
  if(guess){
    return (
      <div className='row past'>
        {guess.map((l,i)=>(
          <div key={i} className={l.color}>{l.key}</div>
        ))}

      </div>
    )  
  }
  if(currentGuess){
    //split currentGuess which is a string to an array of letters so as to fit them in the tiles
    let letters = currentGuess.split('')

    return(
      <div className='row current'>
        {/* squares with the input letters of current guess */}
        {letters.map((letter,i)=>(
          <div key={i} className = 'filled'>{letter}</div>
        ))}
        {/* squares with the empty squares.  */}
        {[...Array(5 - letters.length)].map((_,i)=>(
          <div key={i}></div>
        ))}
      </div>
    )
  }
  //if there's no currentGuess and no past guesses, empty divs/squares.
  return (
   <div className='row'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  )
}
