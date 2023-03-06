import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import '../styles/_components/TaskDisplayer.css'
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { Dashboard } from "./task-routes/Dashboard"
import { Todo } from "./task-routes/Todo"
import { Important } from "./task-routes/Important"
import { Completed } from "./task-routes/Completed"
import { useContext, useEffect, useState } from "react"
import { Button } from "../components/Button"
import { AppContext } from "../AppProvider"



// Icons
const addIcon = <FontAwesomeIcon icon={ faPlus }></FontAwesomeIcon>

export const TaskDisplayer = () => {

  const { tasks, handleModalVisible } = useContext(AppContext);

  const [pageTitle, setPageTitle] = useState('All tasks');

  const titleMap = [
    {path: '/', title:'All tasks'},
    {path: '/tasks-todo', title:'Tasks to do'},
    {path: '/important', title:'Important tasks'},
    {path: '/completed', title:'Tasks completed'},
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

        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </div>
  )
}
