//Här ska alla routes vara stored.
import { Routes, Route } from "react-router-dom";
import { AchievementsPage } from "../pages/AchievementsPage/AchievementsPage";
import { LandingPage } from "../pages/LandingPage/LandingPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/achievements" element={<AchievementsPage />}></Route>
        <Route path="/createprofile" element={<ProfilePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};
