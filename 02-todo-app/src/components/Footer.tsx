import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeTodos: number
  completedTodos: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeTodos = 0,
  completedTodos = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodos}</strong> {activeTodos > 1 ? 'tasks pending' : 'task pending'}
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {
        completedTodos > 0 && (
          <button className='clear-completed'
          onClick={onClearCompleted}
          >
            Clear completed tasks
          </button>
        )
      }
    </footer>
  )
}
