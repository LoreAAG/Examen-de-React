import { useState } from "react";

const Cantidad=()=>{

const [number, setNumber]=useState(10);

const Sumar=()=>{
    setNumber(number<100? number +1:number )

}

const Restar=()=>{
    setNumber(number>0? number -1:number )
}


return(
    <div>
        <h1>{number}</h1>
        <button onClick={Sumar}>Incrementar</button>
        <button onClick={Restar}>Decrementar</button>
    </div>
    
)



}

export default Cantidad;