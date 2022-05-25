import React from 'react'
import { Todo } from '../model'
import Card from './Card'
interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodosList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div>
            {todos.map((todo) => <Card todo={todo} todos={todos} />)}


        </div>
    )
}

export default TodosList
