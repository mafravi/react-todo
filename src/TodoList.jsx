import { TodoItem } from "./TodoItem"

export function TodoList( {todos, toggleTodo, deleteTodo}){
    return (
        <ul>
          {todos.length === 0 && "No Todos"}
          {todos.map(todo =>{
            return(
             <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            )
          })}
      
        </ul>
    )
}