import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
const initialState= {};
const middleware = [thunk];

const store = createStore(
    rootReducer /* preloadState, */,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;