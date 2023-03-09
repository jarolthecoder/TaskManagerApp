import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../auth/provider/AuthProvider'
import { ThemeButton } from '../theme-button/ThemeButton'
import { Button } from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import UserImg from '../../../assets/user-template.png'
import './UserPanel.css'


// Icons
const logoutIcon = <FontAwesomeIcon icon={ faArrowRightToBracket } />
const notificationIcon = <FontAwesomeIcon icon={ faBell } />
const settingsIcon = <FontAwesomeIcon icon={ faGear } />

export const UserPanel = ({ openMenu, menuVisible }) => {
  
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/', {
      replace: true
    })

    logout()
  }

  
  return (
    <>
      <div className="user-controls is-flex">
        <ThemeButton />
        <div className="controls-right is-flex">
          <p>{ notificationIcon }</p>
          <p>{ settingsIcon }</p>
          <Button customFunction={ onLogout } customClass="logout-btn" text={ logoutIcon } />
        </div>
      </div>
      <div className="user is-flex">
        <div className="user-info">
          <h4 className="user-name">{ user?.name }</h4>
          <p className="user-title">Super admin</p>
        </div>
        <figure className="img-wrapper">
           <img 
            src={ UserImg } 
            className={`user-img ${menuVisible ? 'menu-active' : ''}`} 
            onClick={ openMenu }
            alt="User Profile Image" 
            width="50" height="auto"
          />
        </figure>
      </div>
    </>
  )
}
