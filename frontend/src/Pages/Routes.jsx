import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { UserDetail } from './UserDetail'

export const Router = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userdetails' element={<UserDetail/>}/> 
    </Routes>


    </div>
  )
}
