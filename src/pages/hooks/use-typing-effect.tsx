"use client"

import { useState, useEffect } from "react"

export const useTypingEffect = (text: string, speed = 50, startDelay = 0) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (startDelay > 0) {
      const delayTimer = setTimeout(() => {
        setHasStarted(true)
      }, startDelay)
      return () => clearTimeout(delayTimer)
    } else {
      setHasStarted(true)
    }
  }, [startDelay])

  useEffect(() => {
    if (!hasStarted) return

    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, hasStarted])

  return { displayedText, isComplete }
}
