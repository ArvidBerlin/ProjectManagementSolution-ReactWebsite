import { createContext, useEffect, useState } from "react";

export const TaskAssignmentContext = createContext()

export const TaskAssignmentProvider = ({children}) => {
    const apiUri = 'https://localhost:7270/api/taskassignments'
    
    const [taskAssignments, setTaskAssignments] = useState([])

    const getTaskAssignments = async () => {
        const res = await fetch(`${apiUri}`)
        const data = await res.json()
        setTaskAssignments(data)
    }

    useEffect(() => {
        getTaskAssignments()
    }, [])

    return (
        <TaskAssignmentContext.Provider value={{taskAssignments, getTaskAssignments}}>
            {children}
        </TaskAssignmentContext.Provider>
    )
}