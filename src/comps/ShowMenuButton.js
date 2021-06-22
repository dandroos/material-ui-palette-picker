import React from "react"
import { connect } from "react-redux"
import { Fab } from "@material-ui/core"
import { Cog } from "mdi-material-ui"

const ShowMenuButton = () => {
  return (
    <Fab
      style={{
        zIndex: 2000,
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Cog />
    </Fab>
  )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(ShowMenuButton)
