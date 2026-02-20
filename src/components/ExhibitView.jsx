function ExhibitView({ edition }) {
  if (!edition) {
    return <section className="exhibit" aria-live="polite">No edition selected.</section>
  }

  const isCancelled = edition.status === 'cancelled'

  return (
    <article className="exhibit" aria-labelledby="edition-title">
      <header className="exhibit-header">
        <p className="exhibit-kicker">{edition.season === 'Winter' ? 'Igrzyska zimowe' : 'Igrzyska letnie'}</p>
        <h1 id="edition-title">{edition.title}</h1>
        <p className="exhibit-meta">
          {edition.city}, {edition.country} | {edition.dates}
        </p>
        {isCancelled ? <p className="exhibit-status">Edycja odwołana</p> : null}
      </header>

      <p className="exhibit-summary">{edition.summary}</p>

      <section aria-labelledby="highlights-heading">
        <h2 id="highlights-heading">Ciekawostki</h2>
        <ul>
          {edition.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="medals-heading">
        <h2 id="medals-heading">Tabela medalowa</h2>
        {edition.medalTableTop.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Państwo</th>
                <th scope="col">Z</th>
                <th scope="col">S</th>
                <th scope="col">B</th>
                <th scope="col">Razem</th>
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
        ) : (
          <p className="exhibit-note">Dla tej edycji tabela medalowa nie została jeszcze dodana do ekspozycji.</p>
        )}
      </section>

      <section aria-labelledby="sources-heading">
        <h2 id="sources-heading">Źródła</h2>
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
