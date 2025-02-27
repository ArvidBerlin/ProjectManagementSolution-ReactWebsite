import React, { useContext, useState } from 'react'
import { StatusContext } from '../../contexts/StatusContext'
import { useNavigate } from 'react-router-dom'

const ProjectDetails = () => {
    const navigate = useNavigate()
    const {statuses} = useContext(StatusContext)
    const [formData, setFormData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.status === 201)
            navigate('/products')
    }

  return (
    <form onSubmit={handleSubmit}>

        <select>
            {
                statuses.map(option => (
                    <option key={option.id} value={option.id}>{option.statusName}</option>
                ))
            }
        </select>

    </form>
  )
}

export default ProjectDetails