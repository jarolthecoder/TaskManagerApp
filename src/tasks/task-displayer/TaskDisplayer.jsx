import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppProvider'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Dashboard, Todo, Important, Completed } from '../task-routes'
import { Button } from '../../ui/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './TaskDisplayer.css'

// Icons
const addIcon = <FontAwesomeIcon icon={ faPlus }></FontAwesomeIcon>

export const TaskDisplayer = () => {

  const { tasks, handleModalVisible } = useContext(AppContext);

  const [pageTitle, setPageTitle] = useState('All tasks');

  const titleMap = [
    {path: '/dashboard/', title:'All tasks'},
    {path: '/dashboard/tasks-todo', title:'Tasks to do'},
    {path: '/dashboard/important', title:'Important tasks'},
    {path: '/dashboard/completed', title:'Tasks completed'},
  ]

  let curLoc = useLocation();
  useEffect(() => {
    const curTitle = titleMap.find(item => item.path === curLoc.pathname)
    if(curTitle && curTitle.title){
      setPageTitle(curTitle.title)
      document.title = curTitle.title
    }
  }, [curLoc])

  return (
    <div className="task-displayer">
      <div className="task-displayer-header is-flex">
        <h2 className="">{ pageTitle }</h2>
        <Button 
          customClass="add-btn" 
          customFunction={ handleModalVisible }
          text={ addIcon }/>
      </div>
      <Routes>
        <Route path="/" element={ <Dashboard tasks={ tasks } handleModalVisible={ handleModalVisible } /> } />
        <Route path="tasks-todo" element={ <Todo tasks={ tasks } handleModalVisible={ handleModalVisible } /> } />
        <Route path="important" element={ <Important tasks={ tasks } handleModalVisible={ handleModalVisible } /> } />
        <Route path="completed" element={ <Completed tasks={ tasks } /> } />
      </Routes>
    </div>
  )
}
