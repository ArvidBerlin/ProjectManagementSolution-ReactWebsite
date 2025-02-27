import { createContext, useEffect, useState } from "react";

export const PostalCodeContext = createContext()

export const PostalCodeProvider = ({children}) => {
    const apiUri = 'https://localhost:7270/api/postalcodes'
    
    const [postalCodes, setPostalCodes] = useState([])

    const getPostalCodes = async () => {
        const res = await fetch(`${apiUri}`)
        const data = await res.json()
        setPostalCodes(data)
    }

    useEffect(() => {
        getPostalCodes()
    }, [])

    return (
        <PostalCodeContext.Provider value={{postalCodes, getPostalCodes}}>
            {children}
        </PostalCodeContext.Provider>
    )
}