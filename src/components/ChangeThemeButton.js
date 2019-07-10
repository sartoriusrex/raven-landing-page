import React, { useState } from 'react';

const ChangeThemeButton = () => {

  const [ theme, setTheme ] = useState('light');

  const onThemeChange = () => {
    theme === 'light' ? 
    setTheme( 'dark' ) :
    setTheme( 'light' );
    console.log( theme );
  }

  return(
    <div>
      <p>Current Theme: { theme }</p>
      <button onClick={ onThemeChange }>
        light | Dark mode
      </button>
    </div>
  )
}

export default ChangeThemeButton;