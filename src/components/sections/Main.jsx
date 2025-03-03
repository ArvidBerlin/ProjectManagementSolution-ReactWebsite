import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Projects from '../../pages/Projects'
import Project from '../../pages/Project'
import CreateProject from '../../pages/CreateProject'
import UpdateProject from '../../pages/UpdateProject'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<Project />} />
      <Route path="/projects/create" element={<CreateProject />} />
      <Route path="/projects/update/:id" element={<UpdateProject />} />
    </Routes>
  )
}

export default Main