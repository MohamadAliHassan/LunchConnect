//Här ska alla routes vara stored.
import { Routes, Route } from "react-router-dom";
import { AchievementsPage } from "../pages/AchievementsPage/AchievementsPage";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages";
import { NetworkPage } from "../pages/NetworkPage/NetworkPage";
import { HomePage } from "../pages/HomePage/HomePage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/achievements" element={<AchievementsPage />}></Route>
        <Route path="/createprofile" element={<ProfilePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/network" element={<NetworkPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </>
  );
};
