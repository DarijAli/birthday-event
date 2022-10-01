import { Typography } from "@mui/material"
import { errorFieldStyles } from "./styles"

export const FieldError = ({ message }) => {
  return <Typography sx={errorFieldStyles}>{message}</Typography>
}
