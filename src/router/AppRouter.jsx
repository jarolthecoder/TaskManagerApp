import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage } from './pages'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
    <Routes> 
      <Route path="login" element={ <LoginPage /> }/>
      <Route path="/*" element={ 
        <PrivateRoute>
          <HomePage /> 
        </PrivateRoute>
      } />
    </Routes>
  )
}
