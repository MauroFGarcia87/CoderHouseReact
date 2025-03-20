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
       
       <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Tienda</title>
       </head>
       <body>
          <header>
              <NavBar/>              
          </header>
          <main>
              <ItemListContainer mensaje="Bienvenida al tienda de Fly Fisging"/>
          </main>
          <footer></footer>
       </body>
       </html>
    </>
  )
}

export default App
