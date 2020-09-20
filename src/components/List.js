import React from 'react'
import css from './Card.module.css'


export default function List(props) {
    console.log(props.check)
    let cor = "black"
    let cortwo ="black"
    if(props.check === true){
         cor = "#008B00"
         cortwo = "#00BFFF"
    }else{
         cor = "red"
         cortwo = "red"
    }
    console.log(cor)
    return (
        <div className={css.separator}>
            {props.lists.map(list =>{
                return (<div key={list.id} className={css.flexRow}>
                    <span className={css.center}>{list.id}</span>
                    <ul className={css.ajusts}>
                        <strong><p style={{color:cor}}>{list.saldo}</p></strong>
                        <strong><p style={{color:cor}}>{list.ganho}</p></strong>
                        <strong><p style={{color:cortwo}}>{list.juros +"%"}</p></strong>
                    </ul>
                    </div>)
                })
            }
        </div>
    )
}
