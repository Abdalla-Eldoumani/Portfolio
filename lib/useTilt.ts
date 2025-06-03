import { useRef, useEffect } from 'react'

export function useTilt(max = 5) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      const rotateX = (-y / rect.height) * max
      const rotateY = (x / rect.width) * max
      node.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
    const reset = () => {
      node.style.transform = ''
    }
    node.addEventListener('mousemove', handleMove)
    node.addEventListener('mouseleave', reset)
    return () => {
      node.removeEventListener('mousemove', handleMove)
      node.removeEventListener('mouseleave', reset)
    }
  }, [max])

  return { ref }
}
