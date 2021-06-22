import React from "react"
import Color from "./Color"
import { Box } from "@material-ui/core"

const Colors = () => {
  return (
    <Box height="100vh" width="100%">
      <Color variant="primary" />
      <Color variant="secondary" />
    </Box>
  )
}

export default Colors
