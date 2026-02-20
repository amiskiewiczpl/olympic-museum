import { useEffect, useMemo, useRef } from 'react'

function clampDistance(distance) {
  return Math.min(6, Math.abs(distance))
}

function TimelineBar({ editions, activeId, activeIndex, onSelect }) {
  const trackRef = useRef(null)
  const itemRefs = useRef(new Map())
  const wheelTimeoutRef = useRef(null)
  const dragStateRef = useRef({
    isPointerDown: false,
    dragging: false,
    pointerId: null,
    startX: 0,
    startScrollLeft: 0,
  })

  useEffect(() => {
    const activeNode = itemRefs.current.get(activeId)

    if (activeNode) {
      activeNode.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [activeId])

  useEffect(
    () => () => {
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current)
      }
    },
    [],
  )

  const visualItems = useMemo(
    () =>
      editions.map((edition, index) => {
        const distance = clampDistance(index - activeIndex)
        const scale = Math.max(0.88, 1 - distance * 0.025)
        const opacity = Math.max(0.72, 1 - distance * 0.05)

        return {
          edition,
          scale,
          opacity,
          isActive: edition.id === activeId,
        }
      }),
    [activeId, activeIndex, editions],
  )

  function selectNearestToCenter() {
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
    if (event.target.closest('button')) return

    dragStateRef.current.isPointerDown = true
    dragStateRef.current.dragging = false
    dragStateRef.current.pointerId = event.pointerId
    dragStateRef.current.startX = event.clientX
    dragStateRef.current.startScrollLeft = track.scrollLeft

    track.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event) {
    const track = trackRef.current
    const state = dragStateRef.current

    if (!track || !state.isPointerDown || state.pointerId !== event.pointerId) {
      return
    }

    const deltaX = event.clientX - state.startX
    if (!state.dragging && Math.abs(deltaX) < 6) {
      return
    }

    if (!state.dragging) {
      state.dragging = true
      track.classList.add('timeline-track--dragging')
    }

    track.scrollLeft = state.startScrollLeft - deltaX
  }

  function finishDrag(pointerId) {
    const track = trackRef.current
    const state = dragStateRef.current

    if (!track || !state.isPointerDown || state.pointerId !== pointerId) {
      return
    }

    const shouldSnap = state.dragging
    state.isPointerDown = false
    state.dragging = false
    state.pointerId = null
    track.classList.remove('timeline-track--dragging')
    if (shouldSnap) {
      selectNearestToCenter()
    }
  }

  function handleWheel(event) {
    const track = trackRef.current

    if (!track) {
      return
    }

    const isHorizontalIntent = event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)
    if (isHorizontalIntent) {
      event.preventDefault()
      const delta = Math.abs(event.deltaX) > 0 ? event.deltaX : event.deltaY
      track.scrollLeft += delta

      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current)
      }
      wheelTimeoutRef.current = setTimeout(() => {
        selectNearestToCenter()
      }, 140)
    }
  }

  return (
    <nav className="timeline" aria-label="Olympic editions timeline">
      <div
        ref={trackRef}
        className="timeline-track"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(event) => finishDrag(event.pointerId)}
        onPointerCancel={(event) => finishDrag(event.pointerId)}
      >
        <ul className="timeline-list">
          {visualItems.map(({ edition, isActive, opacity, scale }) => (
            <li
              key={edition.id}
              className="timeline-item"
              style={{
                '--item-opacity': opacity,
                '--item-scale': scale,
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
