import React, { useState } from 'react'
import { createContext } from "react";

const CommonContext = createContext();

export const DataProvider = ({ children }) => {
    const [companyData, setCompanyData] = useState({ company_name: "", company_name_toggle: true })
    const [whatsappNumber, setwhatsappNumber] = useState({ whatsapp_number: "", whatsapp_number_toggle: true })
    const [businessAddress, setBusinessAddress] = useState({ business_address: "", business_address_toggle: true })
    const [website, setwebsite] = useState({ website: "", website_toggle: true });
    const [saveData,setSaveData] = useState(false)

    return(
        <CommonContext.Provider 
            value={{
                companyData, setCompanyData,
                whatsappNumber, setwhatsappNumber,
                businessAddress, setBusinessAddress,
                website, setwebsite,
                saveData,setSaveData
            }}
        >
            {children}
        </CommonContext.Provider>
    )
}

export default CommonContext