import React from "react"
import { connect } from "react-redux"
import { setAbout } from "../state/actions"
import {
  Portal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Link,
  Button,
} from "@material-ui/core"
import ProgressiveImage from "react-progressive-image"

const About = ({ dispatch, isOpen }) => {
  const handleClose = () => {
    dispatch(setAbout(false))
  }

  return (
    <Portal>
      <Dialog open={isOpen} fullWidth onClose={handleClose}>
        <DialogTitle
          disableTypography
          style={{ textAlign: "center" }}
        >
          <img
            src="./logo.png"
            style={{ width: 50, marginRight: 15 }}
          />
          <Typography variant="h4">
            Material-UI Palette Picker
          </Typography>
        </DialogTitle>
        <DialogContent style={{ textAlign: "center" }}>
          <ProgressiveImage
            src="./biog.jpg"
            placeholder="./biog-tiny.jpg"
          >
            {(src) => (
              <img
                src={src}
                alt="David with a dog"
                style={{ borderRadius: "50%" }}
              />
            )}
          </ProgressiveImage>
          <Typography paragraph>
            Hi! My name's Dave. Thanks for checking out my
            little app. If you enjoy using it, please consider
            giving me some love/stars on GitHub.
          </Typography>
          <Typography>
            If you have any comments or suggestions, please
            feel free to{" "}
            <Link href="mailto:dandrewsuk82@gmail.com">
              email me
            </Link>
            .
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Portal>
  )
}

const mapStateToProps = (state) => ({
  isOpen: state.about,
})

export default connect(mapStateToProps)(About)
