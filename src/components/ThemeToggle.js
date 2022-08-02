import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


// class ThemeToggle extends Component {
//  static contextType = ThemeContext
//  render() { 
//   const { toggleTheme } = this.context
//   return (
//    <button onClick={toggleTheme}>Toggle the Theme</button>
//   );
//  }
// }
 
// export default ThemeToggle;

const ThemeToggle = () => {
 const { toggleTheme } = useContext(ThemeContext)
 return (
  <button onClick={toggleTheme} className='btn'>Toggle the Theme</button>  
 );
}
 
export default ThemeToggle;