import React from "react";
import io from "socket.io-client";

interface Props {
  userId: string;
  enabled: boolean;
  url: string;
  onConnected: () => void;
}

interface Message {
  content: string;
}

const useWebSockets = ({ userId, onConnected, enabled, url }: Props) => {
  const ref = React.useRef<SocketIOClient.Socket>();
  const [messages, setMessages] = React.useState<Message[]>([]);

  React.useEffect(() => {
    if (!enabled) return;
    const socket = io(url);
    socket.emit("joinRoom", userId);
    socket.emit("message", (msg: Message) => {
      setMessages([...messages, msg]);
    });
    socket.on("disconnect", () => {
      console.log("disconnected from websocket");
    });
    socket.on("connect", () => {
      if (onConnected) {
        onConnected();
      }
    });
    socket.on("reconnect", () => {
      socket.emit("joinRoom");
    });
    ref.current = socket;

    return () => {};
  }, [enabled, messages]);

  const send = (msg: string, userId: string) => {
    ref.current?.emit("message", {
      content: msg,
      userId,
    });
  };
  return { send };
};

export default useWebSockets;
