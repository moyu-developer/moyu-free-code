import { useEffect } from "react"

export default () => {
  console.log('initial')
  useEffect(() => {
    window.addEventListener("message", (e) => {
      console.log(e.data, e.data)
    })
  }, [])
}