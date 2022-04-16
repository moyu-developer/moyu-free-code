import React from 'react'

const AntSvg = (props: { icon: any }) => (
  <span className='anticon anticon-copy'>
    {React.createElement(props.icon)}
  </span>
)

export default AntSvg
