export function TodoItem({completed, id, title,toggleTodo, deleteTodo}){
    return (
    <il>
        <label>
 
         <input type="checkbox" onChange={e => toggleTodo(id, e.target.checked)} checked={completed}/>
         {title}
 
        </label>
         <button onClick={() =>deleteTodo(id)} className="btn">Delete</button>
    </il>
    )
}