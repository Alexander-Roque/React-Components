import * as React from "react"

export default function Counter(): JSX.Element{

    const [number, setNumber] = React.useState(0);

    function handlerSum(){
        setNumber(number + 1)
    }

    function handlerSumTwo(){
        setNumber(number + 10)
    }
    function handlerReset(){
        setNumber (0)
    }
    function handlerRandom(){
        if (number >= 0){
            setNumber (Math.floor(Math.random()*(number + 20)))
        } else {
            setNumber (Math.floor(Math.random()*(0-number + 1)- 20))
        }
    }
    function handlerRest(){
        setNumber(number - 1)
    }

    function handlerRestTwo(){
        setNumber(number - 10)
    }

    return (
        <div className="counter">
            <p className="text-counter">Valor actual</p>
            <p className="number">{number}</p>
            <div className="container-button">
            <button className="button-counter" onClick={(_event) => handlerSum()}>+</button>
            <button className="button-counter" onClick={(_event)=> handlerSumTwo()}>++</button>
            <button className="button-counter" onClick={(_event)=> handlerReset()}>Reset</button>
            <button className="button-counter" onClick={(_event)=> handlerRandom()}>Random</button>
            <button className="button-counter" onClick={(_event)=> handlerRest()}>-</button>
            <button className="button-counter" onClick={(_event)=> handlerRestTwo()}>--</button>
            </div>
        </div>
    )
}

