import React, { useState } from 'react'
import './App.css'
import { TaskArea } from './TaskArea'
import { taskType } from './Interface'

function App() {

  const [tasks, setTasks] = useState('')
  const [tasksArray, setTasksArray] = useState<taskType[]>([])

  const handleSubmit = () =>{

    if(tasks === ''){
      alert('Insira uma tarefa!')
      return;
    }

    const randomNumbers = Math.floor(Math.random() * 100) + 1;
    
    const addArray:taskType = {
      id: randomNumbers,
      tasks: tasks
    }
    setTasksArray([...tasksArray, addArray]);
    setTasks('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      handleSubmit()
    }
  }

  return (
    <div className='container'>
      <div className="sub-container">
      <h2 className='title'>Lista de Tarefas</h2>

      <input
        type='text' 
        onChange={e=>setTasks(e.target.value)}
        value={tasks}
        onKeyDown={handleKeyDown}/>

      <input
        type="submit"
        value={'Adicionar'}
        onClick={handleSubmit} />
    <TaskArea tasksArray={tasksArray} setTasksArray={setTasksArray}/>
      </div>
      <span className='author-name'>Coded by <a target='blank' href='https://github.com/kowalskyjunior' style={{textDecoration:'none'}}>Kowalsky Júnior</a></span>
    </div>//container

  )
}

export default App
