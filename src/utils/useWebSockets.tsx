import React from "react";

interface Props {
  url: string;
}

const useWebSockets = ({ url }: Props) => {
  const ref = React.useRef<WebSocket>();
  const [message, setMessage] = React.useState<string>("");

  React.useEffect(() => {
    const gateway = `ws://${url}/ws`;
    function initWebSocket() {
      console.log("Trying to open a WebSocket connection...");
      const websocket = new WebSocket(gateway);
      websocket.onopen = () => console.log("Websocket connected");
      websocket.onclose = () => {
        console.log("Connection closed");
        setTimeout(initWebSocket, 2000);
      };
      websocket.onmessage = onMessage; // <-- add this line
      ref.current = websocket;
    }

    function onMessage(event: WebSocketMessageEvent) {
      let state;
      if (event.data == "1") {
        state = "ON";
      } else {
        state = "OFF";
      }
      setMessage(state);
    }
    initWebSocket();
    return () => ref.current?.close();
  }, []);

  const toggle = () => {
    ref.current?.send("toggle");
  };

  return { toggle, message };
};

export default useWebSockets;
