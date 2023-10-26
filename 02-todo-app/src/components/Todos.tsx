import { type TodoId, type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodos: ({ id }: TodoId) => void
  onHandleCompleted: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodos, onHandleCompleted }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li
        key={todo.id}
        className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title = {todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodos}
            onHandleCompleted={onHandleCompleted}
            />
        </li>
      ))}
    </ul>
  )
}
