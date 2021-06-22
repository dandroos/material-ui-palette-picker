import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { PhotoshopPicker as Picker } from "react-color"
import { Portal, Dialog } from "@material-ui/core"
import { setColorPicker } from "../state/actions"
import Update from "../objs/Update"

const ColorPicker = ({ dispatch, hexValues, colorPicker }) => {
  const { open, variant } = colorPicker

  const [color, setColor] = useState(hexValues[variant])

  const handleAction = (e) => {
    switch (e) {
      case "cancel":
        dispatch(
          setColorPicker({ ...colorPicker, open: false })
        )
        break
      case "confirm":
        const update = new Update({
          update: [{ variant, hex: color }],
        })
        update.commit()
        dispatch(
          setColorPicker({ ...colorPicker, open: false })
        )
        break
      default:
        break
    }
  }

  useEffect(() => {
    setColor(hexValues[variant])
    //eslint-disable-next-line
  }, [open])

  return (
    <Portal>
      <Dialog
        open={open}
        hideBackdrop
        onClose={() => handleAction("cancel")}
      >
        <Picker
          color={color}
          header={`Choose ${variant} color`}
          onChangeComplete={(c) => setColor(c.hex)}
          onAccept={() => handleAction("confirm")}
          onCancel={() => handleAction("cancel")}
        />
      </Dialog>
    </Portal>
  )
}

const mapStateToProps = (state) => ({
  hexValues: state.hexValues,
  colorPicker: state.colorPicker,
})

export default connect(mapStateToProps)(ColorPicker)
