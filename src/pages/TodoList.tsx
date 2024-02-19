import React, { useState}from "react";


const TodoList =()=>{

    const [todos,setTodos] = useState([]);
    const [newTodo, setNewTodo]=useState("");


    const handleAddTodo =()=>{
        if(newTodo.trim() !==""){
            setTodos([...todos, {text: newTodo.trim(),checked:false}])
            setNewTodo("");
        }
    };

    const handleDeleteTodo = (index)=>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);

    }
    const handleToggleTodo =(index)=>{
        const newTodos = [...todos];
        newTodos[index].checked=! newTodos[index].checked;
        setTodos(newTodos)
    };
    return (
        <div className=" h-screen flex items-center justify-center bg-gray-200  ">
            <div className="w-full max-w-md m-8 p-8 bg-white rounded-lg shadow-md">
            <section className="flex justify-center"> 
                <h1 className="text-3xl font-extrabold mb-10">Todo-List</h1>
                </section>
            <section className="flex justify-center ">
            <input className="bg-white" placeholder="Enter Today Task" type="text" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}/>
            <button  className="bg-pink-500 text-white px-2 py-2 ml-5 rounded-md"onClick={handleAddTodo}>Add</button>
            </section>
            <section> 
            <ul>
            {todos.map((todo, index)=>(

                <li key={index} style={{display:"flex"}}>
                    <div style={{display:"flex",alignItems:"center"}}>
                    <input type="checkbox" 
                    checked={todo.checked} 
                    onChange={()=>handleToggleTodo(index)}
                    />

                    <span  className="ml-2 font-mono"
                     style={{textDecoration: todo.checked ? "line-through" : "none",}}>
                        {todo.text }
                    </span>
                    <button  className="  bg-pink-500 rounded-md text-white px-2 py-2 shadow-md ml-5"style={{margin:"5px"}}onClick={()=> handleDeleteTodo(index)}>Delete

                    </button>
                    </div>
                    
                </li>
            ))}
           </ul>
            </section>
           
           
            </div>
        </div>
    )
}
export default TodoList;