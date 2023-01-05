import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {blogsReducer} from "./blogs-reducer";
import {authReducer} from "./auth-reducer";
import {postsReducer} from "./posts-reducer";


const rootReducer = combineReducers({
    blogs: blogsReducer,
    posts: postsReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;
