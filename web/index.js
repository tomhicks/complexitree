import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"

import "normalize.css"

import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin()

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import App from "./app"

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById("root")
  )
}

render()

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./app", render)
}
