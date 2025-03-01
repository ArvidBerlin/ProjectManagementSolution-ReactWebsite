import React from 'react'
import SectionHeader from '../components/elements/SectionHeader'
import UpdateProjectForm from '../components/elements/UpdateProjectForm'

const UpdateProject = () => {
  return (
    <main>
        <div className='container'>
        <SectionHeader title="PROJECT - UPDATE" />
        <UpdateProjectForm />
        </div>
    </main>
  )
}

export default UpdateProject