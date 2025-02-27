import React from 'react'
import SectionHeader from '../components/elements/SectionHeader'
import ProjectDetails from '../components/sections/ProjectDetails'

const CreateProject = () => {
  return (
    <main id='project'>
        <div className='container'>
            <SectionHeader title="PROJECT - CREATE NEW" />
            <ProjectDetails />
        </div>
    </main>
  )
}

export default CreateProject