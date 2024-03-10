import { useEffect, useRef } from "react";
import useGetMessages from "../../../utils/useGetMessages";
import { Message } from "./Message";

export const Messages = () => {
  return (
    <div className="msg-container">
      <Message />
    </div>
  );
};
