import { useState } from 'react'
import { type TodoId, type ListOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodos: ({ id }: TodoId) => void
  onHandleCompleted: ({ id }: TodoId) => void
  handleUpdateTitle: ({ id, title }: { id: string, title: string }) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodos, onHandleCompleted, handleUpdateTitle }) => {
  const [isEditing, setIsEditing] = useState('')

  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li
        key={todo.id}
        onDoubleClick={() => { setIsEditing(todo.id) }}
        className={`${todo.completed ? 'completed' : ''} ${isEditing === todo.id ? 'editing' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title = {todo.title}
            completed={todo.completed}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onRemoveTodo={onRemoveTodos}
            onHandleCompleted={onHandleCompleted}
            handleUpdateTitle={handleUpdateTitle}
            />
        </li>
      ))}
    </ul>
  )
}
