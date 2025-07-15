import React from 'react'
import Services from './pages/Services'
import Details from './pages/Details'
import Features from './pages/Features'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router'
import AppLayout from './layout/Applayout'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home/>} />
        <Route path='services' element={<Services />} />
        <Route path='details' element={<Details />} />
        <Route path='features' element={<Features />} />
        <Route path='projects' element={<Projects />} />
        <Route path='team' element={<Team />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}
