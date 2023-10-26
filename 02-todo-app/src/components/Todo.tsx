import { useEffect, useRef, useState } from 'react'
import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  isEditing: string
  setIsEditing: (completed: string) => void
  onRemoveTodo: ({ id }: TodoId) => void
  onHandleCompleted: ({ id }: TodoId) => void
  handleUpdateTitle: ({ id, title }: { id: string, title: string }) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  isEditing,
  setIsEditing,
  onRemoveTodo,
  onHandleCompleted,
  handleUpdateTitle
}) => {
  const [editedTitle, setEditedTitle] = useState(title)
  const inputEditTitle = useRef<HTMLInputElement>(null)

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      setEditedTitle(editedTitle.trim())
      if (editedTitle !== title) {
        handleUpdateTitle({ id, title: editedTitle })
      }
      if (editedTitle === '') onRemoveTodo({ id })
      setIsEditing('')
    }
    if (e.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing('')
    }
  }

  useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  return (
    <>
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
      <input
        className='edit'
        value={editedTitle}
        onChange={(e) => { setEditedTitle(e.target.value) }}
        onKeyDown={handleKeyDown}
        onBlur={() => { setIsEditing('') }}
        ref={inputEditTitle}
      />
    </>
  )
}
