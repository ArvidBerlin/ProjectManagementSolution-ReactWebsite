import React from 'react'
import SectionHeader from '../components/elements/SectionHeader'
import CreateProjectForm from '../components/elements/CreateProjectForm'

const CreateProject = () => {
  return (
    <main id='project'>
        <div className='container'>
            <SectionHeader title="PROJECT - CREATE NEW" />
            <CreateProjectForm />
        </div>
    </main>
  )
}

export default CreateProject