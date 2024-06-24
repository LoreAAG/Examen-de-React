import {useState, useEffect} from 'react';

const Cantidad=()=>{

    const [productos, setProductos]=useState([])

    const [productosLimit, setProductosLimit]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
                .then(json=>{setProductos(json)})
              console.log(productos)
                },[]);


    const [number, setNumber]=useState(10);

    const Sumar=()=>{
    setNumber(number<100? number +1:number )

        }

    const Restar=()=>{
    setNumber(number>0? number -1:number )
            }

    /*const Limitar=()=>{
           for(let i=0;i<number;i++){
                setProductosLimit(productosLimit[i]=productos[i])
               }
                return(productosLimit)
            }

        Limitar()*/
    

return(
    <div>
        <h1>{number}</h1>
        <button onClick={Sumar}>Incrementar</button>
        <button onClick={Restar}>Decrementar</button>
        <div>
          { productos.length > 1 &&
          
           productos.map((producto)=>{
                return(
             <div> 
                <h2>{producto.title} </h2>
                <img src={producto.image} />
             </div> 
                )
            })
        }
    </div>
    </div>
    
    
)



}

export default Cantidad;