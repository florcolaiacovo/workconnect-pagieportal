import './App.css'
import EjProp1 from './propiedades/EjProp1'
import EjProp2 from './propiedades/EjProp2'
import EjProps3 from './propiedades/EjProps3'
import Componente from './componentes/Componente'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import Navbar from './componentes/Navbar'
//import AlwaysOpenExample from './componentes/ComponenteFuncion' borrado, importado de react-bootstrap
//import WithLabelExample from './componentes/ProgressBar' idem
import Figma2 from './componentes/Figma/Figma2'

function App() {

  return (
    
    <div>
     <BrowserRouter>
     {/*<Navbar/>*/}
    <Routes>
      <Route path="/" element={<h1>ruta de prueba</h1>}>
      </Route>
      <Route path='/figma-pagie' element={<Figma2/>}/>
      <Route path="/rutanueva" element={<Componente/>}/>
      <Route path="/ej1" element={<EjProp1 saludo="prop"/>}/>
      <Route path="/ej2" element={<EjProp2 comp={"propiedad de componente"}/>}/>
      <Route path='/ej3' element={<EjProps3
        cadena={"Este es una prop en cadena"} 
        numero={20} 
        booleano={true}
        array={[1, 2, 3, 4, 5]}
        objeto={{nombre: "pepito", apellido: "elmisterioso"}}
        elementoReact={<i>Esto es un elemento react</i>}
        funcion={num => num*num}
        componenteReact={<Componente> Este es el children del componente</Componente>}/>}/>
        <Route path='/comp' element={<Componente />}/>
    </Routes>
  </BrowserRouter>

      {/**Es ComponenteFuncion.jsx */}
      {/*<AlwaysOpenExample/>*/}
      {/**PrgressBar.jsx */}
      {/*<WithLabelExample/>*/}
      
        
    
    </div>
  )
}

export default App
