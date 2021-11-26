import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, storageState())

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;

