import React from 'react'
import AddLog from "./AddLog"
import LogItem from './LogItem'
import LogDetails from './LogDetails'

function Logs() {
  return (
    <div>
        <AddLog />
        <LogItem />
        <LogDetails />
    </div>
  )
}

export default Logs