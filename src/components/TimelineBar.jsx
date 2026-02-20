function TimelineBar({ editions, activeId, onSelect }) {
  return (
    <nav aria-label="Olympic editions timeline">
      <ul>
        {editions.map((edition) => {
          const isActive = edition.id === activeId

          return (
            <li key={edition.id}>
              <button
                type="button"
                onClick={() => onSelect(edition.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span>{edition.year}</span>
                <span>{edition.city}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TimelineBar
