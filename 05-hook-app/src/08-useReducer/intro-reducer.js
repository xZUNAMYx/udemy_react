const initialState = [{
    id: 1,
    todo: 'Recolectar las piedras del infinito',
    done: false,
}];

const todoReducer = (state = initialState, action = {})=> {
    if (action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Reoclectar la piedra del alma',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',    //Es estandar en React usar el type asi, esta es la acción
    payload: newTodo,   //Esto es lo que va dentro de la acción
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos});