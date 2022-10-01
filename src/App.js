import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import { ThemeProvider } from "@mui/material"
import { theme } from "styles/globaltheme"
import Layout from "styles/layout"

const Landing = lazy(() => import("pages/landing"))
const EventCreate = lazy(() => import("pages/eventcreate"))
const Event = lazy(() => import("pages/event"))

function App() {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route index element={<Landing />} />
              <Route path="/create" element={<EventCreate />} />
              <Route path="/event" element={<Event />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Suspense>
    </>
  )
}

export default App
