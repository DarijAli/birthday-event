import React, { createContext, useContext, useState } from "react"

const FormDataContext = createContext()

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({})

  const setFormDataValues = (values) => {
    setFormData((prev) => ({
      ...prev,
      values,
    }))
  }
  return (
    <FormDataContext.Provider value={{ formData, setFormDataValues }}>
      {children}
    </FormDataContext.Provider>
  )
}

export const useFormData = () => useContext(FormDataContext)
