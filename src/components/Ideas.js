import React from 'react'
import { useParams } from 'react-router-dom'

function Ideas() {
    const param = useParams();
  return (
    <div>
      Idea param is {JSON.stringify(param)}
    </div>
  )
}

export default Ideas
