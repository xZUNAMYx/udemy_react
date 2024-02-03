import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = ()=>{
    // useTodo
    // todos, handleNewTodo, handleToggleTodo, handleDeleteTodo
    const {todos, todosCount, pendisTodosCount, handleNewTodo, handleToggleTodo, handleDeleteTodo} = useTodo();

    // TODO: implementar función
    
    return (
        <>
            <h1>TodoApp: {todosCount}, <small>Pendientes: {pendisTodosCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList recibe de propertips todos */}
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                    {/* Fin TodoList */}
                </div>

                <div className="col">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/**TodoAdd onNewTodo(todo) */}
                    {/* {id: newDate()..., description: '', done: false} */}
                    <TodoAdd onNewTodo={handleNewTodo}/>
                    {/* Fin TodoAdd */}
                </div>
            </div>

            
        </>
    );
}
