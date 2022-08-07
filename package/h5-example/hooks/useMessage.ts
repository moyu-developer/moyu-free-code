import { useEffect, useState } from "react"

export default () => {

  const [data, setData] = useState()

  useEffect(() => {
    window.addEventListener("message", (e) => {
      console.log(e.data)
      setData(e?.data)
    })
    return () => {
    }
  }, [])

  return data
}