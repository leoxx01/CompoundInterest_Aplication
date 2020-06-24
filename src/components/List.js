import React from 'react'
import css from './Card.module.css'


export default function List(props) {
    return (
        <div className={css.separator}>
            {props.lists.map(list =>{
                return (<div key={list.id} className={css.flexRow}>
                    <span className={css.center}>{list.id}</span>
                    <ul className={css.ajusts}>
                        <p>{list.saldo}</p>
                        <p>{list.ganho}</p>
                        <p>{list.juros}</p>
                    </ul>
                    </div>)
                })
            }
        </div>
    )
}
