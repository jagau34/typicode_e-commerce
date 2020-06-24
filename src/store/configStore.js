import thunk from 'redux-thunk';
import {
    applyMiddleware,
    createStore,
    compose
} from 'redux';
import reducers from '../reducers';

const configureStore = (initialState = {}) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))
}

export const store = configureStore();