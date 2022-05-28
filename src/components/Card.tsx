import React from 'react'
import { Todo } from '../model'
import { MdDelete } from 'react-icons/md'

import { MdFileDownloadDone } from 'react-icons/md'
interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    key: number


}




const Card: React.FC<Props> = ({ todo, todos, setTodos, key }) => {




    const Delete = (id: number) => {

        setTodos(todos.filter((todo) => todo.id !== id))

    }
    const Done = (id: number) => {

        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))

    }

    return (
        <div className="card text-white ">
            <p id="demo" className="text-white"></p>
            <div className="text-white mt-5" >


                {
                    todo.isDone ? <s className="text-black">{todo.todo}</s> : <span className="mt-5 mx-5" >{todo.todo}</span>
                }

            </div>




            <div className="wrapper-icon m-2 mt-2 ">
                <span title="delete note" className="delete" onClick={() => Delete(todo.id)} ><MdDelete /></span>

            </div>
            <div  >
                <span title="completed" className="edit mt-2" onClick={() => Done(todo.id)} ><MdFileDownloadDone /></span>
            </div>

        </div>
    )
}



export default Card
