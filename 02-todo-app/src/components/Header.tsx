import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        todo
        <img
          src="https://static.thinkster.io/topics/ts.png"
          style={{ width: '70px', height: 'auto' }}
        />
      </h1>
      <CreateTodo onAddTodo={onAddTodo} />
    </header>
  )
}
