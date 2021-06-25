import store from "../state/store"
import {
  setHexValue,
  setLoading,
  setUndoEnabled,
  setLock,
} from "../state/actions"
import rgbHex from "rgb-hex"

export default class Update {
  constructor(props) {
    this.currentState = Object.assign({}, store.getState())
    this.variants = ["primary", "secondary"]
    this.random = true
    this.hexValues = this.currentState.hexValues
    if (props) {
      this.random = false
      this.variants = []
      Object.assign(this, props)
    }
    this._init()
  }

  _init() {
    store.dispatch(setLoading(true))
    if (this.disableUndo) {
      store.dispatch(setUndoEnabled(false))
    }
    if (this.random) {
      this.variants = this.variants.filter((variant) => {
        return !this.currentState.locks[variant]
      })
      for (let variant of this.variants) {
        this.hexValues[variant] = this.getRandomColor()
      }
    } else {
      for (let update of this.update) {
        this.variants.push(update.variant)
        this.hexValues[update.variant] = update.hex
        if (update.hasOwnProperty("lock")) {
          store.dispatch(
            setLock({
              variant: update.variant,
              locked: update.lock,
            })
          )
        }
      }
    }
  }

  getRandomColor() {
    const getRandomValue = () => {
      return Math.floor(Math.random() * 255)
    }
    return `#${rgbHex(
      `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`
    )}`
  }

  commit() {
    for (let variant of this.variants) {
      store.dispatch(
        setHexValue({ variant, hex: this.hexValues[variant] })
      )
    }
    store.dispatch(setLoading(false))
    if (this.disableUndo) {
      store.dispatch(setUndoEnabled(true))
    }
  }
}
