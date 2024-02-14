import { useState } from "react";

const TodoList =()=>{
    const [list]=useState([
        {
            id:1,
            todo:"Hi Bk Good Morning",
        },
        {
            id:2,
            todo:"Hi Sulai Good Morning",
        },
        {
            id:3,
            todo:"Hi HU Good Morning",
        },
    ]);
    return(
        <div className="h-screen  bg-gray-100">
            <section id="title" className="flex justify-center">
                <h1 className="text-3xl font-semibold">Todo Tracker</h1>
            </section>
        <section id="search" className="flex justify-center p-10">
                <input className="w-54 h-10  border-gray-300 focus:outline-none focus:border-pink-600 rounded-md text-2xl mx-2 py-2 px-2"/>
                <button className="bg-pink-500 text-white px-2 py-2 rounded-md">Add Todo</button>
        </section>
        <section id="list" className="flex justify-center">
            <ul className="text-2xl">
                {list.map((todo,index)=>(

                <li key={index}><input type="checkbox" />{todo.todo}</li>
                ))}
               
            </ul>
        </section>
        </div>
    )   
}
export default TodoList