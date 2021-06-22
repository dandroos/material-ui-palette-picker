import {
  SET_READY,
  SET_LOADING,
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

export const setReady = (payload) => ({
  type: SET_READY,
  payload,
})

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
})

export const setHexValue = (payload) => ({
  type: SET_HEX_VALUE,
  payload,
})

export const setLock = (payload) => ({
  type: SET_LOCK,
  payload,
})

export const setHistory = (payload) => ({
  type: SET_HISTORY,
  payload,
})

export const setToast = (payload) => ({
  type: SET_TOAST,
  payload,
})

export const setColorPicker = (payload) => ({
  type: SET_COLOR_PICKER,
  payload,
})

export const setMenu = (payload) => ({
  type: SET_MENU,
  payload,
})

export const setTextVisible = (payload) => ({
  type: SET_TEXT_VISIBLE,
  payload,
})

export const setUndoSteps = (payload) => ({
  type: SET_UNDO_STEPS,
  payload,
})

export const setUndoEnabled = (payload) => ({
  type: SET_UNDO_ENABLED,
  payload,
})

export const setAbout = (payload) => ({
  type: SET_ABOUT,
  payload,
})
