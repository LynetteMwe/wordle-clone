import React, {Component} from 'react'
// import { AppBar } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

class NavBar extends Component {
 static contextType = ThemeContext

 render() { 
  const {isLightTheme, light, dark} = this.context
  const theme = isLightTheme ? light : dark
  return (
   <nav style = {{background:theme.ui, color:theme.syntax, padding:'5px'}}>    
    <h4>Wordle</h4> 
    <ThemeToggle/>

              
   </nav>
  );
 }
}
 
export default NavBar;
// const NavBar = () => {
//  const {isLightTheme, light, dark} = useContext(ThemeContext)
//  const theme = isLightTheme ? light: dark
//  return (
//   <nav style={{background:theme.ui, color:theme.syntax}}>
//    <h4>Wordle</h4>
//   </nav>
//  );
// }
 
// export default NavBar;

// export default function NavBar() {
//  return(
//   <ThemeContext.Consumer>{(context)=>{
//    const {isLightTheme, light, dark } = this.context
//    const theme = isLightTheme ? light : dark
   
//    return(
//     <AppBar color='transparent'>
//      <h4>Wordle</h4>
//    </AppBar>
//    )
   
//   }}</ThemeContext.Consumer>
  
  

//  )
// }

