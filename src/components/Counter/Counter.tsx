import React from 'react';
import {Button} from "../Button/Button";
import s from './Counter.module.css'

export type CounterType = {
    dataMax: number
    dataMin: number
    data: number
    dataString: string
    set: boolean
    inc: () => void
    reset: () => void
    startDis: boolean
}

export function Counter(props: CounterType) {

    const disRes = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax || props.startDis
    const error = disRes || props.dataMax === props.data
    const counter = !props.set ? props.dataString : props.data




    return (
        <div className={s.counter}>
            <div className={error? s.valueError : s.value}>{counter}</div>
            <div className={s.btnField}>
                <Button title={"inc"}
                        disabled={error}
                        callback={props.inc}/>
                <Button title={"reset"}
                        disabled={disRes}
                        callback={props.reset}/>
            </div>
        </div>
    );
}

