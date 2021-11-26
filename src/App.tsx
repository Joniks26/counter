import React, {ChangeEvent, useEffect, useState} from 'react';
import {CounterSetter} from "./components/Starter/CounterSetter";
import {Counter} from "./components/Counter/Counter";
import s from './App.module.css';


function App() {

    let [data, setData] = useState(0)
    const [inputValueMin, setinputValueMin] = useState(0)
    const [inputValueMax, setinputValueMax] = useState(0)
    let [dataString, setDataString] = useState("error value!")
    let [buttonDis, setbuttonDis] = useState(false)
    let [startDis, setStartDis] = useState(true)
    let dataMin = inputValueMin
    let dataMax = inputValueMax

    let onChangeValueMin = (e: ChangeEvent<HTMLInputElement>) => {
        const minValue = +e.currentTarget.value
        setinputValueMin(minValue)
        setbuttonDis(false)

        if (dataMax <= 0 || minValue < 0 || minValue >= dataMax) {
            setDataString("error")
        } else {
            setDataString("set value")
        }
    }

    let onChangeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value
        setinputValueMax(maxValue)
        setbuttonDis(false)

        if (maxValue <= 0 || dataMin < 0 || dataMin >= maxValue) {
            setDataString("error")
        } else {
            setDataString("set value")
        }
    }

    let [set, setSet] = useState(false)

    const upDate = () => {
        const count = data + 1
        if (data < dataMax)
            setData(count)
    }
    const upReset = () => {
        setData(data = 0)
        setSet(false)
        setStartDis(true)
    }
    let onSet = () => {
        setData(inputValueMin)
        setbuttonDis(!buttonDis)
        setSet(true)
        setStartDis(false)
    }

    useEffect(() => {
        let str = localStorage.getItem("inputValueMin")
        if (str) {
            let num = JSON.parse(str)
            setinputValueMin(num)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("inputValueMin", JSON.stringify(inputValueMin))
    }, [inputValueMin])
    useEffect(() => {
        let str = localStorage.getItem("inputValueMax")
        if (str) {
            let num = JSON.parse(str)
            setinputValueMax(num)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("inputValueMax", JSON.stringify(inputValueMax))
    }, [inputValueMax])
    useEffect(() => {
        let str = localStorage.getItem("set")
        if (str) {
            let num = JSON.parse(str)
            setSet(num)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("set", JSON.stringify(set))
    }, [set])
    useEffect(() => {
        let str = localStorage.getItem("data")
        if (str) {
            let num = JSON.parse(str)
            setData(num)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])
    useEffect(() => {
        let str = localStorage.getItem("dataString")
        if (str) {
            let num = JSON.parse(str)
            setDataString(num)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("dataString", JSON.stringify(dataString))
    }, [dataString])
    useEffect(() => {
        let str = localStorage.getItem("buttonDis")
        if (str) {
            let num = JSON.parse(str)
            setbuttonDis(num)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("buttonDis", JSON.stringify(buttonDis))
    }, [buttonDis])
    useEffect(() => {
        let str = localStorage.getItem("startDis")
        if (str) {
            let num = JSON.parse(str)
            setStartDis(num)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("startDis", JSON.stringify(startDis))
    }, [startDis])

    return (
        <div className={s.App}>
            <CounterSetter dataMax={dataMax}
                           dataMin={dataMin}
                           buttonDis={buttonDis}
                           inputValueMax={inputValueMax}
                           inputValueMin={inputValueMin}
                           set={onSet}
                           onChangeValueMax={onChangeValueMax}
                           onChangeValueMin={onChangeValueMin}
            />
            <Counter dataMax={dataMax}
                     dataMin={dataMin}
                     data={data}
                     dataString={dataString}
                     set={set}
                     update={upDate}
                     reset={upReset}
                     startDis={startDis}/>
        </div>
    );
}

export default App;
