import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Business() {
    const [searchParams, setSearchParams] = useSearchParams()
    const queryParamStatus = searchParams.get('unicornStatus')
  return (
    <div>
      This is Business Component
      {queryParamStatus}
      <button onClick={()=> setSearchParams({unicornStatus:'true'})}>Generate Query param</button>
    </div>
  )
}

export default Business
