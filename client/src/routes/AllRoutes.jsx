//Här ska alla routes vara stored.
import { Routes, Route } from "react-router-dom";
import { AchievementsPage } from "../pages/AchievementsPage/AchievementsPage";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import { CreateProfilePage } from "../pages/CreateProfilePage/CreateProfilePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages";
import { NetworkPage } from "../pages/NetworkPage/NetworkPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { UserPage } from "../pages/UserPage/UserPage";

import { ChatPage } from "../pages/ChatPage/ChatPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/achievements" element={<AchievementsPage />}></Route>
        <Route path="/createprofile" element={<CreateProfilePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/network" element={<NetworkPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </>
  );
};
