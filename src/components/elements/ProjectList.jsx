import React, { useContext, useEffect } from 'react'
import { ProjectContext } from '../../contexts/ProjectContext'
import ProjectListItem from './ProjectListItem'

const ProjectList = () => {
    const {projects, getProjects} = useContext(ProjectContext)

    useEffect(() => {
      getProjects()
    }, [])

  return (
    <table className='project-list'>
      <thead>
        <tr>
          <th className='projectnumber'>PROJECT NUMBER</th>
          <th className='projectname'>PROJECT NAME</th>
          <th className='description'>DESCRIPTION</th>
          <th className='startdate'>START DATE</th>
          <th className='enddate'>END DATE</th>
          <th className='status'>STATUS</th>
          <th className='projectmanager'>PROJECT MANAGER</th>
        </tr>
      </thead>
      <tbody>
        {
          projects.map(project => (
            <ProjectListItem key={project.id} project={project} />
          ))
        }
      </tbody>
    </table>
  )
}

export default ProjectList