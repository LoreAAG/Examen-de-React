import {useState, useEffect} from 'react';

const ElementsListContainer=()=>{

const [productos, setProductos]=useState([])

useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=5')
        .then(res=>res.json())
            .then(json=>{setProductos(json)})
            console.log(productos)
},[productos]);



return(
    <div>
         { productos.length > 1 &&
            productos.filter().map((producto)=>{
             <div> 
                <img src={producto.image} alt={producto.title}/>

             </div> 
            })
        } 

    </div>
)

}





export default ElementsListContainer;