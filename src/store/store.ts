import {combineReducers, createStore, Store} from "redux";
import {
    counterReducer,
    setDisableSetButtonAC,
    setDataAC, setDataStringAC, setDisableButtonAC,
    setMaxValueAC,
    setMinValueAC, setStartDisAC
} from "./counterReducer";

export type ActionValuesType =
    ReturnType<typeof setDataAC> |
    ReturnType<typeof setMinValueAC> |
    ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof setDataStringAC> |
    ReturnType<typeof setDisableButtonAC> |
    ReturnType<typeof setStartDisAC> |
    ReturnType<typeof setDisableSetButtonAC>

let RootReducer = combineReducers({counter: counterReducer})
export const store: Store<RootStateType, ActionValuesType> = createStore(RootReducer)

export type RootStateType = ReturnType<typeof RootReducer>



