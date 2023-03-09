import { useContext } from 'react';
import { AuthContext } from '../../auth/provider'
import { useNavigate } from 'react-router-dom';
import { Button } from '../button/Button';
import { TasksStats } from '../task-stats/TasksStats'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import './UserMenu.css'

// Icons
const logoutIcon = <FontAwesomeIcon icon={ faArrowRightToBracket } />
const notificationIcon = <FontAwesomeIcon icon={ faBell } />
const settingsIcon = <FontAwesomeIcon icon={ faGear } />

export const UserMenu = ({ menuVisible }) => {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/', {
      replace: true
    })

    logout()
  }

  return (
    <div className={`user-menu ${menuVisible ? 'menu-active' : ''}`}>
      <div className="user">
        <p className="lead">Signed in as</p>
        <h3 className="username">{ user?.name }</h3>
      </div>
      <TasksStats />
      <div className="menu-controls is-flex">
        <p className="menu-icon">{ notificationIcon } Notifications</p>
        <p className="menu-icon">{ settingsIcon } Settings</p>
        <Button 
          customFunction={ onLogout } 
          customClass="logout-btn" 
          text={<>{ logoutIcon } Logout</>} 
        />
      </div>
    </div>
  )
}
