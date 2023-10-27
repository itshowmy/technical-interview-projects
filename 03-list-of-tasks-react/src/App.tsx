import { useState } from 'react'
import './App.css'

type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemId
  text: string
}

const MOCK_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    text: 'games'
  },
  {
    id: crypto.randomUUID(),
    text: 'books'
  },
  {
    id: crypto.randomUUID(),
    text: 'food'
  }
]

function App () {
  const [items, setItems] = useState(MOCK_ITEMS)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const { elements } = event.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value.trim()
    }

    const newITems = [...items, newItem]
    setItems(newITems)

    input.value = ''
  }

  const handleRemoveItem = (id: ItemId) => () => {
    const newItems = items.filter(prevItem => prevItem.id !== id)
    setItems(newItems)
  }

  return (
    <main>
      <aside>
        <h1>Technical interview with React</h1>
        <h3>Add and delete elements from a list</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Add an element:
            <input
              name='item'
              required
              type='text'
              placeholder='Go shopping ...'
            />
          </label>
          <button>Add</button>
        </form>
      </aside>
      <section>
        <h2>List of elements</h2>
          {
            items.length === 0
              ? (
              <strong> There are no elements on the list</strong>
                )
              : (
                  <ul> {
                    items.map(item => {
                      return (
                        <li key={item.id}>
                          {item.text}
                          <button
                            onClick={handleRemoveItem(item.id)}
                          >
                          Delete
                          </button>
                        </li>
                      )
                    })
                  } </ul>
                )
          }
      </section>
    </main>
  )
}

export default App
