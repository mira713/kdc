import { applyMiddleware,combineReducers,compose,legacy_createStore } from "redux";
import {reducer as AuthReducer} from './auth/auth.reducer';
import { PostReducer } from "./post/post.reducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUXDEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    AuthReducer,
    PostReducer
});

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))