import productsReducer from '../reducers';
import thunk from 'redux-thunk';
import {
    applyMiddleware,
    createStore,
    compose,
    combineReducers
} from 'redux';

const configureStore = (initialState = {}) => {
    const reducers = combineReducers({productsReducer}); 
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))
}

export const store = configureStore();