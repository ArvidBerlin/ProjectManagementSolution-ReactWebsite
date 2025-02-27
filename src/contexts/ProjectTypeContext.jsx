import { createContext, useEffect, useState } from "react";

export const ProjectTypeContext = createContext()

export const ProjectTypeProvider = ({children}) => {
    const apiUri = 'https://localhost:7270/api/projecttypes'
    
    const [projectTypes, setProjectTypes] = useState([])

    const getProjectTypes = async () => {
        const res = await fetch(`${apiUri}`)
        const data = await res.json()
        setProjectTypes(data)
    }

    useEffect(() => {
        getProjectTypes()
    }, [])

    return (
        <ProjectTypeContext.Provider value={{projectTypes, getProjectTypes}}>
            {children}
        </ProjectTypeContext.Provider>
    )
}