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
            {
                todos.map((todo, key) =>

                    <>
                        < Card key={key} todos={todos} todo={todo} setTodos={setTodos} />
                        <div className="key text-white text-center">
                            {key + 1}
                        </div>
                    </>
                )
            }


        </div>
    )
}

export default TodosList
