import React, {ChangeEvent} from 'react';
import {CounterSetter} from "./components/Setter/CounterSetter";
import {Counter} from "./components/Counter/Counter";
import s from './App.module.css';
import {RootStateType} from "./store/store";
import {useDispatch, useSelector} from "react-redux";
import {
    setDisableSetButtonAC,
    setDisableButtonAC,
    setDataAC, setDataStringAC,
    setMinValueAC,
    setMaxValueAC, setStartDisAC
} from "./store/counterReducer";

function App() {
    const dataMin = useSelector<RootStateType, number>(state => state.counter.inputValueMin)
    const dataMax = useSelector<RootStateType, number>(state => state.counter.inputValueMax)
    const dataString = useSelector<RootStateType, string>(state => state.counter.dataString)
    const buttonDis = useSelector<RootStateType, boolean>(state => state.counter.buttonDis)
    const startDis = useSelector<RootStateType, boolean>(state => state.counter.startDis)
    const set = useSelector<RootStateType, boolean>(state => state.counter.setButton)
    let data = useSelector<RootStateType, number>(state => state.counter.data)

    const dispatch = useDispatch()

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const minValue = +e.currentTarget.value
        dispatch(setMinValueAC(minValue))
        dispatch(setDisableButtonAC(false))

        if (dataMax <= 0 || minValue < 0 || minValue >= dataMax) {
            dispatch(setDataStringAC("ERROR"))
        } else {
            dispatch(setDataStringAC("SET VALUE"))
        }
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value
        dispatch(setMaxValueAC(maxValue))
        dispatch(setDisableButtonAC(false))

        if (maxValue <= 0 || dataMin < 0 || dataMin >= maxValue) {
            dispatch(setDataStringAC("ERROR"))
        } else {
            dispatch(setDataStringAC("SET VALUE"))
        }
    }

    const increment = () => {
        if (data < dataMax)
            dispatch(setDataAC(data + 1))
    }
    const reset = () => {
        dispatch(setDataAC(data))
        dispatch(setDisableSetButtonAC(false))
        dispatch(setStartDisAC(true))
    }
    const setValue = () => {
        dispatch(setDataAC(dataMin))
        dispatch(setDisableButtonAC(!buttonDis))
        dispatch(setDisableSetButtonAC(true))
        dispatch(setStartDisAC(false))
    }

    return (
        <div className={s.App}>
            <CounterSetter buttonDis
                           dataMax={dataMax}
                           dataMin={dataMin}
                           set={setValue}
                           ChangeMaxValue={onChangeMaxValue}
                           ChangeMinValue={onChangeMinValue}
            />
            <Counter dataMax={dataMax}
                     dataMin={dataMin}
                     data={data}
                     dataString={dataString}
                     set={set}
                     inc={increment}
                     reset={reset}
                     startDis={startDis}/>
        </div>
    );
}

export default App;
