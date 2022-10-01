import { Grid, Stack, Typography, useMediaQuery } from "@mui/material"
import DynamicButton from "components/button"
import {
  typographyStyles,
  typographyLinearStyles,
  typographyParagraphStyles,
} from "./styles"
import LandingPageImage from "assets/images/landing-page.svg"
import { GiPartyPopper } from "react-icons/gi"
import { Link } from "react-router-dom"

const LandingPage = () => {
  const lgBreakPoints = useMediaQuery("(min-width:1200px)")
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} lg={6} order={{ xs: 2, lg: 2, xl: 1 }}>
        <Stack alignItems={"center"} spacing={3}>
          <img
            src={LandingPageImage}
            height="550px"
            width="300px"
            alt="landing"
          />
          {!lgBreakPoints && (
            <DynamicButton
              size="large"
              variant="contained"
              startIcon={<GiPartyPopper />}
            >
              <Link to="/create">Create my event</Link>
            </DynamicButton>
          )}
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        order={{ xs: 1, lg: 1, xl: 2 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          textAlign={lgBreakPoints ? "right" : "center"}
          direction="column"
          justifyContent="flex-end"
          alignItems={lgBreakPoints ? "flex-end" : "center"}
        >
          <Typography color="primary" variant="h2" sx={typographyStyles}>
            Imagine if
          </Typography>
          <Typography variant="h2" sx={typographyLinearStyles}>
            Snapchat
          </Typography>
          <Typography variant="h2" sx={typographyStyles} gutterBottom>
            had events.
          </Typography>
          <Typography variant="p" sx={typographyParagraphStyles} gutterBottom>
            Easily host and share events with your friends across any social
            media.
          </Typography>
          {lgBreakPoints && (
            <DynamicButton
              size="large"
              variant="contained"
              startIcon={<GiPartyPopper />}
            >
              <Link to="/create">Create my event</Link>
            </DynamicButton>
          )}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LandingPage
