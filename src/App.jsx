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
import Advertisements from './componentes/Figma/pages/Advertisements'
import Navbar from './componentes/Navbar'
import Inbox from './componentes/Figma/pages/Inbox'
import Notifications from './componentes/Figma/pages/Notifications'
import Profile from './componentes/Figma/pages/Profile'

function App() {

  return (
    
    <div>
     <BrowserRouter>
     {/*<Navbar/>*/}
        <Figma2/>

    <Routes>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/inbox' element={<Inbox/>}/>
      <Route path='/noti' element={<Notifications/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/advert' element={<Advertisements/>}/>
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
      <Route path='/advertisements' element={<Advertisements/>}/>
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
