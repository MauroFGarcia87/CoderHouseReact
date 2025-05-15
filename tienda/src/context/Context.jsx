
import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { useParams } from "react-router";
import { fetchData } from "../services/fetchData";
import { getProducts } from "../services/firebaseServices";


export const GlobalStates = createContext();

const ContextProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [list, setList] = useState([]);    
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    //getProducts()

    //LLamar a firebase
    useEffect(() => {
      setLoading(true);
       getProducts() 
          .then(data => {
           
              setList(data); 
             
            
            setLoading(false);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
            // Aquí podrías mostrar un mensaje de error al usuario

          });
      }, []); // El efecto se re-ejecuta cuando cambia la categoría
    
      const calcularItems = cart.reduce((total, prod) => {
        return total + prod.quantity
      }, 0);

      const calcularTotal = cart.reduce((total, prod) => {
        return total + (prod.quantity * prod.price)
      }, 0);
      
       
      

    return <GlobalStates.Provider value={{cart, setCart, list, setList, loading, setLoading, calcularTotal, calcularItems}}>{children}</GlobalStates.Provider>

}

export default ContextProvider

export const useGlobalState = () =>{
    return useContext(GlobalStates)
}