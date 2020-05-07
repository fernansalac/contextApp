import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle2 = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return ( 
        <button onClick={toggleTheme}>Toggle the theme</button>
     );
}
 
export default ThemeToggle2;