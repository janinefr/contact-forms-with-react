import React from 'react'
import './CampoTexto.css'



const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)

    }

  return (

    <div className='container'>
      <div className='campo-texto'>
        <label>
            {props.label}
        </label>
        <input  type={props.tipo || 'text'} value={props.valor} onChange={aoDigitado} required={props.obrigatorio}/>
    </div>

    </div>
    
  )
}

export default CampoTexto

// props contem todas as propriedades do componente
