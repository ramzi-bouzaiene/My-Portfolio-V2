import { useState, useEffect } from 'react'
import styles from './TypeWriter.module.css'

interface TypeWriterProps {
  text: string
  speed?: number
  className?: string
}

export const TypeWriter = ({ text, speed = 100, className }: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayedText('')
    setCurrentIndex(0)
    setIsComplete(false)
  }, [text])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayedText}
      <span className={`${styles.cursor} ${isComplete ? styles.blink : ''}`}>|</span>
    </span>
  )
}
