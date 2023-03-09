import { useContext } from 'react'
import { AppContext } from './AppProvider'
import { AuthProvider } from './auth/provider'
import { TaskModal } from './tasks'
import { AppRouter } from './router/AppRouter'


const TaskManagerApp = () => {
  const { theme } = useContext(AppContext);
  
  return (
    <AuthProvider>
      <main className="main-container" data-theme={ theme }>
        <AppRouter />
        <TaskModal />
      </main>
    </AuthProvider>
  )
}

export default TaskManagerApp
