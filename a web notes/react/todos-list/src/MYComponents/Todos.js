import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className='container'>
            <h3>Todos List</h3>
            {/* {props.todos} */}
            <TodoItem todo={props.todo[0]} />
        </div>
    )
}
