import React from 'react'
import LogItem from './LogItem'

function Logs({user}) {
  
  console.log(user)

  const renderLogs = user.logs?.map((log) => {
    return <LogItem key={log.id} log={log} />
  })

  
  return (
    <div>
      {renderLogs} 
    </div>
  )
}

export default Logs