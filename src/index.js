import React from "react"
import ReactDOM from "react-dom"
import { Helmet } from "react-helmet"
import { Provider } from "react-redux"
import store from "./state/store"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
