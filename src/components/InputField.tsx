import React from 'react'
import '../App.css';
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: () => void

}
const InputField = ({ todo, setTodo, handleAdd }) => {

    const inputRef = React.useRef(null);
    React.useEffect(() => {
        inputRef.current.focus();
    }, []);



    const Change = (e) => {
        setTodo(e.target.value)
    }


    return (
        <div className="App" >

            <form onSubmit={handleAdd}>

                <input type="text" placeholder="enter your note" onChange={Change} value={todo}
                    ref={inputRef}
                />
                <button  >Add</button>
            </form>

        </div>
    )
}



export default InputField
