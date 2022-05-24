
const { combineReducers } = require("redux");
import kudosReducers from "./kudosReducers";
import personsReducers from "./personsReducers";
import groupReducers from "./groupReducers";
const { default: postReducers } = require("./postReducers");

export default combineReducers({
  postState: postReducers,
  kudosesState: kudosReducers,
  personsState: personsReducers,
  groupState: groupReducers
}
)
