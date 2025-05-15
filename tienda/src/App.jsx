import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ItemDetailCotainer from './pages/ItemDetailCotainer';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';






function App() {
  const [count, setCount] = useState(0)

  return (
    <>       
          <header>
              <NavBar/>  
              <Routes>
              <Route path="/" element={<ItemListContainer />} />              
              <Route path="/products/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailCotainer />} />
              <Route path='/checkout' element ={<Checkout /> }></Route>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/contacto' element={<Contact/>}/>
              <Route path="*" element={<h1>Page not Found - Error 404</h1>} /> 
              </Routes>            
          </header>
          <main>
            
              
          </main>
          <footer>
            
          </footer>
       
       
    </>
  )
}

export default App
