import React from 'react'
import List from './List'

export default function Card(props) {
    const {value, juros , period} = props
    
    let lista = []

    let newValue = value
    let newJuros = juros
    let invs = 0
    let id = 1

    for(let i = 0 ; i < period;i++){
        if(parseFloat(value)>0){
            invs = newValue * parseFloat(juros/100) 
            let inv = parseFloat(invs)
            let saldo = newValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            lista.push({
                id: id++,
                juros: newJuros,
                saldo: saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                ganho: inv.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                })

            newValue = parseFloat(newValue) + inv
            newJuros = parseFloat(newJuros) + parseFloat(juros)
            newJuros = newJuros.toFixed(2)
        }else{
            invs = newValue * parseFloat(juros/100) 
            let inv = parseFloat(invs)
            let saldo = newValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            lista.push({
                id: id++,
                juros: newJuros,
                saldo: saldo.replace("-",""),
                ganho: inv.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                })

            newValue = parseFloat(newValue) - inv
            newJuros = parseFloat(newJuros) + parseFloat(juros)
            newJuros = newJuros.toFixed(2)
        }
    }
    return (
        <div>
            <div>
                <List lists={lista} check={parseFloat(value)>0}/>
            </div>
        </div>
    )       
    
}
