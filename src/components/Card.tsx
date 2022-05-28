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
        <div className="card text-black ">

            <div className="text-black mt-5 font-bold" >

                {
                    todo.isDone ? <s className="text-white">{todo.todo}</s> : <span className="text-white mt-5 mx-5" >{todo.todo}</span>
                }


            </div>




            <div className="wrapper-icon m-2 mt-2 div-delete">
                <span title="delete note" className="delete" onClick={() => Delete(todo.id)} ><MdDelete className="delete-react" /></span>

            </div>
            <div className=" div-edit" >
                <span title="completed" className="edit mt-2" onClick={() => Done(todo.id)} ><MdFileDownloadDone /></span>
            </div>

        </div>
    )
}



export default Card
