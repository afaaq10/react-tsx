import React from 'react'
import { Todo } from '../model'

interface Props {
    todo: Todo
    todos: Todo[]
    // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Card: React.FC<Props> = ({ todo }) => {
    return (
        <>

            <li>{todo.todo}</li>
        </>
    )
}

export default Card
