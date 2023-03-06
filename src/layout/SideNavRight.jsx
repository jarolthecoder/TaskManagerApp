import '../styles/_layout/SideNavRight.css'
import LogoRegular from '../assets/taskmanager-logo-original.png'
import { UserPanel } from "../components/UserPanel";
import { TasksStats } from "../components/TasksStats";
import { useEffect, useState } from "react";

export const SideNavRight = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

 useEffect(() => {
    const handleWindowScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  useEffect(() => {
    const nav = document.querySelector('.sidenav-right');
    if (scrollPosition > 1 && window.innerWidth <= 700) {
      nav.style.borderWidth = '1px';
    } else {
      nav.style.borderWidth = '0';
    }
  }, [scrollPosition]);

  return (
    <div className="sidenav-right is-flex">
      <div className="nav-top">
        <UserPanel />
        <TasksStats />
      </div>
      <div className="nav-bottom">
        <div className="brand is-flex">
          <img src={ LogoRegular } className="brand-logo" alt="TaskManager Logo"/>
          <h3 className="brand-name">TaskManager</h3>
        </div>
      </div>
    </div>
  )
}
