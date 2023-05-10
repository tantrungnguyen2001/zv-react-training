import React from 'react'

export default function CountDown({ countdown }) {
  return (
    <div>Countdown: {(countdown == -1)? '' : countdown}</div>
  )
}