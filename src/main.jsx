import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './AppProvider'
import TaskManagerApp from './TaskManagerApp'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <AppProvider>
          <TaskManagerApp />
        </AppProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
