import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./User.jsx";
import fetchHelper from "../../../utils/fetchHelper";

export const Networking = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const onNavigateHandle = () => {
    navigate("/user");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetchHelper("/api/user", "GET");
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setUsers(data);
        }
      } catch (error) {
        console.log("Error while fetching user", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="network-list-container">
      <p>Connect with other people:</p>
      <ul className="network-list">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </ul>
    </div>
  );
};
