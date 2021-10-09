import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './types/itemList';

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
      done: false
    }
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header> Lista de Atividades </C.Header>

        {/* Area de adicionar nova tarefa*/}
        {list.map((item, index) => (
          <div> {item.name}</div>
        ))}

      </C.Area>
    </C.Container>

  );
}

export default App;