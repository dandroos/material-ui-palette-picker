import React from "react"
import { connect } from "react-redux"
import {
  setMenu,
  setTextVisible,
  setUndoSteps,
  setAbout,
} from "../state/actions"
import {
  AppBar,
  Toolbar,
  Typography,
  Fade,
  Box,
  IconButton,
} from "@material-ui/core"
import {
  SwapVerticalBold as Swap,
  Undo,
  Redo,
  Eye,
  EyeOff,
  Information,
} from "mdi-material-ui"
import Update from "../objs/Update"

const MenuBar = ({
  dispatch,
  show,
  timerId,
  textVisible,
  history,
  undoSteps,
  hexValues,
}) => {
  const handleClick = (e) => {
    document.activeElement.blur()
    switch (e) {
      case "undo":
        const previousCommit =
          history[history.length - 1 - undoSteps - 1]
        dispatch(setUndoSteps(undoSteps + 1))
        const undoUpdate = new Update({
          update: [
            {
              variant: "primary",
              hex: previousCommit.primary,
            },
            {
              variant: "secondary",
              hex: previousCommit.secondary,
            },
          ],
          disableUndo: true,
        })
        undoUpdate.commit()
        break
      case "redo":
        const redoCommit =
          history[history.length - 1 - undoSteps + 1]
        dispatch(setUndoSteps(undoSteps - 1))
        const redoUpdate = new Update({
          update: [
            {
              variant: "primary",
              hex: redoCommit.primary,
            },
            {
              variant: "secondary",
              hex: redoCommit.secondary,
            },
          ],
          disableUndo: true,
        })
        redoUpdate.commit()
        break
      case "textVisible":
        dispatch(setTextVisible(!textVisible))
        break
      case "swap":
        const swapUpdate = new Update({
          update: [
            {
              variant: "primary",
              hex: hexValues.secondary,
            },
            {
              variant: "secondary",
              hex: hexValues.primary,
            },
          ],
          disableUndo: true,
        })
        swapUpdate.commit()
        break
      case "about":
        dispatch(setAbout(true))
      default:
        break
    }
  }
  return (
    <Fade in={show}>
      <AppBar
        color="default"
        style={{
          position: "fixed",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onMouseOver={() => {
          clearTimeout(timerId)
        }}
        onMouseOut={() => {
          dispatch(
            setMenu({
              visible: true,
              timerId: setTimeout(() => {
                dispatch(
                  setMenu({ visible: false, timerId: null })
                )
              }, 1000),
            })
          )
        }}
      >
        <Toolbar variant="dense">
          <img
            src="logo.png"
            width="50"
            style={{ marginRight: 20 }}
          />
          <Typography variant="h5">
            Material-UI Palette Picker
          </Typography>
          <Box flexGrow={1} />
          <IconButton
            disabled={history.length - undoSteps < 2}
            onClick={() => handleClick("undo")}
          >
            <Undo />
          </IconButton>
          <IconButton
            disabled={undoSteps === 0}
            onClick={() => handleClick("redo")}
          >
            <Redo />
          </IconButton>
          <IconButton
            onClick={() => handleClick("textVisible")}
          >
            {textVisible ? <Eye /> : <EyeOff />}
          </IconButton>
          <IconButton onClick={() => handleClick("swap")}>
            <Swap />
          </IconButton>
          <IconButton onClick={() => handleClick("about")}>
            <Information />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fade>
  )
}

const mapStateToProps = (state) => ({
  show: state.menu.visible,
  timerId: state.menu.timerId,
  textVisible: state.textVisible,
  history: state.history,
  undoSteps: state.undoSteps,
  hexValues: state.hexValues,
})

export default connect(mapStateToProps)(MenuBar)
