import React from "react"
import { connect } from "react-redux"
import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { setToast } from "../state/actions"

const Toast = ({ dispatch, open, msg, severity, toast }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={() =>
        dispatch(setToast({ ...toast, open: false }))
      }
    >
      <Alert variant="filled" severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  )
}

const mapStateToProps = (state) => ({
  open: state.toast.open,
  msg: state.toast.msg,
  severity: state.toast.severity,
  toast: state.toast,
})

export default connect(mapStateToProps)(Toast)
