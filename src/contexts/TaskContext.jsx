import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const apiUri = 'https://localhost:7270/api/tasks'
    
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        const res = await fetch(`${apiUri}`)
        const data = await res.json()
        setTasks(data)
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <TaskContext.Provider value={{tasks, getTasks}}>
            {children}
        </TaskContext.Provider>
    )
}