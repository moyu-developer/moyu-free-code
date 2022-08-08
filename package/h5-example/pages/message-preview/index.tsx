import * as React from 'react';
import useMessage from '../../hooks/useMessage'
import {  RemoteComponent } from '@moyu-code/renders'

const MessagePreview = () => {

  const message: any = useMessage()

  console.log(message, 'message')

  return (
    <div>
      { message?.url ? <RemoteComponent url={message?.url} schemaProps={message?.schema} /> : null }
    </div>
  )
}

export default MessagePreview