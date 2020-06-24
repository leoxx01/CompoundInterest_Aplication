import React from 'react'
import css from './Inputs.module.css'

export default function Inputs(props) {
    const {value , juros, period} = props

    const handlerValue = (event) =>{
        return value(event.target.value)
    }
    const handlerJuros = (event) =>{
        return juros(event.target.value)
    }
    const handlerPeriod = (event) =>{
        return period(event.target.value)
    }

    return (
        <div className={css.flexRow}>
            <div  className={css.separator}>
                <span>Montante Inicial</span>
                <input type='number' onChange={handlerValue}></input>
            </div>
            <div className={css.separator}>
                <span>Taxa de juros mensal</span>
                <input type='number' onChange={handlerJuros}></input>
            </div>
           <div className={css.separator}>
                <span>Período (meses)</span>
                <input type='number'onChange={handlerPeriod}></input>
           </div>
        </div>
    )
}

