import { NavLink } from 'react-router-dom'
import { useIndicator } from '../../../hooks/useIndicator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faHomeAlt, faListDots, faStar} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'


export const Navbar = () => {

  const navLinks = [
    {name:'Dashboard', icon: faHomeAlt, url:'/', step:'/'},
    {name:'Tasks to do', icon: faListDots, url:'/tasks-todo', step:'tasks-todo'},
    {name:'Important', icon: faStar, url:'/important', step:'important'},
    {name:'Completed', icon: faCircleCheck, url:'/completed', step:'completed'}
  ]

  const {
      indicatorStyle, 
      windowWidth, 
      sidebarRef, 
      indicatorRef, 
      activeIndex, 
      navListClass, 
      navListRef
    } = useIndicator(navLinks);

  return (
    <nav className="navbar" ref={ sidebarRef }>
      <ul className={`nav-list is-flex ${navListClass}`} ref={navListRef}>
        <li
          className="indicator" 
          ref={ indicatorRef }
          style={{ transform: windowWidth <= 700 ? indicatorStyle.transformX : indicatorStyle.transformY}}
        >
        </li>
        {
          navLinks.map((link, index) => {
            return (
              <NavLink 
                to={ link.url } 
                key={ index }
                className={`nav-link is-flex ${activeIndex === index ? "link-active" : ""}`}>
                <FontAwesomeIcon icon={ link.icon } />
                <span>{ link.name }</span>
              </NavLink>
            )
          })
        }
      </ul>
    </nav>
  )
}
