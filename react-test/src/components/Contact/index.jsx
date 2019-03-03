import React, {Component} from 'react';
import './index.css';

class Contact extends Component {
    render () {
        return (
            <div>
                <h2>
                    Formulario de contacto acá bien uwu
                </h2>
                <form action="">
                    <div id='input-parent'>
                        <input type="text" placeholder='Nombre'/>
                        <input type="text" placeholder='Email'/>
                        <input className='message' type="text" placeholder='Escribe tu mensaje'/>
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}

export default Contact;