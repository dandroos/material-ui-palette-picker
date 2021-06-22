import { useEffect } from "react"
import { connect } from "react-redux"
import { Box } from "@material-ui/core"
import About from "./comps/About"
import Menu from "./comps/MenuBar"
import Theme from "./Theme"
import Toast from "./comps/Toast"
import Colors from "./comps/Colors"
import ColorPicker from "./comps/ColorPicker"
import Update from "./objs/Update"
import { setMenu } from "./state/actions"

function App({ dispatch, timerId }) {
  const refresh = () => {
    const update = new Update()
    update.commit()
  }

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.charCode === 32) {
        refresh()
      }
    })
    refresh()
  }, [])

  return (
    <Theme>
      <ColorPicker />
      <About />
      <Menu />
      <Box
        onMouseMove={() => {
          if (timerId) {
            clearTimeout(timerId)
          }
          dispatch(
            setMenu({
              visible: true,
              timerId: setTimeout(() => {
                dispatch(
                  setMenu({
                    visible: false,
                    timerId: null,
                  })
                )
              }, 1000),
            })
          )
        }}
      >
        <Colors />
      </Box>
      <Toast />
    </Theme>
  )
}

const mapStateToProps = (state) => ({
  timerId: state.menu.timerId,
})

export default connect(mapStateToProps)(App)
