import React from 'react'
import '../App.css';
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: () => void

}
const InputField = ({ todo, setTodo, handleAdd }) => {


    const Change = (e) => {
        setTodo(e.target.value)
    }


    return (
        <div className="App" >

            <form onSubmit={handleAdd}>

                <input type="text" placeholder="enter your note" onChange={Change} value={todo} />
                <button  >Add</button>
            </form>

        </div>
    )
}



export default InputField
