import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = ()=>{
        // document.querySelector('input').select();
        // document.querySelector('input').focus();
        inputRef.current.focus();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={inputRef}
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />
        <input 
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />
        <input 
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={onClick}
        >
            Set focus
        </button>
    </>
  );
}