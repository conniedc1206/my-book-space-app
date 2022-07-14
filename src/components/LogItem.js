import React from 'react'

function LogItem({log}) {
  console.log(log)
  return (
    // each log item becomes a clickable card that leads to "/logs/:id"
    // each card has a button to delete (DELETE request to endpoint "/logs/:id")
    <div>Log Item</div>
  )
}

export default LogItem