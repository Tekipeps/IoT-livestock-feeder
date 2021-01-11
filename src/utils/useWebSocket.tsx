import { EventNoteSharp } from "@material-ui/icons";
import React from "react";
import { Message } from "../../types";

interface Props {
  url: string;
}

const useWebSocket = ({ url }: Props) => {
  const ref = React.useRef<WebSocket>();
  const [state, setState] = React.useState<Message>({
    led: false,
    distance: "",
  });

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
      let { data } = event;
      data = String(data);
      if (data.startsWith("led: ")) {
        setState({ ...state, led: data.substring(5) === "1" });
      } else if (data.startsWith("distance: ")) {
        setState({ ...state, distance: data.substring(10) });
      }
    }
    initWebSocket();
    return () => ref.current?.close();
  }, []);

  const toggleLed = () => {
    ref.current?.send("toggleLed");
  };

  const getDistance = () => {
    ref.current?.send("getDistance");
  };
  return { toggleLed, state, getDistance };
};

export default useWebSocket;
