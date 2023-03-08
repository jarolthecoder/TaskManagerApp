import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppContext } from './AppProvider'
import { HomePage, LoginPage } from './pages-components/'
import { TaskModal } from './tasks-components/task-modal/TaskModal'


const TaskManagerApp = () => {
  const { theme, user } = useContext(AppContext);
  
  return (
    <main className="main-container" data-theme={ theme }>
      <Routes>
        <Route
          exact
          path="/"
          element={
            !user.isLoggedIn 
            ? ( <LoginPage /> ) 
            : ( <Navigate replace to={"/dashboard/"} /> )
          }
        />
        <Route path="/dashboard/*" element={ <HomePage />} />
      </Routes>
      <TaskModal />
    </main>
  )
}

export default TaskManagerApp
