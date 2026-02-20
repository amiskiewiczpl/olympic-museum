import { useEffect, useMemo, useRef } from 'react'

function clampDistance(distance) {
  return Math.min(6, Math.abs(distance))
}

function TimelineBar({ editions, activeId, activeIndex, onSelect }) {
  const trackRef = useRef(null)
  const itemRefs = useRef(new Map())
  const suppressAutoSelectRef = useRef(false)
  const suppressTimeoutRef = useRef(null)
  const dragStateRef = useRef({
    dragging: false,
    pointerId: null,
    startX: 0,
    startScrollLeft: 0,
  })

  useEffect(() => {
    const activeNode = itemRefs.current.get(activeId)

    if (activeNode) {
      suppressAutoSelectRef.current = true
      if (suppressTimeoutRef.current) {
        clearTimeout(suppressTimeoutRef.current)
      }
      activeNode.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })

      suppressTimeoutRef.current = setTimeout(() => {
        suppressAutoSelectRef.current = false
      }, 280)
    }
  }, [activeId])

  useEffect(
    () => () => {
      if (suppressTimeoutRef.current) {
        clearTimeout(suppressTimeoutRef.current)
      }
    },
    [],
  )

  const visualItems = useMemo(
    () =>
      editions.map((edition, index) => {
        const distance = clampDistance(index - activeIndex)
        const scale = Math.max(0.68, 1 - distance * 0.08)
        const opacity = Math.max(0.3, 1 - distance * 0.12)

        return {
          edition,
          scale,
          opacity,
          distance,
          isActive: edition.id === activeId,
        }
      }),
    [activeId, activeIndex, editions],
  )

  function selectNearestToCenter() {
    if (suppressAutoSelectRef.current || dragStateRef.current.dragging) {
      return
    }

    const track = trackRef.current

    if (!track) {
      return
    }

    const center = track.scrollLeft + track.clientWidth / 2
    let nearestId = activeId
    let nearestDistance = Number.POSITIVE_INFINITY

    for (const [id, node] of itemRefs.current.entries()) {
      const nodeCenter = node.offsetLeft + node.offsetWidth / 2
      const distance = Math.abs(nodeCenter - center)

      if (distance < nearestDistance) {
        nearestDistance = distance
        nearestId = id
      }
    }

    if (nearestId !== activeId) {
      onSelect(nearestId)
    }
  }

  function handlePointerDown(event) {
    const track = trackRef.current
    if (!track) return

    dragStateRef.current.dragging = true
    dragStateRef.current.pointerId = event.pointerId
    dragStateRef.current.startX = event.clientX
    dragStateRef.current.startScrollLeft = track.scrollLeft

    track.classList.add('timeline-track--dragging')
    track.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event) {
    const track = trackRef.current
    const state = dragStateRef.current

    if (!track || !state.dragging || state.pointerId !== event.pointerId) {
      return
    }

    const deltaX = event.clientX - state.startX
    track.scrollLeft = state.startScrollLeft - deltaX
  }

  function finishDrag(pointerId) {
    const track = trackRef.current
    const state = dragStateRef.current

    if (!track || !state.dragging || state.pointerId !== pointerId) {
      return
    }

    state.dragging = false
    state.pointerId = null
    track.classList.remove('timeline-track--dragging')
    selectNearestToCenter()
  }

  function handleWheel(event) {
    const track = trackRef.current

    if (!track) {
      return
    }

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault()
      track.scrollLeft += event.deltaY
    }
  }

  return (
    <nav className="timeline" aria-label="Olympic editions timeline">
      <div className="timeline-center-indicator" aria-hidden="true" />
      <div
        ref={trackRef}
        className="timeline-track"
        onScroll={selectNearestToCenter}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(event) => finishDrag(event.pointerId)}
        onPointerCancel={(event) => finishDrag(event.pointerId)}
      >
        <ul className="timeline-list">
          {visualItems.map(({ edition, isActive, opacity, scale, distance }) => (
            <li
              key={edition.id}
              className="timeline-item"
              style={{
                '--item-opacity': opacity,
                '--item-scale': scale,
                '--item-distance': distance,
              }}
              ref={(node) => {
                if (node) {
                  itemRefs.current.set(edition.id, node)
                } else {
                  itemRefs.current.delete(edition.id)
                }
              }}
            >
              <button
                type="button"
                onClick={() => onSelect(edition.id)}
                aria-current={isActive ? 'true' : undefined}
                aria-label={`${edition.year} ${edition.season === 'Winter' ? 'Winter' : 'Summer'} - ${edition.city}`}
              >
                <span className="timeline-year">{edition.year}</span>
                <span className="timeline-city">{edition.city}</span>
                <span className="timeline-season">{edition.season === 'Winter' ? 'Zimowe' : 'Letnie'}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default TimelineBar
