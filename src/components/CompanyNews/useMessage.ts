import { useState, useEffect, useRef } from 'react';

export const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const webSocket = useRef(null);

  useEffect(() => {
    (webSocket as any).current = new WebSocket("wss://www.bitmex.com/realtime?subscribe=trade");
    (webSocket as any).current.onmessage = (message: any) => {
      setMessages((prevMessages) => [...prevMessages, message.data] as any)};

    return () => (webSocket as any).current.close();
  },[]);
  
  return messages;
};