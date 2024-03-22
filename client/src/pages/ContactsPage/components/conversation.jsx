import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import pfpPlaceholder from "../assets/pfpPlaceholder.png";
import ranking from "../assets/ranking.png";
import star from "../assets/star.png";

import useConversation from "../../../zustand/useConversation";

export const Conversation = ({ conversation }) => {
  const navigate = useNavigate();
  const { selectedConversation, setSelectedConversation } = useConversation();

  const onClick = () => {
    setSelectedConversation(conversation);
    navigate("/chat");
  };

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <li className="network-listitem" onClick={onClick}>
      <img src={pfpPlaceholder} />
      <div className="network-listitem-container">
        <h3>{conversation.fullName}</h3>
        <div>
          <img src={star} />
          <p>{conversation.points}</p>
          <p>|</p>
          <img src={ranking} />
          <p>{conversation.ranking}</p>
        </div>
        <p>{conversation.position}</p>
      </div>
    </li>
  );
};

Conversation.propTypes = {
  conversation: PropTypes.object.isRequired,
};
