import {combineReducers, createStore} from "redux";
import {
    counterReducer,
    setDisableSetButtonAC,
    setDataAC, setDataStringAC, setDisableButtonAC,
    setMaxValueAC,
    setMinValueAC, setStartDisAC
} from "./counterReducer";
import {loadState, saveState} from "./localStorage";

export type ActionValuesType =
    ReturnType<typeof setDataAC> |
    ReturnType<typeof setMinValueAC> |
    ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof setDataStringAC> |
    ReturnType<typeof setDisableButtonAC> |
    ReturnType<typeof setStartDisAC> |
    ReturnType<typeof setDisableSetButtonAC>

const RootReducer = combineReducers({counter: counterReducer})

export const store = createStore(RootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type RootStateType = ReturnType<typeof RootReducer>



