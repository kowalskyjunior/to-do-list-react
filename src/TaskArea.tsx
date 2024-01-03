import './App.css'
import './App'
import { taskType } from './Interface'

interface TaskAreaProps{
    tasksArray: taskType[]
    setTasksArray: React.Dispatch<React.SetStateAction<taskType[]>>;
}

export const TaskArea = ({tasksArray, setTasksArray}:TaskAreaProps) => {
    const handleRemoveTasks = (taskId: number) => {
        setTasksArray(tasksArray => tasksArray.filter(tasksArray => tasksArray.id !== taskId))
    }
  return (
    <div className='task-area'>
        {tasksArray.map((task) => (
        <div  key={task.id} className='task-wraper'>
            <h2>{task.tasks}</h2>
            <h2 className='close-btn' onClick={()=> handleRemoveTasks(task.id)}>X</h2>
        </div>
        ))}
    </div>
  )
}
