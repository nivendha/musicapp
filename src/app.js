import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Stage from "./components/Stage"
import Dock from "./components/dock"
import store from "./store"

const app = document.getElementById('main');
const appStyle ={
	display:'flex'
};
ReactDOM.render(<Provider store={store}>
	<div style={appStyle}>
  <Dock/>
  <Stage/>
  </div>
</Provider>, app);
