//rfc (segundo)
import React from 'react'
import propTypes from 'prop-types'

export default function EjProps3(props) {
  return (
    <div>
      <h2>Lista de propiedades de este componente funcional:</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano ? "Verdadero" : "Falso"}</li>
            <li>{props.array.join(", ")}</li>
            <li>{props.objeto.nombre + " - " + props.objeto.apellido} </li>{/**se puede usar templateString */}
            <li>{props.elementoReact}</li>
            <li>{props.array.map(props.funcion).join(", ")}</li>
            <li>{props.componenteReact}</li>
        </ul>
    </div>
  )
}
//gracias a protypes sale error su este valor no es un numero, 
// o no esta asignada la propiedad
EjProps3.propTypes = {
    numero: propTypes.number.isRequired,
}


