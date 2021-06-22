import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setHistory, setUndoSteps } from "./state/actions"
import {
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core"

const Theme = ({
  dispatch,
  loading,
  primary,
  secondary,
  history,
  undoEnabled,
  undoSteps,
  children,
}) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
  })

  useEffect(() => {
    if (!loading && undoEnabled) {
      if (undoSteps !== 0) {
        const newHistory = history.slice(
          0,
          -Math.abs(undoSteps)
        )
        newHistory.push({ primary, secondary })
        dispatch(setHistory(newHistory))
        dispatch(setUndoSteps(0))
      } else {
        dispatch(
          setHistory([...history, { primary, secondary }])
        )
      }
    }
    //eslint-disable-next-line
  }, [loading])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => ({
  primary: state.hexValues.primary,
  secondary: state.hexValues.secondary,
  loading: state.loading,
  history: state.history,
  undoEnabled: state.undoEnabled,
  undoSteps: state.undoSteps,
})

export default connect(mapStateToProps)(Theme)
