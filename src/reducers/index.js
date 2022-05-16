import kudosReducers from "./kudosReducers";
import personsReducers from "./personsReducers";
const { combineReducers } = require("redux");
const { default: postReducers } = require("./postReducers");


export default combineReducers({
  postState: postReducers,
  kudosState: kudosReducers,
  personsState: personsReducers

}
)
