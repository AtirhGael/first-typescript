import React, { useState } from 'react';
import './App.css';
import Input from './component/Input';
import { Todo } from './component/model';
 


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if (todo){
      setTodos([...todos, {id: Date.now(), todo,isDone:false}])
      setTodo('');
    }
    console.log(todos);
    
  }
  
  return (
    <div className="App">
    <span className='heading' > Taskify </span>
      <Input todo={todo} setTodo={setTodo}  handleAdd={handleAdd}/>
      {todos.map((t) =>(
        <ul>
          <li>
            {t.todo}
          </li>
        </ul>
      ))} 
    </div>
  );
}

export default App;
