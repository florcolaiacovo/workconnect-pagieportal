/* para generar rcc
componente tipo clase  */

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Componente extends Component {

    render() {
        return (
            <div>
            <h3>Este es un Componente</h3>
            <h4>Componente personalizado con react-bootstrap</h4>
            <Button variant="primary">Primary</Button>{' '}
            </div>
            
        );
            }

    }



export default Componente;
