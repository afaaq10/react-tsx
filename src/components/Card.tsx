import React from 'react'
import { Todo } from '../model'

import { MdDelete } from 'react-icons/md'

import { MdFileDownloadDone } from 'react-icons/md'
interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const Card: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const Delete = (id: number) => {

        setTodos(todos.filter((todo) => todo.id !== id))

    }
    const Done = (id: number) => {

        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))

    }
    return (
        <div className="card">

            {
                todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>
            }




            <div className="wrapper-icon">
                <span className="delete" onClick={() => Delete(todo.id)} ><MdDelete /></span>
            </div>
            <div >
                <span className="edit" onClick={() => Done(todo.id)} ><MdFileDownloadDone /></span>
            </div>
        </div>
    )
}

export default Card
