import { combineReducers } from "redux"

import stage from "./stageReducer"
import dock from "./dockReducer"

export default combineReducers({
  stage:stage,
  dock:dock
})
