import { useContext } from 'react'
import { AppContext } from '../../../AppProvider'
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ThemeButton.css'


// Icons
const moonIcon = <FontAwesomeIcon icon={ faMoon } />
const sunIcon = <FontAwesomeIcon icon={ faSun } />

export const ThemeButton = () => {
  const { theme, handleSwitchTheme } = useContext(AppContext);
  
  return (
    <div 
      className={`toggle-theme-btn is-flex ${theme === "dark" ? "dark-active" : ''}`}
      onClick={ handleSwitchTheme }
    >
      <span>{ sunIcon }</span>
      <div className="toggle-theme-btn-circle"></div>
      <span>{ moonIcon }</span>
    </div>
  )
}
