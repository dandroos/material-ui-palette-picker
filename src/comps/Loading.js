import React from "react"
import { connect } from "react-redux"
import { Portal, Dialog, DialogContent, Typography } from "@material-ui/core"

const Loading = ({ loading }) => {
  return (
    <Portal>
      <Dialog open={loading}>
        <DialogContent>
          <Typography>Hello</Typography>
        </DialogContent>
      </Dialog>
    </Portal>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
})

export default connect(mapStateToProps)(Loading)
