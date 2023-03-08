import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './AppProvider'
import TaskManagerApp from './TaskManagerApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <TaskManagerApp />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
