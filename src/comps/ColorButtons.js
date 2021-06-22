import React from "react"
import { connect } from "react-redux"
import { Box, IconButton } from "@material-ui/core"
import {
  LockOpenOutline,
  Lock,
  ContentCopy as Copy,
  PaletteOutline as Palette,
} from "mdi-material-ui"
import {
  setColorPicker,
  setLock,
  setToast,
} from "../state/actions"

const ColorButtons = ({ variant, dispatch, lock, hex }) => {
  const handleClick = (e) => {
    document.activeElement.blur()
    switch (e) {
      case "lock":
        dispatch(
          setLock({
            variant,
            locked: !lock,
          })
        )
        break
      case "copy":
        if (navigator.clipboard) {
          navigator.clipboard.writeText(hex)
          dispatch(
            setToast({
              open: true,
              msg: `Successfully copied ${hex.toUpperCase()} to the clipboard`,
              severity: "success",
            })
          )
        } else {
          dispatch(
            setToast({
              open: true,
              msg: `Sorry. Your browser is not compatible with this feature`,
              severity: "error",
            })
          )
        }
        break
      case "colorpicker":
        dispatch(setColorPicker({ open: true, variant }))
        break
      default:
        break
    }
  }

  return (
    <Box align="center">
      <IconButton
        color="inherit"
        onClick={() => handleClick("lock")}
      >
        {lock ? <Lock /> : <LockOpenOutline />}
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => handleClick("copy")}
      >
        <Copy />
      </IconButton>
      <IconButton
        color="inherit"
        disabled={lock}
        onClick={() => handleClick("colorpicker")}
      >
        <Palette />
      </IconButton>
    </Box>
  )
}

const mapStateToProps = (state, ownProps) => ({
  lock: state.locks[ownProps.variant],
  hex: state.hexValues[ownProps.variant],
})

export default connect(mapStateToProps)(ColorButtons)
