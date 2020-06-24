import React, { useState } from 'react';
import Inputs from './components/Inputs';
import Card from './components/Card';


export default function App (){
  const [initalValue, setInitialValue] = useState(0)
  const [juros, setJuros] = useState(0)
  const [period, setPeriod] = useState(0)
  
  const handlerSetInitialValue = (value) =>{
    setInitialValue(value)
  }
  const handlerSetJuros = (value) =>{
    setJuros(value)
  }
  const handlerSetPeriod = (value)=>{
    setPeriod(value)
  }
  
    return (
      <div>
        <h1 className='center'>React - Juros Compostos</h1>
        <Inputs value={handlerSetInitialValue} juros={handlerSetJuros} period={handlerSetPeriod}/>
        <Card value={initalValue} juros={juros} period={period}/>

      </div>
    );
}
