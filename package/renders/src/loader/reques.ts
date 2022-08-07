import { useState } from "react"

export interface RequestSchemaType {
  url?: string;
  method?: string;
  params: Record<string, any>
}

export default (requestSchema: RequestSchemaType) => {
  const [remoteData, setRemoteData] = useState()

  const handleRemoteRequestSchema = async () => {
    fetch(requestSchema?.url, {
      method: requestSchema?.method,
      body: JSON.stringify(requestSchema?.params)
    })
  }

  return {
    data: remoteData,
    reload: remoteData
  }
}