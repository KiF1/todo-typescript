import './App.css'
import {useState } from 'react';
import { Tasks } from './components/Tasks';
import { Header } from './components/Header';

export interface Itask{
  id: string;
  content: string;
  isCompleted: boolean
}




function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);

  function handleTask(taskTitle: string){
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      content: taskTitle,
      isCompleted: false
    }]);
  }


  function deleteComent(taskId: string){
    const comentsWithoutDeletedOne = tasks.filter(task => task.id !== taskId)
    setTasks(comentsWithoutDeletedOne);
  }

  function isCompleteTask(taskId: string){
    const newTasks = tasks.map((task) => {
      if(task.id == taskId){
        return{
        ...task,
        isCompleted: !task.isCompleted,
      }
    }
      return task;
    });
    setTasks(newTasks);
  }



return(
  <div>
    <Header onHandleTasks={handleTask} />
    <Tasks onComplete={isCompleteTask} onDelete={deleteComent} tasks={tasks} />
  </div>
)
}

export default App
