import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="my-2 card" key={todo.id}>
                    <span className="card-body"onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p>You dont have todo's left</p>
    )
    return (
        <div>
            {todoList}
        </div>
    )
}

export default Todos
