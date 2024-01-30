import { useEffect} from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const {username, email, password} = formState; desestructurando con el operador espred en useForm() podemos evitar esta linea

    return (
        <>
            <h1>Form with custom hook</h1>
            <hr />
            
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {
                (username === 'zunamy2') && <Message />
            }

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="correo@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
        </>
    )
}
