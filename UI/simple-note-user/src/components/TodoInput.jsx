import { useState } from "react"

export default function TodoInput(props){

    const { handleAddTodos } = props

    const [todoValue, setTodoValue] = useState('')

    return (
        <header>
            <input  placeholder="Enter todo..." />
            <button onClick={() => {handleAddTodos(todoValue)}}>Add</button>
        </header>
    )
}