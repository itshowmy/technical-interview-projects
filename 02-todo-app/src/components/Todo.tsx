import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onHandleCompleted: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onHandleCompleted }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => {
          onHandleCompleted({ id })
        }}
      />
      <label>
        {title}
      </label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
