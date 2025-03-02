import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext()

export const ProjectProvider = ({children}) => {
    const apiUri = 'https://localhost:7270/api/projects'

    const defaultProjectValues = { 
        id: 0, 
        projectName: '', 
        description: '', 
        startDate: '', 
        endDate: '', 
        status: {}, 
        customer: {}, 
        projectManager: {}, 
        service: {}, 
        projectType: {} 
    }
    
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState(defaultProjectValues)

    const getProjects = async () => {
        const res = await fetch(`${apiUri}`)
        const data = await res.json()
        
        setProjects(data)
    }

    const getProject = async (id) => {
        try {
            const res = await fetch(`${apiUri}/${id}`)
            if (!res.ok) throw new Error("Failed to fetch project")

            const data = await res.json()
            setProject(data)
        } catch (error) {
            console.error("Error fetching project:", error)
            setProject(defaultProjectValues)
        }
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