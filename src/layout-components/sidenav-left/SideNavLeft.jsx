import { useContext, useEffect, useState } from 'react'
import { Navbar, Button } from '../../components'
import { AppContext } from '../../AppProvider'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoRegular from '../../assets/taskmanager-logo-original.png'
import './SideNavLeft.css'

// Icons
const addIcon = <FontAwesomeIcon icon={ faPlus }></FontAwesomeIcon>

export const SideNavLeft = () => {
  const { handleModalVisible } = useContext(AppContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
 
  return (
    <div className="sidenav-left is-flex">
      <div className="nav-top">
        <div className="brand is-flex">
          <img src={ LogoRegular } className="brand-logo" alt="TaskManager Logo"/>
          <h3 className="brand-name">TaskManager</h3>
        </div>
        <Navbar />
      </div>
      <div className="nav-bottom">
        <Button 
          customClass="add-task-btn" 
          customFunction={ handleModalVisible }
          text={windowWidth >= 1070 ? 'Add new task' : addIcon} />
      </div>
    </div>
  )
}
