import {
  SET_LOADING,
  SET_READY,
  SET_HEX_VALUE,
  SET_LOCK,
  SET_HISTORY,
  SET_TOAST,
  SET_COLOR_PICKER,
  SET_MENU,
  SET_TEXT_VISIBLE,
  SET_UNDO_STEPS,
  SET_UNDO_ENABLED,
  SET_ABOUT,
} from "./types"

const initialState = {
  ready: false,
  loading: true,
  hexValues: {
    primary: "#000000",
    secondary: "#FFFFFF",
  },
  locks: {
    primary: false,
    secondary: false,
  },
  colorPicker: {
    open: false,
    variant: "",
  },
  history: [],
  undoEnabled: true,
  undoSteps: 0,
  toast: {
    open: false,
    msg: "",
    severity: "success",
  },
  menu: {
    visible: false,
    timerId: null,
  },
  textVisible: true,
  about: false,
}

const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)

  switch (type) {
    case SET_READY:
      newState.ready = payload
      break
    case SET_LOADING:
      newState.loading = payload
      break
    case SET_HEX_VALUE:
      newState.hexValues[payload.variant] = payload.hex
      break
    case SET_LOCK:
      newState.locks[payload.variant] = payload.locked
      break
    case SET_HISTORY:
      newState.history = payload
      break
    case SET_TOAST:
      newState.toast = payload
      break
    case SET_COLOR_PICKER:
      newState.colorPicker = payload
      break
    case SET_MENU:
      newState.menu = payload
      break
    case SET_TEXT_VISIBLE:
      newState.textVisible = payload
      break
    case SET_UNDO_STEPS:
      newState.undoSteps = payload
      break
    case SET_UNDO_ENABLED:
      newState.undoEnabled = payload
      break
    case SET_ABOUT:
      newState.about = payload
      break
    default:
      break
  }

  return newState
}

export default reducer
