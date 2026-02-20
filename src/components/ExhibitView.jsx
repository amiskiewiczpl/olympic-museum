function ExhibitView({ edition }) {
  if (!edition) {
    return <section aria-live="polite">No edition selected.</section>
  }

  return (
    <article aria-labelledby="edition-title">
      <header>
        <p>{edition.season}</p>
        <h1 id="edition-title">{edition.title}</h1>
        <p>
          {edition.city}, {edition.country} | {edition.dates}
        </p>
      </header>

      <p>{edition.summary}</p>

      <section aria-labelledby="highlights-heading">
        <h2 id="highlights-heading">Highlights</h2>
        <ul>
          {edition.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="medals-heading">
        <h2 id="medals-heading">Medal table</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Country</th>
              <th scope="col">G</th>
              <th scope="col">S</th>
              <th scope="col">B</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {edition.medalTableTop.map((entry) => (
              <tr key={`${edition.id}-${entry.country}`}>
                <td>{entry.rank}</td>
                <td>{entry.country}</td>
                <td>{entry.gold}</td>
                <td>{entry.silver}</td>
                <td>{entry.bronze}</td>
                <td>{entry.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section aria-labelledby="sources-heading">
        <h2 id="sources-heading">Sources</h2>
        <ul>
          {edition.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default ExhibitView
