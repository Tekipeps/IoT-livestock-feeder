import React from "react";
import { Dispatch } from "redux";
import { toggleLedState } from "../store/ledState/actions";
import { setFeedDistance } from "../store/feederState/actions";

interface Props {
  url: string;
  dispatch: Dispatch;
}

const useWebSocket = ({ url, dispatch }: Props) => {
  const ref = React.useRef<WebSocket>();

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
        dispatch(toggleLedState(data.substring(5)));
      } else if (data.startsWith("distance: ")) {
        dispatch(setFeedDistance(data.substring(10)));
      }
    }
    initWebSocket();
    return () => ref.current?.close();
  }, []);

  const toggleLed = () => {
    if (ref.current?.OPEN == ref.current?.readyState)
      ref.current?.send("toggleLed");
  };

  const getDistance = () => {
    if (ref.current?.OPEN == ref.current?.readyState)
      ref.current?.send("toggleLed");
  };
  return { toggleLed, getDistance };
};

export default useWebSocket;
