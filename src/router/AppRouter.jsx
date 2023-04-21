import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, LandingPage } from './pages'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  return (
    <Routes> 
      <Route path="/*" element={ <LandingPage /> }/>
      <Route path="/dashboard/*" element={ 
        <PrivateRoute>
          <HomePage /> 
        </PrivateRoute>
      } />
    </Routes>
  )
}
