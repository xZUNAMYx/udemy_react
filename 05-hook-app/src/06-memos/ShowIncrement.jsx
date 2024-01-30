import React from "react";

export const ShowIncrement = React.memo(({increment}) => { //Memorizar nuestro componente hijo
    console.log('Me volví a generar :(');

    return (
        <>
            <button
                className="btn btn-outline-primary"
                onClick={()=>{
                    increment(5);
                }}
            >
                Incrementar
            </button>
        </>
    );
});
