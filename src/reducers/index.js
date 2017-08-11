import { combineReducers } from "redux";
import tools from "./tools";
import strokes from "./strokes";
import currentStroke from "./currentStroke";

const rootReducer = combineReducers({
	tools,
	strokes,
	currentStroke
});

export default rootReducer;
