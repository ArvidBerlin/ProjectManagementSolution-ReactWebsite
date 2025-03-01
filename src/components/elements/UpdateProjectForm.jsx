import React, { useEffect, useState } from 'react'

const UpdateProjectForm = () => {
        const [projectId] = useState('0')
        const [projectName, setProjectName] = useState('')
        const [description, setDescription] = useState('')
        const [startDate, setStartDate] = useState(new Date())
        const [endDate, setEndDate] = useState(new Date())
        const [statuses, setStatuses] = useState([])
        const [customers, setCustomers] = useState([])
        const [projectManagers, setProjectManagers] = useState([])
        const [services, setServices] = useState([])
        const [projectTypes, setProjectTypes] = useState([])
        const [statusId, setStatusId] = useState('0')
        const [customerId, setCustomerId] = useState('0')
        const [projectManagerId, setProjectManagerId] = useState('0')
        const [serviceId, setServiceId] = useState('0')
        const [projectTypeId, setProjectTypeId] = useState('0');
    
        const getStatuses = async () => {
            const res = await fetch('https://localhost:7270/api/statuses')
            const data = await res.json()
    
            setStatuses(data)
        }
        
        const getCustomers = async () => {
            const res = await fetch('https://localhost:7270/api/customers')
            const data = await res.json()
    
            setCustomers(data)
        }
    
        const getProjectManagers = async () => {
            const res = await fetch('https://localhost:7270/api/projectmanagers')
            const data = await res.json()
    
            setProjectManagers(data)
        }
    
        const getServices = async () => {
            const res = await fetch('https://localhost:7270/api/services')
            const data = await res.json()
    
            setServices(data)
        }
    
        const getProjectTypes = async () => {
            const res = await fetch('https://localhost:7270/api/projecttypes')
            const data = await res.json()
    
            setProjectTypes(data)
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault()
    
            const formData = {
                id: projectId,
                projectName,
                description,
                startDate,
                endDate,
                statusId: parseInt(statusId),
                customerId: parseInt(customerId),
                projectManagerId: parseInt(projectManagerId),
                serviceId: parseInt(serviceId),
                projectTypeId: parseInt(projectTypeId)
            }
    
            const res = await fetch(`https://localhost:7270/api/projects/${projectId}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            console.log(res)
        }
    
        useEffect(() => {
            getStatuses()
        },[] )
        
        useEffect(() => {
            getCustomers()
        }, [])
    
        useEffect(() => {
            getProjectManagers()
        }, [])
    
        useEffect(() => {
            getServices()
        },[])
    
        useEffect(() => {
            getProjectTypes()
        },[] )


  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>

            <div className='form-group'>
                <label htmlFor="projectName">Project Name: </label>
                <input type="text" id='projectName' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
            </div>

            <div className='form-group'>
                <label htmlFor="description">Description: </label>
                <textarea name='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div className='form-group'>
                <label htmlFor="startdate">Start Date: </label>
                <input type="date" id='startdate' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>

            <div className='form-group'>
                <label htmlFor="enddate">End Date: </label>
                <input type="date" id='enddate' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>

            <div className='form-group'>
                <label htmlFor="statuses">Status: </label>
                <select name='statuses' id='statuses' defaultValue={statusId} onChange={(e) => setStatusId(e.target.value)}>
                  <option disabled hidden value="0">Choose Project Status</option>
                  {
                    statuses.map(status => (<option key={status.id} value={status.id}>{status.statusName}</option>))
                  }
                </select>
            </div>

            <div className='form-group'>
                <label htmlFor="customers">Customer: </label>
                <select name='customers' id='customers' defaultValue={customerId} onChange={(e) => setCustomerId(e.target.value)}>
                  <option disabled hidden value="0">Choose Customer</option>
                  {
                    customers.map(customer => (<option key={customer.id} value={customer.id}>{customer.customerName}</option>))
                  }
                </select>
            </div>

            <div className='form-group'>
                <label htmlFor="projectmanager">Project Manager: </label>
                <select name='projectmanager' id='projectmanager' defaultValue={projectManagerId} onChange={(e) => setProjectManagerId(e.target.value)}>
                  <option disabled hidden value="0">Choose Project Manager</option>
                  {
                    projectManagers.map(projectManager => (<option key={projectManager.id} value={projectManager.id}>{projectManager.employee.displayName}</option>))
                  }
                </select>
            </div>

            <div className='form-group'>
                <label htmlFor="service">Service: </label>
                <select name='service' id='service' defaultValue={serviceId} onChange={(e) => setServiceId(e.target.value)}>
                  <option disabled hidden value="0">Choose Service</option>
                  {
                    services.map(service => (<option key={service.id} value={service.id}>{service.serviceName}</option>))
                  }
                </select>
            </div>

            <div className='form-group'>
                <label htmlFor="projecttype">Project Type: </label>
                <select name='projecttype' id='projecttype' defaultValue={projectTypeId} onChange={(e) => setProjectTypeId(e.target.value)}>
                  <option disabled hidden value="0">Choose Project Type</option>
                  {
                    projectTypes.map(projectType => (<option key={projectType.id} value={projectType.id}>{projectType.typeName}</option>))
                  }
                </select>
            </div>

            <button type='submit' className='btn btn-gray'>Update Project</button>

        </form>
    </div>
  )
}

export default UpdateProjectForm