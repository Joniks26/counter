import React from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'

export type CounterType = {
    dataMax: number
    dataMin: number
    data: number
    dataString: string
    set: boolean
    update: () => void
    reset: () => void
    startDis: boolean
}

export function Counter(props: CounterType) {

    let disInc = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax || props.dataMax === props.data || props.startDis ? true : false
    let disRes = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax || props.startDis ? true : false
    let counter = props.set === false ? props.dataString : props.data
    let error = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax || props.dataMax === props.data ? true : false




    return (
        <div className={s.counter}>
            <div className={error? s.valueError : s.value}>{counter}</div>
            <div className={s.btnField}>
                <Button title={"inc"}
                        disabled={disInc}
                        Callback={props.update}/>
                <Button title={"reset"}
                        disabled={disRes}
                        Callback={props.reset}/>
            </div>
        </div>
    );
}

