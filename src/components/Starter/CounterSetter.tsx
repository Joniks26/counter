import React, {ChangeEvent} from 'react';
import {Button} from "../Button/Button";
import s from './CounterSetter.module.css'


export type StarterType = {
    dataMax: number
    dataMin: number
    buttonDis: boolean
    inputValueMax: number
    inputValueMin: number
    set: () => void
    onChangeValueMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeValueMin: (e: ChangeEvent<HTMLInputElement>) => void
}

export function CounterSetter(props: StarterType) {

    let disSet = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax || props.buttonDis ? true : false
    let error = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax ? true : false


    return (
        <div className={s.counter1}>
            <div className={s.inputblock}>
                <div className={s.label}>
                    max value:
                    <input type="number" value={props.inputValueMax} onChange={props.onChangeValueMax} className={error? s.errorMin : s.max}/>
                </div>
                <div className={s.label}>
                    min value:
                    <input type="number" value={props.inputValueMin} onChange={props.onChangeValueMin} className={error? s.errorMin : s.min}/>
                </div>
            </div>
            <div className={s.btnField}>
                <Button title={"set"} Callback={props.set} disabled={disSet}/>
            </div>
        </div>

    );
}
