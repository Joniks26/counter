import {ActionValuesType} from "./store";

const SET_DATA = "SET_DATA"
const SET_MIN_VALUE = "SET_INPUT_VALUE_MIN"
const SET_MAX_VALUE = "SET_INPUT_VALUE_MAX"
const SET_DATA_STRING = "SET_DATA_STRING"
const SET_DISABLE_BUTTON = "SET_BUTTON_DIS"
const SET_START_DIS = "SET_START_DIS"
const SET_DISABLE_SET_BUTTON = "SET_BUTTON_SET_DIS"

let initialState = {
    data: 0,
    inputValueMin: 0,
    inputValueMax: 0,
    dataString: "SET VALUE",
    buttonDis: false,
    startDis: true,
    setButton: false
}
type InitialStateType=typeof initialState

export const counterReducer = (state:InitialStateType = initialState, action: ActionValuesType): InitialStateType => {
    switch (action.type) {
        case SET_DATA:
            return {...state, data: action.data}
        case SET_MIN_VALUE:
            return {...state, inputValueMin: action.minValue}
        case SET_MAX_VALUE:
            return {...state, inputValueMax: action.maxValue}
        case SET_DATA_STRING:
            return {...state, dataString: action.dataString}
        case SET_DISABLE_BUTTON:
            return {...state, buttonDis: action.disableButton}
        case SET_START_DIS:
            return {...state, startDis: action.buttonStart}
        case SET_DISABLE_SET_BUTTON:
            return {...state, setButton: action.setButton}
        default :
            return state
    }
}

export const setDataAC = (data: number) => ({type: SET_DATA, data}) as const
export const setMinValueAC = (minValue: number) => ({type: SET_MIN_VALUE, minValue}) as const
export const setMaxValueAC = (maxValue: number) => ({type: SET_MAX_VALUE, maxValue}) as const
export const setDataStringAC = (dataString: string) => ({type: SET_DATA_STRING, dataString}) as const
export const setDisableButtonAC = (disableButton: boolean) => ({type: SET_DISABLE_BUTTON, disableButton}) as const
export const setStartDisAC = (buttonStart: boolean) => ({type: SET_START_DIS, buttonStart}) as const
export const setDisableSetButtonAC = (setButton: boolean) => ({type: SET_DISABLE_SET_BUTTON, setButton}) as const