import * as C from './styles';
import { Item } from '../../types/itemList';
import { useState } from 'react';
//necessário criar um type para as props que o ListItem vai receber
type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label> {item.name} - {item.done.toString()}</label>
        </C.Container>

    )
}
