import React from "react";
import s from './Button.module.css'

export type ButtonType = {
    disabled: boolean
    title: string
    Callback: () => void
}

export const Button = (props: ButtonType) => {
    return (
        <button disabled={props.disabled}
                onClick={props.Callback}
                className={s.button}>{props.title}</button>
    )

}