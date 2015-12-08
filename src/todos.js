import { List } from 'immutable';
import uuid from 'node-uuid';

export default List.of(
    {
        text: 'Do some stuff',
        done: false
    },
    {
        text: 'Eat stuff',
        done: true
    },
    {
        text: 'Buy new TV',
        done: false
    },
).map(todo => {
    return {
        ...todo,
        id: uuid.v4()
    }
})
