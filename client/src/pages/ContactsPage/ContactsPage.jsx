import { CgProfile } from "react-icons/cg";
import { FaMedal } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import useGetConversation from "../../utils/useGetConversation";
import { Conversation } from "./components/conversation";

export const ContactsPage = () => {
  const { loading, conversations } = useGetConversation();
  console.log("CONVERSATIONS: ", conversations);
  const navigate = useNavigate();

  const onNavigateHandle = () => {
    navigate("/chat");
  };

  return (
    <div className="contacts-container">
      <h2>Your chats</h2>
      <ul className="contacts-list">
        {conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            onNavigateHandle={onNavigateHandle}
            lastIdx={idx === conversation.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};
