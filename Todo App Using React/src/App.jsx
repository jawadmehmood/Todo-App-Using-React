import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([])

  function addTodo(event){
    event.preventDefault();
    console.log(text);
    setTodo([...todo , text])
    setText('')
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='Enter Todo' onChange={(e) => setText(e.target.value)} value={text}/>
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todo.map((item , index) => {
          return <div>
            <li key={index}>{item}
              <button>Delete</button>
              <button>Edit</button>
            </li>
          </div>
        })}
      </ul>
    </>
  )
}

export default App
