import React from 'react'
import LogItem from './LogItem'
import Box from '@mui/material/Box';

function Logs( { user } ) {

  const renderLogs = user.logs?.map(log => {
    return <LogItem key={log.id}
    log={log}
    />
  })
  
  return (
    <Box container 
    sx={{ m: 2, 
      border: 1, 
      height: "700px", 
      borderRadius: 1, 
      display: "flex", 
      overflowX: "auto" }}
    >
      {renderLogs}
      {/* <AddLog /> */}
      {/* <LogDetails /> */}
    </Box>
  )
}

export default Logs