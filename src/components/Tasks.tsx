import { Itask } from "../App";
import {Card} from './Card';
import './Tasks.css';


interface Props{
    tasks: Itask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
  }

export function Tasks({tasks, onDelete, onComplete}: Props){
    const iscomleted = tasks.filter((tasks)=> tasks.isCompleted).length;
    const taskQuantity = tasks.length;

    return(
        <div className='bloco'>
            <div className='div-centro'>
                <div className='block'>
                <strong className='strong-1'>Tarefas Criadas</strong>
                <div>
                <span>{taskQuantity}</span>
                </div>
            </div>

            <div className='block'>
                <strong className='strong-2'>Tarefas Concluidas</strong>
                <div>
                <span>{iscomleted} de {taskQuantity}</span>
                </div>
            </div>
            </div>
            {tasks.map(task =>(<Card key={task.id} onComplete={onComplete} onDelete={onDelete} task={task}  />))}
            {tasks.length <= 0 &&(
            <div className='container'>
                <div className="lista-vazia">
                <img src="src/assets/clipboard.png" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              </div>
            )}
        </div>
    )
}