import UserImg from '../assets/user-template.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faMoon, faBell, faGear, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { AppContext } from '../AppProvider';

// Icons
const logoutIcon = <FontAwesomeIcon icon={ faArrowRightToBracket } />
const notificationIcon = <FontAwesomeIcon icon={ faBell } />
const settingsIcon = <FontAwesomeIcon icon={ faGear } />
const moonIcon = <FontAwesomeIcon icon={ faMoon } />
const sunIcon = <FontAwesomeIcon icon={ faSun } />

export const UserPanel = () => {
  const { theme, handleSwitchTheme } = useContext(AppContext)
  
  return (
    <>
      <div className="user-controls is-flex">
        <div 
          className={`toggle-theme-btn is-flex ${theme === "dark" ? "dark-active" : ''}`}
          onClick={ handleSwitchTheme }
        >
          <span>{ sunIcon }</span>
          <div className="toggle-theme-btn-circle"></div>
          <span>{ moonIcon }</span>
        </div>
        <div className="controls-right is-flex">
          <p>{ notificationIcon }</p>
          <p>{ settingsIcon }</p>
        </div>
      </div>
      <div className="user is-flex">
        <div className="user-info">
          <h4 className="user-name">Wendy Riera</h4>
          <p className="user-title">Super admin</p>
        </div>
        <img src={ UserImg } className="user-img" alt="User Profile Image" width="50" height="auto"/>
      </div>
    </>
  )
}
