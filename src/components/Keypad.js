import React, { useState, useEffect } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Keypad({usedKeys}) {
 const [letters, setLetters] = useState(null)

 useEffect(()=>{
  fetch('http://localhost:3001/letters')
  .then(res=>res.json())
  .then(json=>{
   setLetters(json)
  })
 },[])
  return (
    <ThemeContext.Consumer>{(themeContext=>{
      const {isLightTheme, light, dark} = themeContext
      const theme = isLightTheme ? light : dark
      return(
        <div className='keypad' style={{background:theme.ui}}>
          {letters && letters.map((l)=>{
            const color = usedKeys[l.key]
            return(
            <div key={l.key} className={color}>{l.key}</div>
            )
          })}      
    </div>
        
      )
    })}

    </ThemeContext.Consumer>
    // <div className='keypad'>
    //  {letters && letters.map((l)=>{
    //   const color = usedKeys[l.key]
    //   return(
    //    <div key={l.key} className={color}>{l.key}</div>
    //   )
    //  })}      
    // </div>
  )
}

// class Keypad extends Component {
//   static ContextType = ThemeContext  
//   render() { 
//     const {isLightTheme, light, dark} = this.context
//     const theme = isLightTheme ? light : dark
//     return (
//       <div className='keypad'>
//      {letters && letters.map((l)=>{
//       const color = usedKeys[l.key]
//       return(
//        <div key={l.key} className={color}>{l.key}</div>
//       )
//      })}      
//     </div>
//     );
//   }
// }
 
// export default Keypad;