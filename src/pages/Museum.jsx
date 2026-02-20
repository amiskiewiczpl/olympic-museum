import { useMemo, useState } from 'react'
import ExhibitView from '../components/ExhibitView'
import KeyboardNav from '../components/KeyboardNav'
import TimelineBar from '../components/TimelineBar'
import { olympicsTimeline } from '../data/olympicsTimeline'

function Museum() {
  const [activeId, setActiveId] = useState(olympicsTimeline[olympicsTimeline.length - 1]?.id ?? null)

  const activeIndex = useMemo(
    () => olympicsTimeline.findIndex((edition) => edition.id === activeId),
    [activeId],
  )

  const activeEdition = activeIndex >= 0 ? olympicsTimeline[activeIndex] : null

  function goToIndex(nextIndex) {
    const clamped = Math.max(0, Math.min(olympicsTimeline.length - 1, nextIndex))
    const nextEdition = olympicsTimeline[clamped]

    if (nextEdition) {
      setActiveId(nextEdition.id)
    }
  }

  function handlePrev() {
    if (activeIndex >= 0) {
      goToIndex(activeIndex - 1)
    }
  }

  function handleNext() {
    if (activeIndex >= 0) {
      goToIndex(activeIndex + 1)
    }
  }

  return (
    <main className="museum-layout">
      <KeyboardNav onPrev={handlePrev} onNext={handleNext} />
      <ExhibitView edition={activeEdition} />
      <TimelineBar
        editions={olympicsTimeline}
        activeId={activeId}
        activeIndex={activeIndex}
        onSelect={setActiveId}
      />
    </main>
  )
}

export default Museum
