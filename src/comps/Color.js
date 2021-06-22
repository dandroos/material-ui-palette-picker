import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import {
  useTheme,
  Grid,
  Box,
  Typography,
  Fade,
} from "@material-ui/core"
import axios from "axios"
import ColorButtons from "./ColorButtons"

const Color = ({ variant, textVisible }) => {
  const theme = useTheme()

  const [name, setName] = useState("")
  const [loading, setLoading] = useState(true)

  const color = theme.palette[variant]

  useEffect(() => {
    setLoading(true)
    const fetchName = async () => {
      const { data } = await axios.get(
        `https://api.color.pizza/v1/${color.main.substr(1)}`
      )
      setName(data.colors[0].name)
      setLoading(false)
    }
    fetchName()
    //eslint-disable-next-line
  }, [color.main])

  return (
    <Box height="50%" width="100%" position="relative">
      <Grid
        container
        style={{ width: "100%", height: "100%" }}
      >
        <Grid item xs={2}>
          <Box
            height="100%"
            width="100%"
            bgcolor={`${variant}.dark`}
            style={boxStyle}
          />
        </Grid>
        <Grid item xs={8}>
          <Box
            height="100%"
            width="100%"
            bgcolor={`${variant}.main`}
            style={boxStyle}
          />
        </Grid>
        <Grid item xs={2}>
          <Box
            height="100%"
            width="100%"
            bgcolor={`${variant}.light`}
            style={boxStyle}
          />
        </Grid>
      </Grid>
      <Box
        position="absolute"
        align="center"
        color={color.contrastText}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Fade in={textVisible} unmountOnExit>
          <Typography>{color.main.toUpperCase()}</Typography>
        </Fade>
        <Fade in={!loading && textVisible} unmountOnExit>
          <Typography variant="overline">{name}</Typography>
        </Fade>
        <ColorButtons variant={variant} />
      </Box>
    </Box>
  )
}

const boxStyle = {
  transition: "all .2s",
}

const mapStateToProps = (state) => ({
  textVisible: state.textVisible,
})

export default connect(mapStateToProps)(Color)
