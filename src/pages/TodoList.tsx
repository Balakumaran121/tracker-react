import React, { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState<{ text: string; checked: boolean }[]>([])
  const [newTodo, setNewTodo] = useState<string>('')

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo.trim(), checked: false }])
      setNewTodo('')
    }
  }

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleToggleTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].checked = !newTodos[index].checked
    setTodos(newTodos)
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Todo Traker
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            An app to track your day to day activites.
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Enter Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleAddTodo}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add
          </button>
        </div>
        <section className="flex justify-center items-center p-5 m-5 gap-5">
          <ul>
            {todos.map((todo, index) => {
              const { checked, text } = todo

              const handleToggle = () => {
                handleToggleTodo(index)
              }

              const handleDelete = () => {
                handleDeleteTodo(index)
              }

              return (
                <li key={index} style={{ display: 'flex' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      className="px-3"
                      type="checkbox"
                      checked={checked}
                      onChange={handleToggle}
                    />
                    <span
                      className="ml-5 text-2xl font-mono"
                      style={{
                        textDecoration: checked ? 'line-through' : 'none',
                      }}
                    >
                      {text}
                    </span>
                    <button
                      className="bg-indigo-500 hover:bg-indigo-600 rounded-md text-white px-2 py-1 shadow-md ml-5"
                      style={{ margin: '5px' }}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </section>
  )
}

export default TodoList
