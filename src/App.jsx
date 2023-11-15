import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, {Suspense} from 'react'
import { Menu } from './components/Menu.jsx'
import { Home } from './pages/home.jsx'
import { Button,useColorMode } from '@chakra-ui/react'

const Tareas = React.lazy(()=> import("./pages/Tareas"));
const SobreNosotros = React.lazy(()=> import("./pages/SobreNosotros"));


function App() {

  const {toggleColorMode}= useColorMode();
  return(
        <div>
      <h1 className='titulomenu'>Bienvenidos a Mi Lista de Tareas</h1>
      <BrowserRouter>
      <Menu/>
        <Suspense fallback={'Cargando...'}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/tareas" element={<Tareas />} />
          <Route path="/pages/sobrenosotros" element={<SobreNosotros />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Button onClick={toggleColorMode}>Color Mode</Button>
    </div>
    
  )
  }
  
  
export default App;
