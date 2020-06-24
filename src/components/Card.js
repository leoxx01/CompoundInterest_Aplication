import React from 'react'
import List from './List'

export default function Card(props) {
    const {value, juros , period} = props
    let teste = []

    let newValue = value
    let newJuros = juros
    let invs = 0
    let id = 1

    for(let i = 0 ; i <period;i++){
        invs = parseFloat(value) * parseFloat(newJuros)
        let inv = invs.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        newValue = parseFloat(value) + parseFloat(invs)
        let saldo = newValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        console.log()
        teste.push({
        id: id++,
        juros: newJuros,
        saldo: saldo,
        ganho: inv
        })
        newJuros = parseFloat(newJuros) + parseFloat(juros)
        newJuros = newJuros.toFixed(2)
    }
    console.log(teste)
    
    return (
        <div>
            <div>
                <List lists={teste}/>
            </div>
        </div>
    )       
    
}
