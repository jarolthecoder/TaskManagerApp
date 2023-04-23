import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom';

export const useIndicator = (navLinks) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const sidebarRef = useRef();
  const navListRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  const indicatorStyle = {
    transformY: `translateY(${activeIndex * stepHeight}px)`,
    transformX: `translateX(${activeIndex * stepWidth}px)`
  }

  const navListClass = windowWidth <= 700 ? 'nav-list-x' : 'nav-list-y';

 const handleResizeStyle = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeStyle);
    return () => {
      window.removeEventListener('resize', handleResizeStyle);
    };
  }, []);

useEffect(() => {
  const sidebarLink = navListRef.current.querySelector('.nav-link');
  setStepWidth(sidebarLink.clientWidth);
  setStepHeight(sidebarLink.clientHeight);
}, []);


  useEffect(() => {
    const currentPath = window.location.pathname.split('dashboard/')[1];
    const activeLink = navLinks.findIndex(link => link.step === currentPath);
    setActiveIndex(currentPath.length === 0 ? 0 : activeLink);
  }, [location])

  
useEffect(() => {
  const indicatorEl = indicatorRef.current;
  if (indicatorEl) {
    const sidebarLink = sidebarRef.current.querySelector('.nav-link');
    indicatorEl.style.width = `${sidebarLink.clientWidth}px`
    indicatorEl.style.height = `${sidebarLink.clientHeight}px`
    setStepWidth(sidebarLink.clientWidth);
    setStepHeight(sidebarLink.clientHeight);
  }
}, [windowWidth]);
  

  return {
    sidebarRef,
    navListRef,
    navListClass,
    indicatorRef,
    indicatorStyle,
    windowWidth,
    activeIndex
  }
}
