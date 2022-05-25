import React from 'react';
import InputField from './components/InputField'
import TodosList from './components/TodosList'
import './App.css';
import { Todo } from './model'

function App() {

  const [todo, setTodo] = React.useState("")
  const [todos, setTodos] = React.useState<Todo[]>([])

  const handleAdd = (e) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }

  }
  console.log(todos)
  return (
    <div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
