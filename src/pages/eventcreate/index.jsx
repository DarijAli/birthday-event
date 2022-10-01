import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"
import EventForm from "./components/EventForm"
import { headingStyles } from "./styles"

const CreateEvent = () => {
  return (
    <>
      <Stack textAlign="center" paddingBottom={5}>
        <Typography variant="h3" sx={headingStyles}>
          Event Details
        </Typography>
      </Stack>
      <EventForm />
    </>
  )
}

export default CreateEvent
