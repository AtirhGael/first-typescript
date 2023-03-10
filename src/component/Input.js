import React, { useRef } from 'react'
import './style.css'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}

function Input({todo, setTodo,handleAdd}:Props) {

  const inputRef = useRef<HTMLInputElement>(null); //making the background change after input field

  return (
    <form className='input' 
    onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
      }}>
        <input 
        ref={inputRef}
        type='text' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='enter the name of your task' className='input_box'/>
        <button type='submit' className='btn_submit' > Go </button>
    </form>
  )
}

export default Input