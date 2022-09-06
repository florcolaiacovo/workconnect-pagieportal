//
import React, { Component } from 'react';

class EjProp1 extends Component {
    render() {
        return (
            <div>
                <h2>Esta es una propiedad: {this.props.saludo}</h2>
            </div>
        );
    }
}

export default EjProp1;