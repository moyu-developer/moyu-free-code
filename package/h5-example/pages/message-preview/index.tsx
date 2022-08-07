import * as React from 'react';
import useMessage from '../../hooks/useMessage'
import {  RemoteComponent } from '@moyu-code/renders'

const MessagePreview = () => {

  const message: any = useMessage()

  return (
    <div>
      { message?.url ? <RemoteComponent url={message?.url} /> : null }
      
    </div>
  )
}

export default MessagePreview