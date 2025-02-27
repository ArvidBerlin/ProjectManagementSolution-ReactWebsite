import { createContext, useEffect, useState } from "react";

export const ProjectManagerContext = createContext()

export const ProjectManagerProvider = ({children}) => {
    const apiUri = 'https://localhost:7270/api/projectmanagers'
    
    const [projectManagers, setProjectManagers] = useState([])

    const getProjectManagers = async () => {
        const res = await fetch(`${apiUri}`)
        const data = await res.json()
        setProjectManagers(data)
    }

    useEffect(() => {
        getProjectManagers()
    }, [])

    return (
        <ProjectManagerContext.Provider value={{projectManagers, getProjectManagers}}>
            {children}
        </ProjectManagerContext.Provider>
    )
}