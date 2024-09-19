import React from 'react'
import './Forms.css'
import CampoTexto from '../CampoTexto';
import Button from '../Button'
import Checkbox from '../Checkbox';
// import React { useState } from 'react';

const Forms = () => {

    // const [firstName, setfirstName] = useState('')
    return (
        <section className="formulario">
            
            <form>
                <h2>Contact Us</h2>
                <CampoTexto
                label='First Name'
            />
                <CampoTexto
                label='Last Name'
            />
                <CampoTexto
                label='Email Adress'
            />
            
            <Checkbox label="I consent to being contatect by the team *"/>
            <Button>Submit</Button>
            
            </form>
            

        </section>
       
    )
        
  
}

export default Forms;