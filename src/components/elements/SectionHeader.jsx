import React from 'react'
import { Link } from 'react-router-dom'

const SectionHeader = ({title}) => {
  return (
    <div className='section-header'>
        <h1>{title}</h1>
        <div className='nav-buttons'>
            <Link to="/projects/create" className='btn btn-gray'>Create Project</Link>
            <Link to="/projects" className='btn btn-yellow'>Show Projects</Link>
        </div>
    </div>
  )
}

export default SectionHeader