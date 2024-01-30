import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(1);

    const increment = useCallback(  //Función memorizada
        (value) => {
            setCounter( (c)=> c + value);   //Así porque el counter esta memorizado y mandaria a llamr de nuevo la funcion en otro espacio de memoria
        },
        [],
    );

    // useEffect(() => {
    //     //increment();
    // }, [increment])
    
    
    // const increment = ()=>{
    //     setCounter( counter + 1);
    // }

    return (
        <>
            <h1>useCallback: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </>
    );
}
