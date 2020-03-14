import { useState } from 'react'

const area = 48
const name = 'hamburger-react'
const duration = 0.4
const timing = 'cubic-bezier(0, 0, 0, 1)'
const translate = 4.6325

export const Burger = ({
  color = '#000',
  direction = 'left',
  rounded = false,
  size = 32,
  onToggle,
  render,
}) => {
  const [toggled, toggle] = useState(false)

  const width = Math.max(12, Math.min(area, size))
  const room = Math.round((area - width) / 2)

  const barHeightRaw = width / 12
  const barHeight = Math.round(barHeightRaw)
  const marginRaw = width / 4.5
  const margin = Math.round(marginRaw)

  const height = barHeight * 3 + margin * 2
  const topOffset = Math.round((area - height) / 2)

  const deviation = (barHeightRaw - barHeight) + (marginRaw - margin)
  const move = (width / translate) - (deviation / (4 / 3))
  const isLeft = direction === 'left'

  const burgerStyles = {
    cursor: 'pointer',
    height: `${area}px`,
    outline: 'none',
    position: 'relative',
    transition: `${duration}s ${timing}`,
    userSelect: 'none',
    width: `${area}px`,
  }

  const barStyles = {
    background: color,
    height: `${barHeight}px`,
    left: `${room}px`,
    position: 'absolute',
    width: `${width}px`,
  }

  const handler = () => {
    if (onToggle) {
      onToggle(!toggled)
    }

    toggle(!toggled)
  }

  if (rounded) {
    barStyles['borderRadius'] = '9em'
  }

  return render({
    barHeight,
    barStyles,
    burgerStyles,
    duration,
    handler,
    isLeft,
    margin,
    move,
    name,
    timing,
    toggled,
    topOffset,
  })
}
