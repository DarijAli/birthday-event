import { Grid, Typography } from "@mui/material"
import { useFormData } from "context/formDataContext"
import React from "react"
import BirthDayImage from "assets/images/birthday-cake.png"
import { Stack } from "@mui/system"
import CalendarImage from "assets/images/calendar.svg"
import LocationImage from "assets/images/location.svg"
import {
  contentSubtitlesTypographyStyles,
  headingTypographyStyles,
  iconContainerStyles,
  subtitleTypographyStyles,
} from "./styles"
import moment from "moment/moment"
import DynamicButton from "components/button"
import { useNavigate } from "react-router-dom"

const Event = () => {
  const navigate = useNavigate()
  const { formData } = useFormData()
  const { values } = formData
  const toDate = moment(values.StartTime).format("MMMM Do YYYY, h:mm:ss a")
  const tillDate = moment(values.EndTime).format("MMMM Do YYYY, h:mm:ss a")

  return (
    <Stack padding="0px 20px 0px 20px">
      <Stack
        paddingBottom={5}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Stack width="150px">
          <DynamicButton
            variant="contained"
            size="large"
            onClick={() => {
              navigate("/create", { replace: true })
            }}
          >
            Edit
          </DynamicButton>
        </Stack>
      </Stack>
      <Grid container spacing={5}>
        <Grid item xs={12} xl={6} order={{ xs: 1, lg: 1, xl: 2 }}>
          <img src={BirthDayImage} alt="birthday" width="100%" height="100%" />
        </Grid>
        <Grid item xs={12} xl={6} order={{ xs: 2, lg: 2, xl: 1 }}>
          <Stack spacing={2}>
            <Typography variant="h2" sx={headingTypographyStyles}>
              {values?.EventName}
            </Typography>
            <Typography variant="p" sx={subtitleTypographyStyles}>
              Hosted by <b>{values?.HostName}</b>
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <div style={iconContainerStyles}>
                <img
                  src={CalendarImage}
                  width="26px"
                  height="26px"
                  alt="calendar"
                />
              </div>
              <div>
                <Stack>
                  <Typography variant="p" sx={headingTypographyStyles}>
                    {toDate}
                  </Typography>
                  <Typography variant="p" sx={contentSubtitlesTypographyStyles}>
                    to <b>{tillDate}</b>
                  </Typography>
                </Stack>
              </div>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <div style={iconContainerStyles}>
                <img
                  src={LocationImage}
                  width="26px"
                  height="26px"
                  alt="location"
                />
              </div>
              <div>
                <Stack>
                  <Typography variant="p" sx={headingTypographyStyles}>
                    {values?.StreetName}
                  </Typography>
                  <Typography variant="p" sx={contentSubtitlesTypographyStyles}>
                    {`${values?.State}, ${values?.PostCode}`}
                  </Typography>
                </Stack>
              </div>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Event
