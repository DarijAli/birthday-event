import { Button } from "@mui/material"
import React from "react"

const DynamicButton = ({
  onClick,
  type,
  disabled,
  variant,
  size,
  color,
  startIcon,
  children,
}) => {
  return (
    <Button
      sx={{
        background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
        borderRadius: "10px",
        fontWeight: 700,
        minWidth: "100%",
        maxWidth: "320px",
      }}
      onClick={onClick}
      type={!!type ? type : "button"}
      disabled={disabled}
      variant={variant}
      size={size}
      color={color}
      startIcon={startIcon}
    >
      {children}
    </Button>
  )
}

export default DynamicButton
