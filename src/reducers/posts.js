const { combineReducers } = require("redux");
const { default: postReducers } = require("./postReducers");


export default combineReducers({
  postState: postReducers}
)
