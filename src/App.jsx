import { useState } from "react"
import { TodoForm } from "./todoForm"
import { TodoList } from "./TodoList"



export default function App(){
  const [todos, setTodos] = useState([])

  function addTodo(title){
    setTodos(currentodos =>{
      return[
        ...currentodos,
        {id: crypto.randomUUID() , title, completed:false},
      ]
   })
  }


  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todos, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id ==! id)

    })
  }
  
  return (
   <>
    <TodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>

    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    
   </>
  )
}