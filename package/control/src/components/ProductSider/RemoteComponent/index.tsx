import React from 'react'
import Empty from 'src/common/components/Empty'

const RemoteComponent = () => {
  return (
    <div>
      <Empty/>
    </div>
  )
}

export default React.memo(RemoteComponent)
