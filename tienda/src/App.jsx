import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>       
          <header>
              <NavBar/>              
          </header>
          <main>
              <ItemListContainer mensaje="Bienvenida al tienda de Fly Fisging"/>
          </main>
          <footer>
            
          </footer>
       
       
    </>
  )
}

export default App
