import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './AppProvider'
import './index.css'
import TaskManagerApp from './TaskManagerApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <TaskManagerApp />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
