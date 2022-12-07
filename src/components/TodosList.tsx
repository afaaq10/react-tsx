import React from 'react'
import { Todo } from '../model'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import Card from './Card'
interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodosList: React.FC<Props> = ({ todos, setTodos }) => {

    const Delete = (id: number) => {

        setTodos(todos.filter((todo) => todo.id !== id))

    }
    const Done = (id: number) => {

        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))

    }

    return (
        <>
            {
                todos.map((todo, key) =>
                    <>
                        <div className="text-center ">
                            < Card key={key} todos={todos} todo={todo} setTodos={setTodos} />

                        </div>

                        <table className="table-auto mx-auto mt-0">
                            <thead className="mx-10">
                                <tr >
                                    <th>Number</th>

                                    <th>Item </th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                    <th>Completed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="key text-white text-center"> {key + 1}</td>
                                    <td>{todo.todo}</td>
                                    <td>{<span title="delete note" className="delete" onClick={() => Delete(todo.id)} ><DeleteIcon className="delete-react" /></span>}</td>
                                    <td>{<span title="completed" className="edit " onClick={() => Done(todo.id)} ><DoneIcon /></span>}</td>
                                    <td>{
                                        todo.isDone && <s className="text-white">{todo.todo}</s>
                                    }
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        )
                    </>
                )

            }




        </>

    )
}

export default TodosList
