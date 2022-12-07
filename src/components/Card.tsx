import React from 'react'
import { Todo } from '../model'



import { MdFileDownloadDone } from 'react-icons/md'
interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    key: number


}




const Card: React.FC<Props> = ({ todo, todos, setTodos, key }) => {




   

    return (
        <div className="card text-black mt-5 ">

            <div className="flex1">


                <div className="text-black  font-bold" >

                    

                </div>

            </div>


         

        </div>
    )
}



export default Card
