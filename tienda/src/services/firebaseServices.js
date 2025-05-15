import { async } from "@firebase/util";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

//Servicio para obtener la lista de productos
export const getProducts = async() => {
    const prodCollection = collection(db, "Productos");
    const productos = await getDocs(prodCollection);
    return productos.docs.map((doc) =>({id: doc.id, ...doc.data()}));
}

//Servicios para obtener un elemento de la lista
export const getProducById = async (id) => {
    const proDoc = doc(db, "Productos", id)
    const  producto = await getDoc(proDoc)
    return{id: producto.id, ...producto.data()}
}

//Servicio para filtrar por categoria

export const getCategory = async (category) => {
    const prodCollection = collection(db, "Productos");
    const q = query(prodCollection, where('categoria', '==', category));
    const  productos = await getDocs(q);
    return productos.docs.map((doc) =>({id: doc.id, ...doc.data()}));
}

//Servicio para crear Orden

export const createOrder = async (newOrder) => {

    try {
        const orderCollection = collection(db, "Ordenes");
        const orderDoc = await addDoc(orderCollection, newOrder);
       
        return orderDoc;
    } catch (error) {
        console.log(error);
    }
   

}

//Servicio para obtener la orden creada