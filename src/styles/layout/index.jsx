import React from "react"
import { Container } from "@mui/system"
import { containerStyles } from "./styles"

const Layout = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={containerStyles}>
      {children}
    </Container>
  )
}

export default Layout
