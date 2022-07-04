import { useEffect } from "react";

export default function FullPreview() {
  const onReceiveParentComponentSchema = () => {
    console.log('message')
  };

  useEffect(() => {
    window.addEventListener("message", onReceiveParentComponentSchema, false); // 接收接入方页面发送的消息

    return () => {
      window.removeEventListener("message", onReceiveParentComponentSchema, false)
    }
  }, []);

  return (
    <div>
      <img src="https://s2.loli.net/2022/07/04/TM91U7VADztBgX2.jpg" />
    </div>
  )
}
