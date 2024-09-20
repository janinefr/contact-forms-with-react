import './Forms.css'
import CampoTexto from '../CampoTexto';
import Button from '../Button'
import Checkbox from '../Checkbox';
import React, { useState } from 'react';

const Forms = (props) => {

    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            firstName,
            lastName,
            email,
            message
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Contact Us</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='First Name'
                    valor={firstName}
                    aoAlterado={valor => setfirstName(valor)}
            />
                <CampoTexto
                    obrigatorio={true}
                    label='Last Name'
                    valor={lastName}
                    aoAlterado={valor => setLastName(valor)}
            />
                <CampoTexto
                    obrigatorio={true}
                    tipo="email"
                    label='Email Adress'
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
            />
                <CampoTexto
                        obrigatorio={true}
                        label='Message'
                        valor={message}
                        aoAlterado={valor => setMessage(valor)}
                />
            <Checkbox 
                obrigatorio={true}
                label="I consent to being contatect by the team *"/>
            <Button>Submit</Button>
            
            </form>
            

        </section>
       
    )
        
  
}

export default Forms;