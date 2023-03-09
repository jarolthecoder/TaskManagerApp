import { useContext } from 'react'
import { Button } from '../button/Button'
import { TasksStats } from '../task-stats/TasksStats'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import './UserMenu.css'
import { useNavigate } from 'react-router-dom'
import { AuthContex } from '../../auth/provider'

// Icons
const logoutIcon = <FontAwesomeIcon icon={ faArrowRightFromBracket } />
const notificationIcon = <FontAwesomeIcon icon={ faBell } />
const settingsIcon = <FontAwesomeIcon icon={ faGear } />

export const UserMenu = ({ menuVisible }) => {

  const { user, logout } = useContext(AuthContex);
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/', {
      replace: true
    })

    logout()
  }


  return (
    <div className={`user-menu ${menuVisible ? 'menu-active' : ''}`}>
      <div className="menu-header">
        <p className="lead">Signed in as</p>
        <h3 className="username">{ user?.name }</h3>
      </div>
      <TasksStats />
      <div className="user-controls is-flex">
        <p className="control-icon"><span>Notifications</span> { notificationIcon } </p>
        <p  className="control-icon"><span>Settings</span> { settingsIcon } </p>
        <Button 
          customFunction={ onLogout } 
          customClass="logout-btn" 
          text={ <><span>Logout</span>{logoutIcon}</> }
        />
      </div>
    </div>
  )
}
