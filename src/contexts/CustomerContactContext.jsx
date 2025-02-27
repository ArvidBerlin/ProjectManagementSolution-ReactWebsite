import { createContext, useEffect, useState } from "react";

export const CustomerContactContext = createContext()

export const CustomerContactProvider = ({children}) => {
    const apiUri = 'https://localhost:7270/api/customercontacts'
    
    const [customerContacts, setCustomerContacts] = useState([])

    const getCustomerContacts = async () => {
        const res = await fetch(`${apiUri}`)
        const data = await res.json()
        setCustomerContacts(data)
    }

    useEffect(() => {
        getCustomerContacts()
    }, [])

    return (
        <CustomerContactContext.Provider value={{customerContacts, getCustomerContacts}}>
            {children}
        </CustomerContactContext.Provider>
    )
}