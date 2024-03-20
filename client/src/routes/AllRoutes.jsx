//Här ska alla routes vara stored.
import { Navigate, Routes, Route } from "react-router-dom";
import { AchievementsPage } from "../pages/AchievementsPage/AchievementsPage";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import { CreateProfilePage } from "../pages/CreateProfilePage/CreateProfilePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages";
import { NetworkPage } from "../pages/NetworkPage/NetworkPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { UserPage } from "../pages/UserPage/UserPage";
import { EventsPage } from "../pages/EventsPage/EventsPage";
import { ChatPage } from "../pages/ChatPage/ChatPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { SettingsPage } from "../pages/SettingsPage/SettingsPage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { LeaderBoardPage } from "../pages/LeaderBoardPage/LeaderBoardPage";
import { LunchesPage } from "../pages/LunchesPage/LunchesPage";

import { useAuthContext } from "../Context/AuthContext";

export const AllRoutes = () => {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route
          path="/"
          element={
            authUser ? <LandingPage /> : <Navigate to="/login" />
          }></Route>
        <Route
          path="/achievements"
          element={
            authUser ? <AchievementsPage /> : <Navigate to="/login" />
          }></Route>
        <Route
          path="/createprofile"
          element={
            authUser ? <CreateProfilePage /> : <Navigate to="/login" />
          }></Route>
        <Route
          path="/network"
          element={
            authUser ? <NetworkPage /> : <Navigate to="/login" />
          }></Route>
        <Route
          path="/home"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}></Route>
        <Route
          path="/user"
          element={authUser ? <UserPage /> : <Navigate to="/login" />}></Route>
        <Route
          path="/chat"
          element={authUser ? <ChatPage /> : <Navigate to="/login" />}></Route>
        <Route
          path="/profile"
          element={
            authUser ? <ProfilePage /> : <Navigate to="/login" />
          }></Route>
        <Route
          path="/add-event"
          element={
            authUser ? <EventsPage /> : <Navigate to="/login" />
          }></Route>
        <Route
          path="/settings"
          element={
            authUser ? <SettingsPage /> : <Navigate to="/login" />
          }></Route>
        <Route
          path="/contacts"
          element={
            authUser ? <ContactsPage /> : <Navigate to="/login" />
          }></Route>
        <Route
          path="/leaderboard"
          element={
            authUser ? <LeaderBoardPage /> : <Navigate to="/login" />
          }></Route>
        <Route
          path="/lunches"
          element={
            authUser ? <LunchesPage /> : <Navigate to="/login" />
          }></Route>
      </Routes>
    </>
  );
};
