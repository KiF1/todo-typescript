
import { ChangeEvent, FormEvent, useState } from 'react';
import './Header.css';

interface Props {
    onHandleTasks: (taskTitle: string) => void;
  }

export function Header({onHandleTasks}: Props){
    const [text, setText] = useState('');

    function handleText(event: ChangeEvent<HTMLInputElement>){
        setText(event.target.value);
      }

      function handleSubmit(event: FormEvent) {
        event.preventDefault();
        onHandleTasks(text);
        setText("");
      }

    return(
        <header>
              <img src="src/assets/rocket.png" />
              <h1>To<span>do</span></h1>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Adicione uma Tarefa' value={text} onChange={handleText} />
                <button type='submit'>Criar<img src="src/assets/plus.png" /></button>
              </form>
      </header>
    )
}