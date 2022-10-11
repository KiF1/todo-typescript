import { Itask } from '../App';
import { BsFillCheckCircleFill } from "react-icons/bs";
import './Card.css'

export interface TaskProps{
    task: Itask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Card({task, onDelete, onComplete}: TaskProps){

    return(
        <div className='card'>
            <div className='block'>
            <button className='check' onClick={()=> onComplete(task.id)} type='button'>{task.isCompleted ? <BsFillCheckCircleFill /> : <div/>}</button>
                <p className={task.isCompleted ? 'completed' : ''}>{task.content}</p>
                <button type='button' className='lixeira' onClick={()=> onDelete(task.id)}><img src="src/assets/lixeira.png" /></button>
            </div>
        </div>
    )
}