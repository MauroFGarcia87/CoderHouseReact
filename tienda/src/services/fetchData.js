import { products } from "../tempData/productos"

export default function fetchData(){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        }, 2000)
    })
}