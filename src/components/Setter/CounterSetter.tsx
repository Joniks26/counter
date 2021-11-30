import React, {ChangeEvent} from 'react';
import {Button} from "../Button/Button";
import s from './CounterSetter.module.css'

export type StarterType = {
    buttonDis: boolean
    dataMax: number
    dataMin: number
    set: () => void
    ChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    ChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export function CounterSetter(props: StarterType) {
    const error = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax

    return (
        <div className={s.counter1}>
            <div className={s.inputField}>
                <div className={s.label}>
                    max value:
                    <input type="number" value={props.dataMax} onChange={props.ChangeMaxValue}
                           className={error ? s.errorMin : s.max}/>
                </div>
                <div className={s.label}>
                    min value:
                    <input type="number" value={props.dataMin} onChange={props.ChangeMinValue}
                           className={error ? s.errorMin : s.min}/>
                </div>
            </div>
            <div className={s.btnField}>
                <Button title={"set"} callback={props.set} disabled={error}/>
            </div>
        </div>
    );
}
