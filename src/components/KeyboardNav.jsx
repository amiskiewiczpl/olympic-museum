import { useEffect } from 'react'

function KeyboardNav({ onPrev, onNext, onEscape }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        onPrev()
      }

      if (event.key === 'ArrowRight') {
        onNext()
      }

      if (event.key === 'Escape' && onEscape) {
        onEscape()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onEscape, onNext, onPrev])

  return null
}

export default KeyboardNav
