import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Stage from "./components/Stage"
import Dock from "./components/dock"
import store from "./store"

const app = document.getElementById('main');

ReactDOM.render(<Provider store={store}>
  <Dock/>
  <Stage />
</Provider>, app);
