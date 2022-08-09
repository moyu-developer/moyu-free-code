import { useEffect, useState } from "react"

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
    }).then(res => res.json()).then(res => {
      setRemoteData(res)
    })
  }

  useEffect(() => {
    handleRemoteRequestSchema()
  }, [requestSchema])

  return {
    data: remoteData,
    reload: remoteData
  }
}