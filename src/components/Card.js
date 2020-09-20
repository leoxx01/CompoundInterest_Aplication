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
        invs = newValue * parseFloat(juros/100) 
        let inv = parseFloat(invs)
        let saldo = newValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        console.log(saldo)
        lista.push({
            id: id++,
            juros: newJuros,
            saldo: saldo,
            ganho: inv.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            })

        newValue = parseFloat(newValue) + inv
        newJuros = parseFloat(newJuros) + parseFloat(juros)
        newJuros = newJuros.toFixed(2)
    }
    console.log(lista)
    
    return (
        <div>
            <div>
                <List lists={lista}/>
            </div>
        </div>
    )       
    
}
