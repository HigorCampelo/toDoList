import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './types/itemList';
import { ListItem } from './components/ListItem';  //vai entrar na pasta e procurar o arquivo index
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Estudar ReactJS',
      done: false
    },
    {
      id: 2,
      name: 'Estudar 1 hora de Inglês',
      done: true
    }
  ]);

  const handleAddTask = (taskName: string) => {
    let newlist = [...list]; //clona a lista
    newlist.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newlist);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header> Lista de Atividades </C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>

  );
}

export default App;