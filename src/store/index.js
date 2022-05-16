import { legacy_createStore as createStore} from 'redux'
import rootReducer from '../reducers/posts';
const store = createStore(
    rootReducer /* preloadState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;