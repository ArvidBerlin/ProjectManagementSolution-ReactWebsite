import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext()

export const ProjectProvider = ({children}) => {
    const apiUri = 'https://localhost:7270/api/projects'
    const defaultProjectValues = { id: 0, projectName: '', description: '', startDate: '', endDate: '', status: {}, customer: {}, projectManager: {}, service: {}, projectType: {} }
    
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState({defaultProjectValues})

    const getProjects = async () => {
        const res = await fetch(`${apiUri}`)
        const data = await res.json()
        
        setProjects(data)
    }

    const getProject = async (id) => {
        const res = await fetch(`${apiUri}/${id}`)
        const data = await res.json()
        setProject(data)
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <ProjectContext.Provider value={{project, projects, getProjects, getProject}}>
            {children}
        </ProjectContext.Provider>
    )
}