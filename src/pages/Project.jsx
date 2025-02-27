import React, { useContext, useEffect } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'
import { useParams } from 'react-router-dom'
import SectionHeader from '../components/elements/SectionHeader'

const Project = () => {
    const { id } = useParams()
    const {project, getProject} = useContext(ProjectContext)

    useEffect(() => {
        getProject(id)
    }, [id])

  return (
    <main id='project'>
        <div className='container'>
            <SectionHeader title={`PROJECT ${project.id} - ${project.projectName}`} />
        </div>
    </main>
  )
}

export default Project