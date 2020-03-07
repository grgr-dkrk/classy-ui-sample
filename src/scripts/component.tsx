import React, { useState } from 'react'
import { styleButton } from './styles'

export const SampleButton = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <button
      className={styleButton({ isActive })} // ここ
      aria-pressed={isActive}
      onClick={handleClick}
    >
      Sample Button
    </button>
  )
}
